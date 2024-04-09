document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".section__three__images");
    const scrollLeftButton = document.getElementById("scroll-left-two");
    const scrollRightButton = document.getElementById("scroll-right-two");
  
    scrollLeftButton.addEventListener("click", function() {

      scrollContainer.scrollBy({ left: -305, behavior: "smooth" });
    });
  
    scrollRightButton.addEventListener("click", function() {
        
      scrollContainer.scrollBy({ left: 305, behavior: "smooth" });
    });
  });