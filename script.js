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
}, 30);
const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}
