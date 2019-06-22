const cards = [{
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
}, {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
}, {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
}, {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
}];

let cardsInPlay = [];

function resetDeck() {
    var board = document.getElementById('game-board');
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild)
    }
    createBoard()
    cardsInPlay = [];
}

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
    resetDeck();
}

function flipCard() {
    var cardID = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardID].cardImage);
    cardsInPlay.push(cards[cardID].rank);
    if (cardsInPlay.length === 2) {
        setTimeout(function() {
          checkForMatch();
        }, 100);
    }
}

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();

//to-do: add score feature!