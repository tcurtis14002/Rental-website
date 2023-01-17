const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".hide");

navBtn.addEventListener("click", () => {
  const nav = navLinks.classList;
  nav.toggle("hide");
});
