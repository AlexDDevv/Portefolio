const arrow = document.getElementById("arrow");
const navBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 1.05) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
