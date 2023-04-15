let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector("#lightModeToggle");

const enableLightMode = () => {
  document.body.classList.add("lightTheme");
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  document.body.classList.remove("lightTheme");
  localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
  enableLightMode();
}

lightModeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

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

let onePlayerSymbol;
let aiSymbol;

btnOnlyOnePlayer.addEventListener("click", () => {
  for (const symbol of symbols) {
    if (symbol.checked) {
      onePlayerSymbol = "images/" + symbol.value + ".png";
      aiSymbol =
        "images/" + (symbol.value === "lion" ? "buffalo" : "lion") + ".png";
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
  const playerFactory = (name, mark, isHuman) => {
    const playerTurn = (grid, cell) => {
      if (isHuman) {
        const index = grid.cells.findIndex(function (position) {
          return position === cell;
        });
        if (grid.gridArray[index] === "") {
          grid.render();
          return index;
        }
      } else {
        const availableCells = grid.cells.filter(function (cell) {
          return cell.textContent === "";
        });
        const index = Math.floor(Math.random() * availableCells.length);
        const cell = availableCells[index];
        const index2 = grid.cells.findIndex(function (position) {
          return position === cell;
        });
        grid.gridArray[index2] = mark;
        grid.render();
        return index2;
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
        //cells[index].addEventListener("click", turnClick, false);
        if (mark) {
          const img = document.createElement("img");
          img.src = mark;
          img.height = 80;
          cells[index].append(img);
        }
      });
    };

    /*function turnClick(square) {
      turn(square.target.id, player1);
    }

    function turn(squareId, player) {
      gridArray[squareId] = player;
      document.getElementById(squareId).innerText = player;
      let gameWon = checkWin(gridArray, player);
      if (gameWon) gameOver(gameWon);
    }

    function checkWin(board, player) {
      let plays = board.reduce(
        (a, e, i) => (e === player ? a.concat(i) : a),
        []
      );
      let gameWon = null;
      for (let [index, win] of winningArrays.entries()) {
        if (win.every((elem) => plays.indexOf(elem) > -1)) {
          gameWon = { index: index, player: player };
          break;
        }
      }
      return gameWon;
    }

    function gameOver(gameWon) {
      for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
      }
    }*/

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
    const aiName = document.getElementById("computerName").textContent;
    const resetbtn = document.querySelector("#reset");
    let currentPlayer;
    let player1;
    let player2;
    let isHumanTurn = true;

    const switchTurn = () => {
      isHumanTurn = !isHumanTurn;
      currentPlayer = isHumanTurn ? player1 : player2;
      if (!isHumanTurn) {
        setTimeout(() => {
          currentPlayer.playerTurn(gridModule, null);
        }, 1000);
      }
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
        if (event.target.classList.contains("cell")) {
          const cell = event.target;
          const index = currentPlayer.playerTurn(grid, cell);
          if (index !== null) {
            const result = grid.checkWinner();
            if (result !== null) {
              gameStatus.textContent =
                result === "Tie"
                  ? "It's a Tie!"
                  : `${currentPlayer.name} Wins!`;
              grid.gameBoard.removeEventListener("click", arguments.callee);
            } else {
              switchTurn();
            }
          }
        }
      });
    };

    const gameInit = () => {
      if (playerOneName !== "" && aiName !== "") {
        player1 = playerFactory(playerOneName, onePlayerSymbol, true);
        player2 = playerFactory(aiName, aiSymbol, false);
        currentPlayer = player1;
        console.log(playerOneName);
        gameRound();
      }
    };

    resetbtn.addEventListener("click", () => {
      window.location.reload();
    });
    return {
      gameInit,
    };
  })();

  function minimax(newBoard, player) {
    let availableSpots = emptyIndexes(newBoard);

    if (winning(newBoard, onePlayerSymbol)) {
      return { score: -10 };
    } else if (winning(newBoard, aiSymbol)) {
      return { score: 10 };
    } else if (availableSpots.length === 0) {
      return { score: 0 };
    }

    let moves = [];

    for (let i = 0; i < availableSpots.length; i++) {
      let move = {};
      move.index = newBoard[availableSpots[i]];
      newBoard[availableSpots[i]] = player;

      if (player === aiSymbol) {
        let result = minimax(newBoard, onePlayerSymbol);
        move.score = result.score;
      } else {
        let result = minimax(newBoard, aiSymbol);
        move.score = result.score;
      }

      newBoard[availableSpots[i]] = move.index;

      moves.push(move);
    }
    let bestMove;

    if (currentPlayer === aiSymbol) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }
  minimax();
  gamePlay.gameInit();
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
          img.height = 80;
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

    resetbtn.addEventListener("click", () => {
      window.location.reload();
    });
    return {
      gameInit,
    };
  })();

  gamePlay.gameInit();
});

/*const body = document.querySelector("body");
const theme = document.querySelector(".theme");
theme.addEventListener("click", () => {
  document.body.classList.toggle("lightTheme");
});*/
