// prototype(object pewarisan)

function Person(first, last) {

  this.firstName = first;
  this.lastName = last;

  this.sayHello = function (name) {
    console.log(`hello ${name}, nama saya ${this.firstName}`);
  }
}

Person.prototype.sayBye = function () {
  console.log('good bye');
}

Person.prototype.run = function () {
  console.log('running');
}

const arief = new Person('arief', 'saifuddien');
arief.sayHello('edy');

const budi = new Person('budi', 'irawan');
arief.sayHello('ady');

console.log(arief);
console.log(budi);



// prototype inheritance

function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// inheritance

// Manager.prototype = Employee.prototype; // salah
Manager.prototype = Object.create(Employee.prototype); // benar

Employee.prototype.sayHello = function (name) {
  console.log(`hello ${name}, iam ${this.name}`);
}

Manager.prototype.sayHello = function (name) {
  console.log(`hello ${name}, iam ${this.name}`);
}

const employee = new Employee('adi');
employee.sayHello('adira');

const manager = new Manager('ahmad');
manager.sayHello('joni');

console.log(employee);
console.log(manager);