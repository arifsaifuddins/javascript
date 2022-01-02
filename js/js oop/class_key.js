// class key (tanpa kurung)

class Person {

  // constructor
  constructor(name) {

    // property
    this.name = name;
    console.log(`hi ${name}`);
  }

  // method (tanpa function)
  sayHello(name) {

    this.name = name;
    console.log(`hi ${name}`);
  }
}

const arief = new Person('arief'); // param construct
arief.sayHello('adam');
console.log(arief);



// // class inheritance

// class Employee {
//   sayHello(nama) {
//     console.log(`hello ${nama}`);
//   }
// }

// class Manager extends Employee {

//   // pewarisan(inheritance)
// }

// const saif = new Employee();
// saif.sayHello('arief');

// const aji = new Manager();
// aji.sayHello('aji');



// class super constructor

class Employee {

  constructor(first) {
    this.first = first;
  }

  sayHello(nama) {
    console.log(`hello ${nama}`);
  }
}

class Manager extends Employee {

  // pewarisan(inheritance)

  // super construct
  constructor(first, last) {

    super(first); // wajib manggil
    this.last = last;
  }

  sayHello(nama) {
    console.log(`hello ${nama}, saya ${this.last}`);
  }
}

const saif = new Employee('ahmad');
saif.sayHello('arief');

const aji = new Manager(this, 'adi');
aji.sayHello('aji');


// super method

class Shape {

  paint() {
    console.log('paint said');
  }

  paint2() {
    console.log('paint2 said');
  }
}

class Circle extends Shape {

  paint() {
    super.paint(); // pemanggilan global method
    super.paint2();
    console.log('circle said');
  }
}

const circle = new Circle();
circle.paint();