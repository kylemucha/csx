// Challenge: POW   


// Write a function that takes two inputs, a base and an exponent, 
// and returns the expected value of base ^ exponent. 
// For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

function pow(base, exponent){
    if(exponent === 0){
      return 1;
    }
    return base * pow(base, exponent - 1);
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(pow(2, 4)); // -> 16
  console.log(pow(3, 5)); // -> 243