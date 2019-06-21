const cards = ['Queen', 'Queen', 'King', 'King'];

let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardID) {
    console.log(`${cards[cardID]} was flipped!`);
    cardsInPlay.push(cards[cardID]);
    checkForMatch();
}

flipCard(0);
flipCard(2);