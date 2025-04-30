// Challenge: Chain Stores

// Declare a class Chain that creates a new instance of a Chain object when invoked with the new keyword. 
// Each Chain object should have a name property, a totalStores property, and a locations property. 
// The name property will be assigned to a string which is passed in as an argument when calling the Chain function. 
// The totalStores property should be initialized to 0 and the locations property set to an array representing all the 
// existing franchises of that chain store. When a new object is initiated, the locations array should be empty.

// Declare another class Franchise that creates a new instance of a Franchise object when invoked with the new keyword. 
// Each Franchise object should have an owner property and a city property, both of which will be set equal to strings passed 
// in as arguments to the constructor.

// All instances of your Chain class must also have access to two methods that are stored on the class's prototype:

// The first method, openStore, should take in 2 strings as arguments. Those strings should be passed into a new instance of 
// a Franchise object as the arguments for the owner and city properties. The new instance of Franchise should be added to the 
// locations array which belongs to the Chain instance the method was called on. The totalStores property should also be updated accordingly.

// The second method, closeStore, should take a single string as an argument. It should check to see if there is an instance of 
// a Franchise with a city property that matches the input string in the locations array on the instance of Chain the method was 
// called on. If so, it should remove the instance from the locations array, update the totalStores property and display the 
// string 'name closed the store in city!' If not, log the string 'name doesn't have a store in city.'

class Chain {
	// add code here
  constructor(name) {
    this.name = name;
    this.totalStores = 0;
    this.locations = [];
  }
  
  openStore(owner, city) {
    const newFranchise = new Franchise(owner, city);
    this.locations.push(newFranchise);
    this.totalStores += 1;
  }
  
  closeStore(city) {
  const index = this.locations.findIndex(franchise => franchise.city === city);
  
  if (index !== -1) {
    this.locations.splice(index, 1);
    this.totalStores -= 1;
    console.log(this.name + ' closed the store in ' + city + "!");
  } else {
    console.log(`${this.name} doesn't have a store in ${city}.`);
  }
  }
  
}

class Franchise {
    //add code here
  constructor(owner, city) {
    this.owner = owner;
    this.city = city;
  }
}



const buenoBell = new Chain('Bueno Bell');

// Uncomment these lines to check your work!
buenoBell.openStore('Will', 'Phoenix');
buenoBell.openStore('Kyle', 'Austin');
buenoBell.openStore('Allison', 'Wichita');

console.log(buenoBell.totalStores); //should log 3
console.log(buenoBell.locations[0].owner) //should log 'Will'

buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'
