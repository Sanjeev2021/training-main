
function Video(obj) {
  let batman = document.getElementById("batman");
  let spiderman = document.getElementById("spiderman");
  let ironMan = document.getElementById("iron-man");

  let batmanClass = document.getElementById("batmanClass");
  let spidermanClass = document.getElementById("spidermanClass");
  let ironManClass = document.getElementById("iron-manClass");

  console.log(obj.id)

  if (obj.id == "batmanClass") {
      batman.style.display = "block";
      spiderman.style.display = "none";
      ironMan.style.display = "none";

      batmanClass.classList.add("active")
      spidermanClass.classList.remove("active")
      ironManClass.classList.remove("active")

      batmanClass.getElementsByTagName("p")[0].style.display = "block"
      spidermanClass.getElementsByTagName("p")[0].style.display = "none"
      ironManClass.getElementsByTagName("p")[0].style.display = "none"
  }
  else if (obj.id == "spidermanClass") {
      batman.style.display = "none";
      spiderman.style.display = "block";
      ironMan.style.display = "none";

      batmanClass.classList.remove("active")
      spidermanClass.classList.add("active")
      ironManClass.classList.remove("active")

      batmanClass.getElementsByTagName("p")[0].style.display = "none"
      spidermanClass.getElementsByTagName("p")[0].style.display = "block"
      ironManClass.getElementsByTagName("p")[0].style.display = "none"
  }
  else {
      batman.style.display = "none";
      spiderman.style.display = "none";
      ironMan.style.display = "block";

      batmanClass.classList.remove("active")
      spidermanClass.classList.remove("active")
      ironManClass.classList.add("active")

      batmanClass.getElementsByTagName("p")[0].style.display = "none"
      spidermanClass.getElementsByTagName("p")[0].style.display = "none"
      ironManClass.getElementsByTagName("p")[0].style.display = "block"
  }
}

let burgerOpen = false;
function Hamburger() {
  let open = document.getElementById("open")
  let close = document.getElementById("close")

  let normalNav = document.getElementById("normal-nav")
  let mobileNav = document.getElementById("mobile-nav")

  if (burgerOpen) {
    open.style.display = "flex";
    close.style.display = "none";

    normalNav.classList.remove("z-index-6")
    mobileNav.style.display = "none"
  } else {
    open.style.display = "none";
    close.style.display = "flex";

    normalNav.classList.add("z-index-6")
    mobileNav.style.display = "block"
  }

  burgerOpen = !burgerOpen;
}

$(document).ready(function(){
  $('.dropdown-toggle').click(function(){
    $('.dropdown-menu').toggleClass('active');
    $('.nav-items').toggleClass('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });
});



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
