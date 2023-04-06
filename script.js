function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const btnChoosePlayers = document.getElementById("btnChoosePlayers");

btnChoosePlayers.addEventListener("click", () => {
  const choosePlayers = document.getElementById("choosePlayers");
  const playerNameOne = document.getElementById("playerNameOne");

  choosePlayers.style.display = "none";
  playerNameOne.style.display = "flex";
});
