const userOptions = document.getElementById('user-options');
const aiOptions = document.getElementById('ai-options');

function generateAIChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playGame() {
    const userChoice = document.querySelector('.option.selected');
    const user = userChoice.dataset.choice;

    const aiChoice = document.createElement('li');
    aiChoice.className = 'option';
    aiChoice.textContent = getAIChoiceText(user);
    aiChoice.dataset.choice = user;

    aiOptions.appendChild(aiChoice);

    const result = compareChoices(user, generateAIChoice());

    alert(getResultText(result));

    // Clear AI choices
    setTimeout(() => {
        aiOptions.innerHTML = '';
    }, 1000);
}

function getAIChoiceText(user) {
    const aiChoiceMap = {
        rock: 'AI chooses Rock',
        paper: 'AI chooses Paper',
        scissors: 'AI chooses Scissors'
    };

    return aiChoiceMap[user];
}

function compareChoices(user, ai) {
    if (user === ai) {
        return 'DRAW';
    } else if (
        (user === 'rock' && ai === 'scissors') ||
        (user === 'scissors' && ai === 'paper') ||
        (user === 'paper' && ai === 'rock')
    ) {
        return 'WIN';
    } else {
        return 'LOSE';
    }
}

function getResultText(result) {
    const resultMap = {
        WIN: 'You WIN!',
        LOSE: 'You LOSE :(',
        DRAW: 'It\'s a DRAW'
    };

    return resultMap[result];
}

userOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        e.target.classList.add('selected');
        playGame();
    }
});
