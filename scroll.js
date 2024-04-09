document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".section__two__images");
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");
  
    scrollLeftButton.addEventListener("click", function() {

      scrollContainer.scrollBy({ left: -305, behavior: "smooth" });
    });
  
    scrollRightButton.addEventListener("click", function() {
        
      scrollContainer.scrollBy({ left: 305, behavior: "smooth" });
    });
  });