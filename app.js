let drawnNumbersList = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function displayMessageOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;

    if (typeof responsiveVoice !== 'undefined') {
        responsiveVoice.speak(text, 'UK English Female', {rate: 1});
    } else {
        console.log("ResponsiveVoice is not available.");
    }
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API is not supported in this browser.");
    }
}

function displayInitialMessage() {
    displayMessageOnScreen('h1', 'Secret Number Game');
    displayMessageOnScreen('p', `Choose a number between 1 and ${limitNumber}`);
}

displayInitialMessage();

function verifyGuess() {
    let guess = document.querySelector('input').value;

    if (guess == secretNumber) {
        displayMessageOnScreen('h1', 'You guessed it!');
        let attemptWord = attempts > 1 ? 'attempts' : 'attempt';
        let attemptsMessage = `You discovered the secret number with ${attempts} ${attemptWord}!`;
        displayMessageOnScreen('p', attemptsMessage);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
            displayMessageOnScreen('p', 'The secret number is lower');
        } else {
            displayMessageOnScreen('p', 'The secret number is higher');
        }
        attempts++;
        clearInput();
    }
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let numberOfElementsInList = drawnNumbersList.length;

    if (numberOfElementsInList == limitNumber) {
        drawnNumbersList = [];
    }

    if (drawnNumbersList.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        drawnNumbersList.push(chosenNumber);
        console.log(drawnNumbersList);
        return chosenNumber;
    }
}

function clearInput() {
    guessInput = document.querySelector('input');
    guessInput.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber();
    clearInput();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('restart').setAttribute('disabled', true);
}