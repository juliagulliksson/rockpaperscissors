const submitButton = document.getElementById('submitButton');
const inputField = document.getElementById('gameInput');
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault(); 
});

submitButton.addEventListener('click', registerNumberOfWins);

function registerNumberOfWins(){
    const inputValue = inputField.value;
    let isEven = checkIfGameIsEven(inputValue);

    if (isEven) {
       determineWhoWins(inputValue);
    } else {
       displayError();
    }
}

function displayError(){
    console.log("Please input an even number of games");
}

function checkIfGameIsEven(inputValue){
    if (inputValue.length % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function determineWhoWins(inputValue){
    let separatedGames = inputValue.match(/.{1,2}/g);
    let numberOfTimesBWon = 0;
    let numberOfTimesAWon = 0;

    for (let i in separatedGames) {

        switch (separatedGames[i]) {
            case "RR":
            case "SS":
            case "PP":
                console.log("Draw");
            break;
            case "RS":
                console.log("A wins")
                numberOfTimesAWon++;
            break;
            case "SR":
                console.log("B wins");
                numberOfTimesBWon++;
            break;
            case "SP":
                console.log("A wins");
                numberOfTimesAWon++;
            break;
            case "PS":
                console.log("B wins")
                numberOfTimesBWon++;
            break;
            case "PR":
                console.log("A wins")
                numberOfTimesAWon++;
            break;
            case "RP":
                console.log("B wins");
                numberOfTimesBWon++;
            break;
        }
    }
    countLength(numberOfTimesAWon, numberOfTimesBWon);
}

function countLength(numberOfTimesAWon, numberOfTimesBWon){
    if (numberOfTimesAWon > numberOfTimesBWon) {
        console.log("A wins the tournament!");
    } else if(numberOfTimesAWon.length < numberOfTimesBWon) {
        console.log("B wins tournament!");
    } else if(numberOfTimesAWon == numberOfTimesBWon) {
        console.log("The game is a draw");
    }
}