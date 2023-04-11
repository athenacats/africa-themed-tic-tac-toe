const game = () => {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "";
  let playerOneName = "";
  let playerOneSymbol = "";
  let playerTwoName = "";
  let playerTwoSymbol = "";
  let computerName = "Computer";
  let computerSymbol = "";
  let numberOfPlayers = "";
  let winner = "";

  const getGameBoard = () => gameBoard;
  const getCurrentPlayer = () => currentPlayer;
  const getPlayerOneName = () => playerOneName;
  const getPlayerOneSymbol = () => playerOneSymbol;
  const getPlayerTwoName = () => playerTwoName;
  const getPlayerTwoSymbol = () => playerTwoSymbol;
  const getComputerName = () => computerName;
  const getComputerSymbol = () => computerSymbol;
  const getNumberOfPlayers = () => numberOfPlayers;
  const getWinner = () => winner;

  const setGameBoard = (board) => (gameBoard = board);

  const setCurrentPlayer = (newCurrentPlayer) => {
    currentPlayer = newCurrentPlayer;
  };

  const setPlayerOneName = (newPlayerOneName) => {
    playerOneName = newPlayerOneName;
  };

  const setPlayerOneSymbol = (newPlayerOneSymbol) => {
    playerOneSymbol = newPlayerOneSymbol;
  };

  const setPlayerTwoName = (newPlayerTwoName) => {
    playerTwoName = newPlayerTwoName;
  };

  const setPlayerTwoSymbol = (newPlayerTwoSymbol) => {
    playerTwoSymbol = newPlayerTwoSymbol;
  };

  const setComputerSymbol = (newComputerSymbol) => {
    computerSymbol = newComputerSymbol;
  };

  const setNumberOfPlayers = (newNumberOfPlayers) => {
    numberOfPlayers = newNumberOfPlayers;
  };

  const setWinner = (newWinner) => {
    winner = newWinner;
  };

  const checkForWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winningCombinationsLength = winningCombinations.length;

    for (let i = 0; i < winningCombinationsLength; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        gameBoard[a] !== "" &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[b] === gameBoard[c]
      ) {
        setWinner(currentPlayer);
        return true;
      }
    }

    if (!gameBoard.includes("")) {
      setWinner("tie");
      return true;
    }
    return false;
  };

  const resetGame = () => {
    setGameBoard(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer("");
    setPlayerOneName("");
    setPlayerOneSymbol("");
    setPlayerTwoName("");
    setPlayerTwoSymbol("");
    setComputerSymbol("");
    setNumberOfPlayers("");
    setWinner("");
  };

  return {
    getGameBoard,
    getCurrentPlayer,
    getPlayerOneName,
    getPlayerOneSymbol,
    getPlayerTwoName,
    getPlayerTwoSymbol,
    getComputerSymbol,
    getComputerName,
    getNumberOfPlayers,
    getWinner,
    setGameBoard,
    setCurrentPlayer,
    setPlayerOneName,
    setPlayerOneSymbol,
    setPlayerTwoName,
    setPlayerTwoSymbol,
    setComputerSymbol,
    setComputerSymbol,
    setNumberOfPlayers,
    setWinner,
    resetGame,
    checkForWinner,
  };
};

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
      if (
        symbol.value === "lion" &&
        !document.forms["playerNameOne"]["playerOne"].value == ""
      ) {
        playerNameOne.style.display = "none";
        playerNameTwo.style.display = "flex";
        document.getElementById("buffalo2").style.display = "flex";
        document.getElementById("playerOneName").innerHTML =
          document.forms["playerNameOne"]["playerOne"].value;
      } else if (
        symbol.value === "buffalo" &&
        !document.forms["playerNameOne"]["playerOne"].value == ""
      ) {
        playerNameOne.style.display = "none";
        playerNameTwo.style.display = "flex";
        document.getElementById("lion2").style.display = "flex";
        document.getElementById("playerOneName").innerHTML =
          document.forms["playerNameOne"]["playerOne"].value;
      }
    } else if (
      !symbol.checked &&
      document.forms["playerNameOne"]["playerOne"].value == ""
    ) {
      document.getElementById("error2").style.display = "flex";
      document.getElementById("error2").style.color = "red";
      document.getElementById("error2").style.fontSize = "1rem";
    } else if (
      symbol.checked &&
      document.forms["playerNameOne"]["playerOne"].value == ""
    ) {
      document.getElementById("error2").style.display = "flex";
      document.getElementById("error2").style.color = "red";
      document.getElementById("error2").style.fontSize = "1rem";
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
        game();
      } else if (
        symbol.value === "buffalo" &&
        !document.forms["onlyOnePlayer"]["playerOne"].value == ""
      ) {
        onlyOnePlayer.style.display = "none";
        gameGrid.style.display = "grid";
        document.querySelector(".playerTwoDetails").style.display = "none";
        document.getElementById("playerOneName").innerHTML =
          document.forms["onlyOnePlayer"]["playerOne"].value;
        game();
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
  game();
  document.getElementById("playerTwoName").innerHTML =
    document.forms["playerNameTwo"]["playerTwo"].value;
});

/*const playerOneName = document.getElementById("playerOneName");
const playerTwoName = document.getElementById("playerTwoName");

function insertNames() {
  playerOneName.innerhtml += playerOne.value;
  playerTwoName.append(playerTwo.value);
}*/

/*const playerFactory = (name, symbol) => {
  const playerturn = (grid, cell) => {
    const index = grid.cells.findIndex(function (position) {
      return position === cell;
    });
    if (grid.gridArray[index] === "") {
      grid.render();
      return index;
    }
    return null;
  };
  return { name, symbol, playerTurn };
};

const gridModule = (() => {
  let gridArray = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelector(".grid");
  const cells = Array.from(document.querySelectorAll(".cell"));
  let winner = null;

  const render = () => {
    gridArray.forEach((symbol, index) => {
      cells[index].textContent = gridArray[index];
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

    winningArray.forEach((combo) => {
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
    render, gameBoard, cells, gridArray,checkWinner, reset
  }
})();


const gamePlay = (() => {
  const playerOneName = document.getElementById("playerOne");
  const playerTwoName = document.getElementById("playerTwo");
  const resetbtn = document.querySelector('#reset');
  let currentPlayer;
  let playerOne;
  let playerTwo;

  const switchTurn = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const gameRound = () => {
    const grid = gridModule;
    const gameStatus = document.querySelector('.game-status');
    if (currentPlayer.name !== '') {
      gameStatus.textContent = `${currentPlayer.name}'s Turn`;
    } else {
      gameStatus.textContent = 'Board: ';
    }
})*/
