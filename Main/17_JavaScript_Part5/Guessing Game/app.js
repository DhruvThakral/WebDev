// User enters a max number & then tries to guess a random generated between 1 to max


const max = prompt("Enter the max number: ");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Enter your guess number: ");

while(true){
    if(guess == "quit"){
        console.log("User Quit....");
        break;
    }

    if(guess == random){
        console.log("Congrats! You are right . Your random number is ",random);
        console.log("Thank You! Game Finished.....")
        break;
    }
    else if (guess < random){
        guess = prompt("Hint: Your guess is too small. Please try again.");
    }
    else{
        guess = prompt("Hint: Your guess is too large. Please try again.");
    }
}