const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

const button = document.getElementById("openModal");
const socialIcons = document.getElementById("socialIcons");

button.addEventListener("click", () => {
  if (socialIcons.style.display === "none") {
    socialIcons.style.display = "block";
  } else {
    socialIcons.style.display = "none";
  }
});

