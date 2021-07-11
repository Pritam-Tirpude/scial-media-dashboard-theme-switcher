const toggleSwitch = document.getElementById("dark-mode");
const bgPatternColor = document.querySelector(".bg-pattern-color");
const bgColor = document.querySelector(".bg-color");
const dashboardTitle = document.querySelector(".dashboard-title h1");
const toggleIcon = document.getElementById("toggle-icon");
const ball = document.querySelector(".ball");
const socialCard = document.querySelectorAll(".social-card");
const followersTitle = document.querySelectorAll(".followers h2");
const overviewTitle = document.querySelector(".overview-title h3");
const viewCards = document.querySelectorAll(".view-card");
const viewStats = document.querySelectorAll(".view-stats h4");
const fasIcon = document.querySelector(".fas");
const body = document.querySelector("body");

// Dark Mode Colors
function darkMode() {
  bgPatternColor.style.backgroundColor = "hsl(232, 19%, 15%)";
  bgColor.style.backgroundColor = "hsl(230, 17%, 14%)";
  dashboardTitle.style.color = "hsl(0, 0%, 100%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  ball.style.backgroundColor = "hsl(230, 17%, 14%)";
  socialCard.forEach((card) => {
    card.style.background = "hsl(228, 28%, 20%)";
  });
  followersTitle.forEach((title) => {
    title.style.color = "hsl(0, 0%, 100%)";
  });
  overviewTitle.style.color = "hsl(0, 0%, 100%)";
  viewCards.forEach((card) => {
    card.style.backgroundColor = "hsl(228, 28%, 20%)";
    0;
  });
  viewStats.forEach((stat) => {
    stat.style.color = "hsl(0, 0%, 100%)";
  });
  fasIcon.style.color = "hsl(0,0%,100%)";
}

// Light Mode Colors
function lightMode() {
  bgPatternColor.style.backgroundColor = "hsl(225, 100%, 98%)";
  bgColor.style.backgroundColor = "hsl(0, 0%, 100%)";
  dashboardTitle.style.color = "hsl(230, 17%, 14%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  ball.style.backgroundColor = "hsl(0, 0%, 100%)";
  socialCard.forEach((card) => {
    card.style.background = "hsl(222, 50%, 96%)";
  });
  followersTitle.forEach((title) => {
    title.style.color = "hsl(230, 17%, 14%)";
  });
  overviewTitle.style.color = "hsl(228, 12%, 44%)";
  viewCards.forEach((card) => {
    card.style.backgroundColor = "hsl(222, 50%, 96%)";
  });
  viewStats.forEach((stat) => {
    stat.style.color = "hsl(230, 17%, 14%)";
  });
  fasIcon.style.color = "hsl(230, 17%, 14%)";
}

// Change THeme Dynamically
function switchTheme(e) {
  if (!body.classList.contains("animate")) {
    body.classList.toggle("animate");
  } else {
    body.classList.remove("animate");
  }

  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

//Check Local Storage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
