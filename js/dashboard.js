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
