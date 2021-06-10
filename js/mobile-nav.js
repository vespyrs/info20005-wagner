function toggleNav() {
  if (document.body.className=="modal-open") {
    document.getElementById("nav-mobile-menu").style.width = "0%";
    document.getElementById("mobile-nav-products").style.width = "0%";
    document.body.classList.remove("modal-open");
  }
  else {
    document.getElementById("nav-mobile-menu").style.width = "100%";
    console.log('menu opened')
    document.body.className += "modal-open";
  }
}
  
function closeNav() {
    document.getElementById("nav-mobile-menu").style.width = "0%";
    document.getElementById("mobile-nav-products").style.width = "0%";
    document.body.classList.remove("modal-open");
}

function openInnerNav() { // open subcategory mobile menu
  document.getElementById("mobile-nav-products").style.width = "100%";
  console.log('menu opened')
}

function closeInnerNav() { // close subcategory mobile menu
  document.getElementById("mobile-nav-products").style.width = "0%";
  document.body.classList.remove("modal-open");
}

function openFilter() { // open mobile filter menu on category page
  document.getElementById("mobile-refine-menu").style.width = "100%";
  document.body.className += "modal-open";
  console.log('filter-open')
}


function closeFilter() {
  document.getElementById("mobile-refine-menu").style.width = "0%";
  document.body.classList.remove("modal-open");
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}