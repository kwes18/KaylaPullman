window.onload = init();

function init() {

let btnContainer = document.getElementById("navbar");

let links = btnContainer.getElementsByClassName("link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", ()=> {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}