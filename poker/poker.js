// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}

$(function() {
  // Your code goes here!
  $(".btn").on("click", function(event) {
    event.preventDefault()
    var cards = $(getDeck().shuffle())
    var c1 = cards[1]
    console.log(c1)
    var c2 = cards[2]
    console.log(c2)
    var c3 = cards[3]
    console.log(c3)
    var c4 = cards[4]
    console.log(c4)
    var c5 = cards[5]
    console.log(c5)
    $("#c1").attr("src","http://golearntocode.com/images/cards/" + c1 + ".png")
    $("#c2").attr("src","http://golearntocode.com/images/cards/" + c2 + ".png")
    $("#c3").attr("src","http://golearntocode.com/images/cards/" + c3 + ".png")
    $("#c4").attr("src","http://golearntocode.com/images/cards/" + c4 + ".png")
    $("#c5").attr("src","http://golearntocode.com/images/cards/" + c5 + ".png")
  })
})
