const header = document.getElementById("header");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelectorAll("#main-nav a");
const hero = document.getElementById("hero");

menuBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting) {
      document.body.classList.remove("stuck");
    } else {
      document.body.classList.add("stuck");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(hero);
