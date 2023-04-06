/* function Player(name, marker) {
  this.name = name;
  this.marker = marker;
} */

const btnChoosePlayers = document.getElementById("btnChoosePlayers");
const btnPlayerNameOne = document.getElementById("btnPlayerNameOne");
const choosePlayers = document.getElementById("choosePlayers");
const playerNameOne = document.getElementById("playerNameOne");
const playerNameTwo = document.getElementById("playerNameTwo");

btnPlayerNameOne.addEventListener("click", () => {
  playerNameOne.style.display = "none";
  playerNameTwo.style.display = "flex";
});

const numberOfPlayersRadios = document.querySelectorAll(
  'input[name="numberOfPlayers"]'
);

btnChoosePlayers.addEventListener("click", () => {
  for (const numberOfPlayersRadio of numberOfPlayersRadios) {
    if (numberOfPlayersRadio.checked) {
      if (numberOfPlayersRadio.value === "twoPlayers") {
        choosePlayers.style.display = "none";
        playerNameOne.style.display = "flex";
      } else if (numberOfPlayersRadio.value === "onePlayer") {
        choosePlayers.style.display = "none";
      }
    } else if (!numberOfPlayersRadio.checked) {
      document.getElementById("error").style.display = "flex";
      document.getElementById("error").style.color = "red";
      document.getElementById("error").style.fontSize = "1rem";
    }
  }
});
