// const stickyTop = document.querySelector(".sidebar-sticky");
// const collapse = document.querySelector(".collapse");
// const button = document.querySelector(".button");
// const Humberger = document.querySelector(".navbar-toggler-icon");

// Humberger.addEventListener("click", function () {
//   stickyTop.style.overflow = "visible";
//   button.style.overflow = "hidden";
// });

// collapse.addEventListener("hidden.bs.collapse", function () {
//   stickyTop.style.overflow = "hidden";
//   button.style.overflow = "visible";
// });

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the sidebar and the toggle button
  const sidebar = document.getElementById("sidebarMenu");
  const toggleButton = document.querySelector(".toggle-button");

  // Add an event listener to the toggle button
  toggleButton.addEventListener("click", function () {
    // Toggle the 'visible' class on the toggle button
    toggleButton.classList.toggle("visible");
  });

  // Add an event listener to the sidebar to hide the toggle button when the sidebar is collapsed
  sidebar.addEventListener("transitionend", function () {
    // Check if the sidebar is collapsed
    const isCollapsed = sidebar.classList.contains("collapse");

    // If the sidebar is collapsed, remove the 'visible' class from the toggle button
    if (isCollapsed) {
      toggleButton.classList.remove("visible");
    }
  });
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
