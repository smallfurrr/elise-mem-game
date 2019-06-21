const cardsArray = ['queen', 'queen', 'king', 'king'];

let cardsInPlay = [];

let cardOne = cardsArray[0];
console.log(`User flipped over ${cardOne}!`)

let cardTwo = cardsArray[1];
console.log(`User flipped over ${cardTwo}!`)

cardsInPlay.push(cardOne, cardTwo);

if (cardsInPlay.length === 2) {
  if (cardOne === cardTwo) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
} else {
    console.log('Insufficient cards picked')
}