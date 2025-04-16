// You are creating a card game application with your friend.

// She already wrote a function that divides the deck of cards into top and bottom halves, but needs help writing a function that shuffles the two halves together again.

// Challenge: shuffleCards  

// Write a function that takes two arrays as inputs, representing the top and bottom halves of a deck of cards, and shuffles them together. The function will return a single array containing the elements from both input arrays interleaved, like so:

// the first element should be the first element of the first input array,

// the second element should be the first element of the second input array,

// the third element should be the second element of the first input array,

// the fourth element should be the second element of the second array,

// and so on.

// The arrays may be of different lengths. After interleaving the elements of the input arrays, any remaining elements should be appended to the end of the array.

// This problem can be solved in many ways, but try to solve it with recursion!



function shuffleCards(topHalf, bottomHalf, thCount = 0, bhCount = 0, shuffled = []) {
    if (thCount === topHalf.length && bhCount === bottomHalf.length) {
      return shuffled;
    }
  
    if (thCount < topHalf.length) {
      shuffled.push(topHalf[thCount]);
      thCount++;
    }
  
    if (bhCount < bottomHalf.length) {
      shuffled.push(bottomHalf[bhCount]);
      bhCount++;
    }
  
    return shuffleCards(topHalf, bottomHalf, thCount, bhCount, shuffled);
  }
  
  
  
  // UNCOMMENT TO TEST YOUR WORK
  const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
  const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
  console.log(shuffleCards(topHalf, bottomHalf));
    /*-> ['Queen of Diamonds',
          'Jack of Hearts',
          'Five of Hearts',
          'Ten of Spades',
          'Ace of Spades',
          'Eight of Clubs',
        ]
    */