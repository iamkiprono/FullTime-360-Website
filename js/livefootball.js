const home = document.querySelector(".home");
const away = document.querySelector(".away");
const links = document.querySelector("a");

const match = document.querySelector(".matches");

fetch("/data/livematches.json")
  .then((response) => response.json())
  .then((data) => {
    const matches = data.map((match) => {
      return `<div class="live-game">
        <div class="game">
          <p class="team home"><img src=${match.logoHome} alt="">${match.home}</p>
          <p class="vs">Vs</p>
          <p class="team away"> <img src=${match.logoAway} alt="">${match.away}</p>
        </div>
        <p class="game-link">Link: <a href=${match.link} target="_blank">Watch here</a></p>
      </div>`;
    });

    match.innerHTML = matches.join(" ");
  });
