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
