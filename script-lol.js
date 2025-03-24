document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loader").style.backgroundColor = "#dadada";
});
let progress = 0;
const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');
const loaderText = document.querySelector('.loader-text');
const loader = document.querySelector('.loader');
const content = document.querySelector('.content');

const loadingInterval = setInterval(() => {
  progress++;
  if (progress <= 100) {
    const currentHeight = (progress / 100) * 50;
    barTop.style.height = `${currentHeight}vh`;
    barBottom.style.height = `${currentHeight}vh`;
  } else {
    clearInterval(loadingInterval);
    setTimeout(() => {
     
      barTop.style.transform = "translateY(-100%)";
      barBottom.style.transform = "translateY(100%)";
      loader.style.background = "#dadada00";

      
      setTimeout(() => {
        loader.style.transition = "background 0.5s ease";
        barTop.style.transform = "translateY(-100%)";
        barBottom.style.transform = "translateY(100%)";
        loader.style.background = "#dadada00";

        setTimeout(() => {
          loader.style.display = "none";
          content.style.display = "block";
          document.body.style.overflow = "auto";
        }, 5000);
      }, 2000);
    }, 1000);
  }
}, 3);
const menuToggle = document.querySelector('.menu-toggle');
const sussyDiv = document.querySelector('.sussy-div');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    sussyDiv.style.filter = 'blur(50px)';

    sussyDiv.style.transition = 'filter 0.7s ease, transform 0.7s ease';
  } else {

    sussyDiv.style.filter = 'none';
  }
});document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const barTop = document.querySelector(".bar-top");
  const barBottom = document.querySelector(".bar-bottom");
  const menuToggle = document.getElementById("menu-toggle"); // Get the checkbox

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent immediate navigation
      const targetUrl = this.href;

      // Uncheck the menu toggle if it's checked
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }

      // Add a class to trigger the animation
      barTop.classList.add("animate-bars");
      barBottom.classList.add("animate-bars");

      // After 2 seconds, navigate to the link
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000);
    });
  });
});
