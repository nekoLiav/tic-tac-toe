const game = (() => {

  const gameBoard = document.getElementById("gameboard");
  const playerinfo = document.getElementById("playerinfo");
  const resetbutton = document.getElementById("resetbutton");

  let gameState = [[],[],[],[],[],[],[],[],[]];
  let winState = 0;

  const players = ["X","O"];

  let currentPlayer = Math.floor(Math.random() * 2);
  playerinfo.textContent = players[currentPlayer] + " goes first!";

  const validateSelection = (e) => {
    let id = e.target.id;
    if (winState === 0) {
      gameState[id] != "" 
      ? alert("Please make a valid selection.")
      : updateGameState(id);
    }
  }

  const updateGameState = (id) => {
    gameState[id].push(players[currentPlayer]);
    renderGameBoard(id);
  }

  const renderGameBoard = (id) => {
    let gameBoardPiece = document.getElementById(id);
    gameBoardPiece.textContent = gameState[id];
    switchPlayers();
  }
  const switchPlayers = () => {
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    playerinfo.textContent = players[currentPlayer] + "'s turn!'";
    checkGameState();
  }

  const checkGameState = () => {
    if 
    (  ((gameState[0] == "X") && (gameState[1] == "X") && (gameState[2] == "X"))
    || ((gameState[3] == "X") && (gameState[4] == "X") && (gameState[5] == "X"))
    || ((gameState[6] == "X") && (gameState[7] == "X") && (gameState[8] == "X"))
    || ((gameState[0] == "X") && (gameState[3] == "X") && (gameState[6] == "X"))
    || ((gameState[1] == "X") && (gameState[4] == "X") && (gameState[7] == "X"))
    || ((gameState[2] == "X") && (gameState[5] == "X") && (gameState[8] == "X"))
    || ((gameState[0] == "X") && (gameState[4] == "X") && (gameState[8] == "X"))
    || ((gameState[2] == "X") && (gameState[4] == "X") && (gameState[6] == "X")))
    {
      winState = 1;
      playerinfo.textContent = "X wins!";
    } else if
    (  ((gameState[0] == "O") && (gameState[1] == "O") && (gameState[2] == "O"))
    || ((gameState[3] == "O") && (gameState[4] == "O") && (gameState[5] == "O"))
    || ((gameState[6] == "O") && (gameState[7] == "O") && (gameState[8] == "O"))
    || ((gameState[0] == "O") && (gameState[3] == "O") && (gameState[6] == "O"))
    || ((gameState[1] == "O") && (gameState[4] == "O") && (gameState[7] == "O"))
    || ((gameState[2] == "O") && (gameState[5] == "O") && (gameState[8] == "O"))
    || ((gameState[0] == "O") && (gameState[4] == "O") && (gameState[8] == "O"))
    || ((gameState[2] == "O") && (gameState[4] == "O") && (gameState[6] == "O")))
    {
      winState = 1;
      playerinfo.textContent = "O wins!";
    }
  }

  const resetBoard = () => {
    winState = 0;
    currentPlayer = Math.floor(Math.random() * 2);
    playerinfo.textContent = players[currentPlayer] + " goes first!";
    for (i = 0; i < gameState.length; i++) {
      gameState[i] = [];
      let gameBoardPiece = document.getElementById(i);
      gameBoardPiece.textContent = "";
    }
  }

  gameBoard.addEventListener("click", validateSelection);
  resetbutton.addEventListener("click", resetBoard);

})();