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
        }, 0);
      }, 2000);
    }, 1000);
  }
}, 10);
const menuToggle = document.querySelector('.menu-toggle');
const trans = document.querySelector('.trans');
const topbar = document.querySelector('.topbar');
const sussyDiv = document.querySelector('.sussyDiv')
menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    trans.style.filter = 'blur(50px)';

    trans.style.transition = 'filter 0.7s ease, transform 0.7s ease';
  } else {

    trans.style.filter = 'none';
  }
});  // Get all nav links and the current active section
  // Get all nav links and the current active section
  const links = document.querySelectorAll('.nav-links a');
  let currentSection = document.querySelector('section.active');
  function clearSelected() {
    links.forEach(link => {
      if(link.id === 'selected'){
        link.removeAttribute('id');
      }
    });
  }
  // Function to handle the transition between sections
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      
      // If clicking home, reload the page
      if(targetId === 'home'){
        window.location.reload();
        return;
      }
      topbar.style.mixBlendMode = "normal";
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
      const targetSection = document.getElementById(targetId);
      // If already active, do nothing
      if (targetSection === currentSection) return;
      clearSelected();
      link.id = 'selected';
      // Add fade-out class to current section
      currentSection.classList.add('fade-out');

      // Use the once option so this event listener only triggers once
      currentSection.addEventListener('animationend', function handleFadeOut() {
        // Remove fade-out and active classes, hide current section
        currentSection.classList.remove('fade-out', 'active');
        currentSection.style.display = 'none';

        // Show target section and start fade-in animation
        targetSection.style.display = 'block';
        targetSection.classList.add('fade-in');

        // Once fade-in completes, mark target section as active
        targetSection.addEventListener('animationend', function handleFadeIn() {
          targetSection.classList.remove('fade-in');
          targetSection.classList.add('active');
        }, { once: true });

        // Update the current section reference
        currentSection = targetSection;
      }, { once: true });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("button");
    const sussyDiv = document.querySelector(".sussy-div");
    const contactSection = document.getElementById("contact");
  
    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Fade out sussy-div
      sussyDiv.classList.add("hidden");
  
      // Wait for fade-out animation, then show contact
      setTimeout(() => {
        contactSection.classList.add("visible");
      }, 700); // Matches CSS transition time
    });
  });
  