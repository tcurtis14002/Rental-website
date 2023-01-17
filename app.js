const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".hide");

navBtn.addEventListener("click", () => {
  const nav = navLinks.classList;
  nav.toggle("show");
});

const date = document.getElementById("date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
