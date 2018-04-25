// when is a tie not a tie?

function computeGameResult() {
  let playerOneWins = 0;
  let playerTwoWins = 0;

  for (let round = 1; round <= 3; round++) {
    let roundWinner = computeRoundWinner(round);

    if (roundWinner === 'Player One') {
      playerOneWins += 1;
    } else if (roundWinner === 'Player Two') {
      playerTwoWins += 1;
    } // else its a tie
  }

  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerTwoWins > playerOneWins) {
    return 'Player Two';
  } else 'Tie';

}
