document.addEventListener("DOMContentLoaded", function() {
   
    var showButton = document.getElementById("burger");
    var hideButton = document.getElementById("close");
    var containers = document.querySelectorAll(".drop_down_burger");
    
    showButton.addEventListener("click", function() {
        containers.forEach(function(container) {
            container.style.display = "block";
        });
    });

    hideButton.addEventListener("click", function() {
        containers.forEach(function(container) {
            container.style.display = "none";
        });
    });
});