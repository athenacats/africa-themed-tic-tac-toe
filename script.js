const btnChoosePlayers = document.getElementById("btnChoosePlayers");
const btnPlayerNameOne = document.getElementById("btnPlayerNameOne");
const btnPlayerNameTwo = document.getElementById("btnPlayerNameTwo");
const btnOnlyOnePlayer = document.getElementById("btnOnlyOnePlayer");
const choosePlayers = document.getElementById("choosePlayers");
const playerNameOne = document.getElementById("playerNameOne");
const playerNameTwo = document.getElementById("playerNameTwo");
const gameGrid = document.getElementById("game");
const onlyOnePlayer = document.getElementById("onlyOnePlayer");

const numberOfPlayersRadios = document.querySelectorAll(
  'input[name="numberOfPlayers"]'
);

let player1Symbol;
let player2Symbol;

btnChoosePlayers.addEventListener("click", () => {
  for (const numberOfPlayersRadio of numberOfPlayersRadios) {
    if (numberOfPlayersRadio.checked) {
      if (numberOfPlayersRadio.value === "twoPlayers") {
        choosePlayers.style.display = "none";
        playerNameOne.style.display = "flex";
      } else if (numberOfPlayersRadio.value === "onePlayer") {
        choosePlayers.style.display = "none";
        onlyOnePlayer.style.display = "flex";
      }
    } else if (!numberOfPlayersRadio.checked) {
      document.getElementById("error1").style.display = "flex";
      document.getElementById("error1").style.color = "red";
      document.getElementById("error1").style.fontSize = "1rem";
    }
  }
});

const symbols = document.querySelectorAll('input[name="symbol"]');

btnPlayerNameOne.addEventListener("click", () => {
  for (const symbol of symbols) {
    if (symbol.checked) {
      player1Symbol = "images/" + symbol.value + ".png";
      player2Symbol =
        "images/" + (symbol.value === "lion" ? "buffalo" : "lion") + ".png";
      if (
        symbol.value === "lion" &&
        !document.forms["playerNameOne"]["playerOne"].value == ""
      ) {
        playerNameOne.style.display = "none";
        playerNameTwo.style.display = "flex";
        document.getElementById("buffalo2").style.display = "flex";
        document.getElementById("playerOneName").innerHTML =
          document.forms["playerNameOne"]["playerOne"].value;
        document
          .getElementById("playerOneSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + symbol.value + ".png";
        document
          .getElementById("playerTwoSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + (symbol.value === "lion" ? "buffalo" : "lion") + ".png";
      } else if (
        symbol.value === "buffalo" &&
        !document.forms["playerNameOne"]["playerOne"].value == ""
      ) {
        playerNameOne.style.display = "none";
        playerNameTwo.style.display = "flex";
        document.getElementById("lion2").style.display = "flex";
        document.getElementById("playerOneName").innerHTML =
          document.forms["playerNameOne"]["playerOne"].value;
        document
          .getElementById("playerOneSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + symbol.value + ".png";
        document
          .getElementById("playerTwoSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + (symbol.value === "lion" ? "buffalo" : "lion") + ".png";
      }
    } else if (
      !symbol.checked &&
      document.forms["playerNameOne"]["playerOne"].value === ""
    ) {
      document.getElementById("error3").style.display = "flex";
      document.getElementById("error3").style.color = "red";
      document.getElementById("error3").style.fontSize = "1rem";
    } else if (
      symbol.checked &&
      document.forms["playerNameOne"]["playerOne"].value === ""
    ) {
      document.getElementById("error3").style.display = "flex";
      document.getElementById("error3").style.color = "red";
      document.getElementById("error3").style.fontSize = "1rem";
    }
  }
});

btnOnlyOnePlayer.addEventListener("click", () => {
  for (const symbol of symbols) {
    if (symbol.checked) {
      if (
        symbol.value === "lion" &&
        !document.forms["onlyOnePlayer"]["playerOne"].value == ""
      ) {
        onlyOnePlayer.style.display = "none";
        gameGrid.style.display = "grid";
        document.querySelector(".playerTwoDetails").style.display = "none";
        document.getElementById("playerOneName").innerHTML =
          document.forms["onlyOnePlayer"]["playerOne"].value;
        document
          .getElementById("playerOneSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + symbol.value + ".png";
        document
          .getElementById("computerSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + (symbol.value === "lion" ? "buffalo" : "lion") + ".png";
      } else if (
        symbol.value === "buffalo" &&
        !document.forms["onlyOnePlayer"]["playerOne"].value == ""
      ) {
        onlyOnePlayer.style.display = "none";
        gameGrid.style.display = "grid";
        document.querySelector(".playerTwoDetails").style.display = "none";
        document.getElementById("playerOneName").innerHTML =
          document.forms["onlyOnePlayer"]["playerOne"].value;
        document
          .getElementById("playerOneSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + symbol.value + ".png";
        document
          .getElementById("computerSymbol")
          .appendChild(new Image(40, 40)).src =
          "images/" + (symbol.value === "lion" ? "buffalo" : "lion") + ".png";
      }
    } else if (
      !symbol.checked &&
      document.forms["onlyOnePlayer"]["playerOne"].value == ""
    ) {
      document.getElementById("error2").style.display = "flex";
      document.getElementById("error2").style.color = "red";
      document.getElementById("error2").style.fontSize = "1rem";
    } else if (
      symbol.checked &&
      document.forms["onlyOnePlayer"]["playerOne"].value == ""
    ) {
      document.getElementById("error2").style.display = "flex";
      document.getElementById("error2").style.color = "red";
      document.getElementById("error2").style.fontSize = "1rem";
    }
  }
});

btnPlayerNameTwo.addEventListener("click", () => {
  playerNameTwo.style.display = "none";
  gameGrid.style.display = "grid";
  document.querySelector(".computerDetails").style.display = "none";
  document.getElementById("playerTwoName").innerHTML =
    document.forms["playerNameTwo"]["playerTwo"].value;

  const playerFactory = (name, mark) => {
    const playerTurn = (grid, cell) => {
      const index = grid.cells.findIndex(function (position) {
        return position === cell;
      });
      if (grid.gridArray[index] === "") {
        grid.render();
        return index;
      }
      return null;
    };
    return { name, mark, playerTurn };
  };

  const gridModule = (() => {
    let gridArray = ["", "", "", "", "", "", "", "", ""];
    const gameBoard = document.querySelector(".grid");
    const cells = Array.from(document.querySelectorAll(".cell"));
    let winner = null;

    const render = () => {
      gridArray.forEach((mark, index) => {
        cells[index].textContent = gridArray[index];
        cells[index].innerHTML = "";
        if (mark) {
          const img = document.createElement("img");
          img.src = mark;
          img.height = 40;
          cells[index].append(img);
        }
      });
    };

    const reset = () => {
      gridArray = ["", "", "", "", "", "", "", "", ""];
    };

    const checkWinner = () => {
      const winningArrays = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      winningArrays.forEach((combo) => {
        if (
          gridArray[combo[0]] &&
          gridArray[combo[0]] === gridArray[combo[1]] &&
          gridArray[combo[0]] === gridArray[combo[2]]
        ) {
          winner = "current";
        }
      });
      return winner || (gridArray.includes("") ? null : "Tie");
    };

    return {
      render,
      gameBoard,
      cells,
      gridArray,
      checkWinner,
      reset,
    };
  })();

  const gamePlay = (() => {
    const playerOneName = document.getElementById("playerOneName").textContent;
    const playerTwoName = document.getElementById("playerTwoName").textContent;
    const resetbtn = document.querySelector("#reset");
    /*const parser = new DOMParser();
    const player1SymbolImg = parser.parseFromString(player1Symbol, "text/html");
    const player2SymbolImg = parser.parseFromString(player2Symbol, "text/html");*/
    let currentPlayer;
    let player1;
    let player2;
    console.log(playerOneName);

    const switchTurn = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const gameRound = () => {
      const grid = gridModule;
      const gameStatus = document.querySelector(".winnertext");
      if (currentPlayer.name !== "") {
        gameStatus.textContent = `${currentPlayer.name}'s Turn`;
      } else {
        gameStatus.textContent = "Let's Play!";
      }

      grid.gameBoard.addEventListener("click", (event) => {
        event.preventDefault();
        const play = currentPlayer.playerTurn(grid, event.target);
        if (play !== null) {
          grid.gridArray[play] = `${currentPlayer.mark}`;
          grid.render();
          const winStatus = grid.checkWinner();
          if (winStatus === "Tie") {
            gameStatus.textContent = "It's a tie!";
          } else if (winStatus === null) {
            switchTurn();
            gameStatus.textContent = `${currentPlayer.name}'s Turn`;
          } else {
            gameStatus.textContent = `The winner is ${currentPlayer.name}!`;
            grid.reset();
            grid.render();
          }
        }
      });
      return playerOneName;
    };

    const gameInit = () => {
      if (playerOneName !== "" && playerTwoName !== "") {
        player1 = playerFactory(playerOneName, player1Symbol);
        player2 = playerFactory(playerTwoName, player2Symbol);
        currentPlayer = player1;
        console.log(playerOneName);
        gameRound();
      }
    };

    /*btnPlayerNameTwo.addEventListener("Click", (event) => {
    event.preventDefault();
    if (playerOneName.textContent !== "" && playerTwoName.textContent !== "") {
      gameInit();
    } else {
      window.location.reload();
    }
  });*/

    resetbtn.addEventListener("click", () => {
      document.querySelector(".winnertext").textContent = "Let's Play!";
      document.querySelector("#player1").value = "";
      document.querySelector("#player2").value = "";
      window.location.reload();
    });
    return {
      gameInit,
    };
  })();

  gamePlay.gameInit();
});
