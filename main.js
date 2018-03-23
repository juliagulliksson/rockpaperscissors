const submitButton = document.getElementById('submitButton');
const inputField = document.getElementById('gameInput');
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault(); 
});

submitButton.addEventListener('click', confirmWhoWins);

function confirmWhoWins(){
    registerNumberOfWins();
}

function registerNumberOfWins(){

    const inputValue = inputField.value;
    let isEven = checkIfGameIsEven(inputValue);
   
    if (isEven) {
        let separatedGames = inputValue.match(/.{1,2}/g);
        let numberOfTimesBWon = [];
        let numberOfTimesAWon = [];

        for (let i in separatedGames) {

            switch (separatedGames[i]) {
                case "RR":
                case "SS":
                case "PP":
                    console.log("Draw");
                break;
                case "RS":
                    console.log("A wins")
                    numberOfTimesAWon.push(1);
                break;
                case "SR":
                    console.log("B wins");
                    numberOfTimesBWon.push(1);
                break;
                case "SP":
                    console.log("A wins");
                    numberOfTimesAWon.push(1);
                break;
                case "PS":
                    console.log("B wins")
                    numberOfTimesBWon.push(1);
                break;
                case "PR":
                    console.log("A wins")
                    numberOfTimesAWon.push(1);
                break;
                case "RP":
                    console.log("B wins");
                    numberOfTimesBWon.push(1);
                break;
            }
        }

        countLength(numberOfTimesAWon, numberOfTimesBWon);
   
    } else {
       displayError();
    }
}

function displayError(){
    console.log("Please input an even number of games");
}

function checkIfGameIsEven(inputValue){
    if(inputValue.length % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function countLength(arrayA, arrayB){
    if (arrayA.length > arrayB.length) {
        console.log("A wins");
    } else if(arrayA.length < arrayB.length) {
        console.log("B wins");
    } else if(arrayA.length == arrayB.length) {
        console.log("Draw");
    }
}