window.onload = () => {
    const adImages = [
      "images/superhero1.png",
      "images/superhero2.png",
      "images/superhero3.png",
      "images/superhero4.png",
      "images/superhero5.png",
      "images/superhero6.png"
    ];
  
    let theAd = 0;
  
    const adBanner = document.getElementById("adBanner");
  
    const rotate = () => {
      theAd++;
      if (theAd === adImages.length) {
        theAd = 0;
      }
      adBanner.src = adImages[theAd];
      setTimeout(rotate, 1000);
    };
  
    adBanner.addEventListener("click", () => {
    
      switch (theAd) {
        case 0:
          window.location.href = "link1.html";
          break;
        case 1:
          window.location.href = "link2.html";
          break;
        case 2:
          window.location.href = "link3.html";
          break;
        case 3:
          window.location.href = "link4.html";
          break;
        case 4:
          window.location.href = "link5.html";
          break;
        case 5:
          window.location.href = "link6.html";
          break;
        default:
          window.location.href = "link1.html";
      }
    });
  
    rotate();
  };
  