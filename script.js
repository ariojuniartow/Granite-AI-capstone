const choices = ['rock', 'paper', 'scissors'];
const userButton = document.getElementById('user-button');
const computerButton = document.getElementById('computer-button');
const resultParagraph = document.getElementById('result');

userButton.addEventListener('click', () => {
    const userChoice = prompt("Choose rock, paper, or scissors:");
    if (choices.includes(userChoice.toLowerCase())) {
        computerChoice();
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
    }
});

function computerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[computerChoiceIndex];
    computerButton.disabled = false;
    computerButton.textContent = `Computer's Choice: ${computerChoice}`;

    compareChoices(userChoice, computerChoice);
}

function compareChoices(user, computer) {
    if (user === computer) {
        resultParagraph.textContent = "It's a tie!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        resultParagraph.textContent = `You win! ${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}.`;
    } else {
        resultParagraph.textContent = `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}.`;
    }
}