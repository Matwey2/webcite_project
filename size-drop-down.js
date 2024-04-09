document.getElementById("size_drop").onclick = function() {
    var contents = document.getElementsByClassName("size__drop__down");
    for (var i = 0; i < contents.length; i++) {
      var content = contents[i];
      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("clicked"); 
      } else {
        content.style.display = "block";
        this.classList.add("clicked"); 
      }
    }
  };
  document.getElementById("color_drop").onclick = function() {
    var contents = document.getElementsByClassName("color__drop__down");
    for (var i = 0; i < contents.length; i++) {
      var content = contents[i];
      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("clicked"); 
      } else {
        content.style.display = "block";
        this.classList.add("clicked"); 
      }
    }
  };
