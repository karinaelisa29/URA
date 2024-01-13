const game = {
  audioSequence: [],
  userSequence: [],
  isUserTurn: false,
  interval: null,
};

function playAudio(sound) {
  const audio = new Audio(sound);
  audio.play();
}

function displaySequence() {
  game.isUserTurn = false;
  let i = 0;
  game.interval = setInterval(() => {
    playAudio(game.audioSequence[i]);
    i++;
    if (i >= game.audioSequence.length) {
      clearInterval(game.interval);
      game.isUserTurn = true;
      document.getElementById('instruction').innerText = 'Repetă secvența:';
      document.getElementById('repeatButton').disabled = false;
      document.getElementById('stopButton').disabled = false;
    }
  }, 1000);
}

function startGame() {
  game.audioSequence.length = 0;
  game.userSequence.length = 0;
  addRandomSound();
  displaySequence();
  document.getElementById('repeatButton').disabled = true;
  document.getElementById('stopButton').disabled = false;
}

function stopSequence() {
  clearInterval(game.interval);
  game.isUserTurn = true;
  document.getElementById('instruction').innerText = 'Repetă secvența:';
  document.getElementById('repeatButton').disabled = false;
  document.getElementById('stopButton').disabled = true;
}

function addRandomSound() {
  const sounds = ['c:/Users/danye/OneDrive/Documents/Sounds/sunet1.mp3', 'c:/Users/danye/OneDrive/Documents/Sounds/sunet2.mp3', 'c:/Users/danye/OneDrive/Documents/Sounds/sunet3.wav'];
  const randomIndex = Math.floor(Math.random() * sounds.length);
  game.audioSequence.push(sounds[randomIndex]);
}

function userClick(sound) {
  if (game.isUserTurn) {
    game.userSequence.push(sound);
    playAudio(sound);

    if (game.userSequence.length === game.audioSequence.length) {
      checkSequence();
    }
  }
}

function checkSequence() {
  if (game.userSequence.length !== game.audioSequence.length) {
    alert('Ai pierdut! Secvența nu este completă. Poți încerca din nou.');
    resetGame();
    return;
  }

  for (let i = 0; i < game.userSequence.length; i++) {
    if (game.userSequence[i] !== game.audioSequence[i]) {
      alert(`Ai greșit! Sunetul corect era: ${game.audioSequence[i]}. Poți încerca din nou.`);
      resetGame();
      return;
    }
  }

  alert('Bravo! Ai repetat corect secvența.');
  addRandomSound();
  game.userSequence = [];
  displaySequence();
}

function resetGame() {
  game.audioSequence.length = 0;
  game.userSequence.length = 0;
  alert('Jocul a fost resetat. Poți începe din nou.');
}

function restartGame() {
  stopSequence();
  startGame();
}

let score = 0;

function updateScore() {
  document.getElementById('score').innerText = `Punctaj: ${score}`;
}

function checkSequence() {
  // ... restul codului

  if (game.userSequence.length !== game.audioSequence.length) {
    alert('Ai pierdut! Secvența nu este completă. Poți încerca din nou.');
    resetGame();
    return;
  }

  for (let i = 0; i < game.userSequence.length; i++) {
    if (game.userSequence[i] !== game.audioSequence[i]) {
      alert(`Ai greșit! Sunetul corect era: ${game.audioSequence[i]}. Poți încerca din nou.`);
      resetGame();
      return;
    }
  }

  alert('Bravo! Ai repetat corect secvența.');
  score += 1; // Adăugăm 1 la punctaj
  updateScore();
  addRandomSound();
  game.userSequence = [];
  displaySequence();
}


function repeatSequence() {
  if (game.audioSequence.length > 0) {
    game.isUserTurn = false;
    let i = 0;
    game.interval = setInterval(() => {
      playAudio(game.audioSequence[i]);
      i++;
      if (i >= game.audioSequence.length) {
        clearInterval(game.interval);
        game.isUserTurn = true;
        document.getElementById('instruction').innerText = 'Repetă secvența:';
        document.getElementById('repeatButton').disabled = false;
        document.getElementById('stopButton').disabled = false;
      }
    }, 1000);
  }
}
