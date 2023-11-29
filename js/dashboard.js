const stickyTop = document.querySelector(".sidebar-sticky");
const collapse = document.querySelector(".collapse");
const Humberger = document.querySelector(".navbar-toggler-icon");

Humberger.addEventListener("click", function () {
  // document.body.style.paddingRight = "400px";
  stickyTop.style.overflow = "visible";
});

collapse.addEventListener("hidden.bs.collapse", function () {
  // document.body.style.paddingRight = "0";
  stickyTop.style.overflow = "hidden";
});

// Active
$(document).ready(function () {
  // Dapatkan URL halaman saat ini
  var currentLocation = window.location.href;

  // Loop melalui setiap tautan di dalam sidebar
  $("#sidebarMenu a").each(function () {
    var linkHref = $(this).attr("href");

    // Bandingkan URL halaman saat ini dengan href tautan di sidebar
    if (currentLocation.includes(linkHref)) {
      // Jika cocok, tambahkan kelas 'active'
      $(this).addClass("active");
    }
  });
});

// Menambahkan peristiwa klik pada item 'Update Achievement'
var updateAchievementItem = document.getElementById("updateAchievementItem");
var updateAchievementSubMenu = document.getElementById("updateAchievementSubMenu");

updateAchievementItem.addEventListener("click", function (event) {
  event.preventDefault();

  // Toggle tampilan submenu
  updateAchievementSubMenu.classList.toggle("active");
});

// Menangani peristiwa klik pada setiap elemen <li> dalam submenu
var submenuItems = document.querySelectorAll("#updateAchievementSubMenu li");

submenuItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    // Mendapatkan URL dari atribut href
    var targetUrl = event.currentTarget.querySelector("a").getAttribute("href");

    // Mengarahkan pengguna ke URL yang ditentukan
    window.location.href = targetUrl;
  });
});
