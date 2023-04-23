/**
 * Declare const for DOM elements
 */

const message = document.getElementById('result');
const winScore = document.getElementById('wins');
const lossScore = document.getElementById('losses');
const tieScore = document.getElementById('ties');

/**
 * Variable for tracking the score and
 * function for reseting score
 */

let score = {
	wins: 0,
  losses: 0,
  ties: 0
}

function reset() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

/**
 * Game playing functions
*/

function computerChoice() {
  const randomeNumber = Math.random();
  let computerResult = '';

  if (randomeNumber >= 0 && randomeNumber < 1/5) {
		computerResult = 'rock';
	}else if (randomeNumber >= 1/5 && randomeNumber < 2/5) {
    computerResult = 'paper';
  }else if (randomeNumber >= 2/5 && randomeNumber < 3/5) {
    computerResult = 'scissors';
  }else if (randomeNumber >= 3/5 && randomeNumber < 4/5) {
		computerResult = 'lizard';
  }else if (randomeNumber >= 4/5 && randomeNumber < 5) {
    computerResult = 'spock';
  }
	return computerResult;
}

function playerGame(playerResult) {
	const computerResult = computerChoice();
  let result = '';

  if (playerResult === 'rock') {
		if (computerResult === 'rock') {
			result = 'Tie';
		}else if (computerResult === 'paper') {
      result = 'You Lose!';
  	}else if (computerResult === 'scissors') {
      result = 'You Win!';
    }else if (computerResult === 'lizard') {
      result = 'You Win!';
    }else if (computerResult === 'spock') {
      result = 'You Lose!';
    }

		}else if (playerResult === 'paper') {
			if (computerResult === 'rock') {
				result = 'You Lose!';
      }else if (computerResult === 'paper') {
       	result = 'Tie';
      }else if (computerResult === 'scissors') {
        result = 'You Lose!';
      }else if (computerResult === 'lizard') {
        result = 'You Lose!';
      }else if (computerResult === 'spock') {
        result = 'You Win!';
      }
    }else if (playerResult === 'scissors') {
      if (computerResult === 'rock') {
        result = 'You Lose!';
      }else if (computerResult === 'paper') {
        result = 'You Win!';
      }else if (computerResult === 'scissors') {
        result = 'Tie';
      }else if (computerResult === 'lizard') {
        result = 'You Win!';
      }else if (computerResult === 'spock') {
        result = 'You Lose!';
      }
    
		}else if (playerResult === 'lizard') {
      if (computerResult === 'rock') {
        result = 'You Lose!';
      }else if (computerResult === 'paper') {
        result = 'You Win!';
      }else if (computerResult === 'scissors') {
        result = 'You Lose!';
      }else if (computerResult === 'lizard') {
        result = 'Tie';
     	}else if (computerResult === 'spock') {
        result = 'You Win!';
      }
    
		}else if (playerResult === 'spock') {
      if (computerResult === 'rock') {
        result = 'You Lose!';
      }else if (computerResult === 'paper') {
        result = 'You Lose!';
      }else if (computerResult === 'scissors') {
        result = 'You Win!';
      }else if (computerResult === 'lizard') {
        result = 'You Lose!';
      }else if (computerResult === 'spock') {
        result = 'Tie';
      }
    }
		
		if (result === 'You Win!') {
      score.wins += 1;
    } else if (result === 'You Lose!') {
      score.losses += 1;
    } else if (result === 'Tie') {
      score.ties += 1;
    }
		
		message.innerHTML = result;
		winScore.innerHTML = `Wins ${score.wins}`;
		lossScore.innerHTML = `Losses ${score.losses}`;
		tieScore.innerHTML = `Ties ${score.ties}`;

		
    console.log(playerResult);
    console.log(computerResult);
    console.log(`${result}`);
    console.log(score);
}
