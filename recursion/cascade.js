// Challenge: Cascade  

// Write a function cascade that takes a positive integer and prints a cascade of this integer. 
// Hint - this very challenging problem can be solved with and without string manipulation!

// cascade(12345) should print

// 12345
// 1234
// 123
// 12
// 1
// 12
// 123
// 1234
// 12345

//NO STRING MANIPULATION

function cascade(number) {
    console.log(number);
    if (number >= 10) {
      cascade(Math.floor(number / 10));
      console.log(number);
    }
  }
  
  // //WITH STRING MANIPULATION
  // function cascade(n) {
  //   console.log(n);
  //   if (n >= 10) {
  //     cascade(Number(n.toString().slice(0, -1)));
  //     console.log(n);
  //   }
  // }
  
  
  // // Uncomment to test your work!
  cascade(345345)
  // should print
  /*
  111
  11
  1
  11
  111
  */


// // Uncomment to test your work!
cascade(111)
// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */