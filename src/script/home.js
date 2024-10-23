// navbar fixed
window.onscroll = function () {
    const header = document.querySelector("header"); // memanggil langsung elementnnya
    const fixedNav = header.offsetTop;
  
    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
  // humburger
  const hamburger = document.querySelector("#hamburger"); // via id
  const navMenu = document.querySelector("#nav-menu"); // via id
  
  hamburger.addEventListener("click", function () {
    // kalau udah ada kelasnya hilangkan dan kalau belum ada kelasnya tambahin
    hamburger.classList.toggle("hamburger-active");
    // untuk navmenu versi dekstop
    navMenu.classList.toggle("hidden");
  });
// nav