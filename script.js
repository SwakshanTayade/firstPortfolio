let nnn = document.getElementById('nnn');
let sid = document.getElementById('sid');


function myFunction() {
    var x = document.getElementById("sid");
    if (x.style.display === "block") {
      x.style.display = "none";
      x.style.transition="width 2s";
    } else {
        x.style.display = "block";
        x.style.transition="width 2s";
    }
  }
