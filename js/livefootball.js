const home = document.querySelector(".home");
const away = document.querySelector(".away");
const links = document.querySelector("a");

const match = document.querySelector(".live");

fetch("https://blog-api-kiprono.onrender.com/live")
  .then((response) => response.json())
  .then((data) => {
    if (!data.length) {
      return (match.textContent = "No maches today");
    }
    const matches = data.map((match) => {
      return `<div class="game">
        <div class="hometeam">
          <img src=${match.homelogo} alt="">
          <div class="name">${match.hometeam}</div>
        </div>
        <div class="awayteam">
          <img src=${match.awaylogo} alt="">
          <div class="name">${match.awayteam}</div>
        </div>
        <a href=${match.link}>Watch</a>
      </div>`;
    });
    match.innerHTML = matches.join(" ");
  });
