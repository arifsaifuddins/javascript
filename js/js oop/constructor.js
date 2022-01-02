// // constructor function(capital case)

// function Person() {

//   // property
//   this.firstName = "";
//   this.lastName = "";

//   // method
//   this.sayHello = function (name) {
//     console.log(`hello ${name}, nama saya ${this.firstName}`);
//   }
// }

// const arief = new Person();
// arief.firstName = 'arief';
// arief.lastName = 'saifuddien';
// arief.sayHello('edy');

// const budi = new Person();
// budi.firstName = 'budi';
// budi.lastName = 'irawan';
// arief.sayHello('ady');

// console.log(arief);
// console.log(budi);


// params di construct

function Person(first, last) {

  this.firstName = first;
  this.lastName = last;

  this.sayHello = function (name) {
    console.log(`hello ${name}, nama saya ${this.firstName}`);
  }
}

const arief = new Person('arief', 'saifuddien');
arief.sayHello('edy');

const budi = new Person('budi', 'irawan');
arief.sayHello('ady');

console.log(arief);
console.log(budi);


// constructor inheritance

function Employee(firstN) {

  this.firstName = firstN;

  this.sayHello = function (name) {
    console.log(`hello ${name}, nama saya ${this.firstN}`);
  }

}

function Manager(firstN, lastN) {

  // .call
  Employee.call(this, firstN);
  this.lastName = lastN;
}

const abdul = new Manager('arief', 'saifuddien');
console.log(abdul);