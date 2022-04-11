window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("sectionid").style.padding = "30px 10px 30px 10px";
      document.getElementById("sectionid").style.background = "#00283f";
    } else {
      document.getElementById("sectionid").style.padding = "30px 40px 30px 40px";
      document.getElementById("sectionid").style.background = "none";
    }
  }