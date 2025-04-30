// Challenge: Dog Constructor

// Declare a function Dog that creates a new instance of a Dog object when invoked with the new keyword. 
// Each Dog object should have a name property and a breed property, both strings which are passed in as arguments when calling the Dog function. It should also have a property called tricks, set to an array representing all the tricks that dog knows. When a new object is initiated, tricks should be empty.

// All of your Dog objects must also have access to two methods that are stored on the constructor's prototype:

// The first method, learnTrick, should take in a string as an argument and add that string to the tricks array of the particular 
// Dog object it was called on.

// The second method, performTrick, should also take a string as an argument. It should check to see if that string 
// is in the tricks array belonging to the Dog instance it was called on; if so, it should log the string 'name performed trick!' 
// If not, log the string 'name doesn't know that trick.

function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.tricks = [];
  }
  
  Dog.prototype.learnTrick = function(trick) {
    this.tricks.push(trick);
  }
  
  Dog.prototype.performTrick = function(currTrick) {
    if (this.tricks.includes(currTrick)) {
      console.log(this.name + " performed " + currTrick + "!");
    } else {
      console.log(this.name + " doesn't know that trick.");
    }
  }
  
  const fido = new Dog('Fido', 'poodle');
  
  // Uncomment these lines to check your work!
  fido.learnTrick('fetch');
  fido.performTrick('fetch'); // should log 'Fido performed fetch!'
  fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'