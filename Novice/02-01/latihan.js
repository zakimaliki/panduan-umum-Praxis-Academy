
// latihan 1
var name_john = "John";
var age_john = 22;

var name_max = name_john;
var age_max = 26;

name_max = 'Max';

// console.log('John Data ==> ', name_john, age_john);
// console.log('Max Data ==> ', name_max, age_max);

// latihan 2 
var mike = { name: 'Mike' };
var odd = [1];
var morning = function () { return "Greetings!"; }
morning.info = 'Morning greeting function';

// re-assign to new variables
var evening = morning;
var john = mike;
var even = odd;

// reassign to new variable and modify value
var kate = mike;
kate = { name: 'Kate' };

// modify properties
evening.info = 'Evening greeting function';
john.name = 'John';
even[0] = 1;

// console.log('first ==> ', morning.info, mike, odd);
// console.log('second ==> ', evening.info, john, even);

// latihan 3
var s = ""; 			// string
var n = 0;				// number
var b = false;			// boolean
var sm = Symbol()		// symbol
var a = [];				// array
var o = {};				// object
var f = function () { } 	// function

// console.log('typeof s.constructor ==>  ', typeof s.constructor, ',  name ==> ', s.constructor.name);
// console.log('typeof n.constructor ==>  ', typeof n.constructor, ',  name ==> ', n.constructor.name);
// console.log('typeof b.constructor ==>  ', typeof b.constructor, ',  name ==> ', b.constructor.name);
// console.log('typeof sm.constructor ==> ', typeof sm.constructor, ', name ==> ', sm.constructor.name);
// console.log('typeof a.constructor ==>  ', typeof a.constructor, ',  name ==> ', a.constructor.name);
// console.log('typeof o.constructor ==>  ', typeof o.constructor, ',  name ==> ', o.constructor.name);
// console.log('typeof f.constructor ==>  ', typeof f.constructor, ',  name ==> ', f.constructor.name);

//  latihan 4 
function Animal( name ) {
  
  // `this` is an object we are about to create
  this.name = name; // add property `name` with value received from argument

  // add a method on object
  this.getName = function() {
    // here `this` is also the object as function belongs to the object 
    return 'Animal name is => ' + this.name;
  }
}

var a = new Animal( 'Dog' );
// console.log( 'a object ==> ', a );
// console.log('a.getName() ==> ', a.getName() );
// console.log('a.constructor === Animal ', a.constructor === Animal);

// latihan 5
function Animal(name) {

  // `this` is an object we are about to create
  this.name = name; // add property `name` with value received from argument

  // add a method on object
  this.getName = function () {
    // here `this` is also the object as function belongs to the object 
    return 'Animal name is => ' + this.name;
  }
}

// log prototype
// console.log( Animal.prototype );

// latihan 6
function Animal(name) {
  this.name = name;
}

// add `getName` function to the prototype
Animal.prototype.getName = function () {
  return 'Animal name is => ' + this.name;
}

// add simple property on prototype
Animal.prototype.generation = '100';

var a = new Animal( 'Dog' );


// console.log( 'Animal.prototype ==> ', Animal.prototype ); // log prototype
// console.log( 'a.__proto__ ==> ', a.__proto__ ); // log prototype
// console.log( 'Animal.prototype === a.__proto__ : ', Animal.prototype === a.__proto__ ); // check
// console.log( 'a ==> ', a ); // log object a
// console.log( 'a.getName() ==> ', a.getName() );
// console.log( 'a.generation ==> ', a.generation );

// latihan 7

function Animal(name) {
  this.name = name;
}

// add simple property on prototype
Animal.prototype.generation = '100';

// create object
var a = new Animal( 'Dog' );

 // log generation
// console.log( 'a.generation ==> ', a.generation );

 // check if generation is own property of object a
// console.log( 'has own generation ==> ', a.hasOwnProperty( 'generation' ) );

// latihan 8

function Animal(className) {
  this.className = className;
}

// add method to Animal prototype
Animal.prototype.getClass = function() {
  return 'Animal class is : ' + this.className;
};

function Dog(name) {
  this.name = name;
}
  
// save Animal.prototype in Dog.prototype
Dog.prototype = Animal.prototype;

// add method to Dog prototype
Dog.prototype.getName = function() {
  return this.name;
}

// create dog object
var d = new Dog( 'Tommy' );

// console.log(d); // show dog
// console.log(d.__proto__); // show Dog prototype

// latihan 9

function Animal(className) {
  this.className = className;
}

// add method to Animal prototype
Animal.prototype.getClass = function() {
  return 'Animal class is : ' + this.className;
};

function Dog(name) {
  this.name = name;
}

// save Animal.prototype in Dog.prototype
Dog.prototype = Object.create(Animal.prototype);

// add constructor reference on Dog prototype
Dog.prototype.constructor = Dog;

// add method to Dog prototype
Dog.prototype.getName = function() {
  return this.name;
}

// create dog object
var d = new Dog( 'Tommy' );

// console.log(d); // show dog
// console.log(d.__proto__); // show Dog prototype

// latihan 10

function Animal(className) {
  this.className = className;
}

// add method to Animal prototype
Animal.prototype.getClass = function() {
  return 'Animal class is : ' + this.className;
};

function Dog(name) {
  // execute parent constructor
  Animal.call( this, 'Animal' ); // pass this, arguments
  
  this.name = name; // add new property
}

// save Animal.prototype in Dog.prototype
Dog.prototype = Object.create(Animal.prototype);

// add constructor reference on Dog prototype
Dog.prototype.constructor = Dog;

// add method to Dog prototype
Dog.prototype.getName = function() {
  return this.name;
}

// create dog object
var d = new Dog( 'Tommy' );

// console.log(d); // show dog
// console.log(d.getClass()); // show Dog prototype

// latihan 11

function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  // clock.start();
