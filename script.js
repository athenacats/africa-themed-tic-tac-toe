function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const btnChoosePlayers = document.getElementById("btnChoosePlayers");
const btnPlayerNameOne = document.getElementById("btnPlayerNameOne");
const choosePlayers = document.getElementById("choosePlayers");
const playerNameOne = document.getElementById("playerNameOne");
const playerNameTwo = document.getElementById("playerNameTwo");

btnChoosePlayers.addEventListener("click", () => {
  choosePlayers.style.display = "none";
  playerNameOne.style.display = "flex";
});

btnPlayerNameOne.addEventListener("click", () => {
  playerNameOne.style.display = "none";
  playerNameTwo.style.display = "flex";
});
