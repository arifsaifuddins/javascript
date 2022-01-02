// non-static class field
// utilities (public & private)

class Customer {
  // public field ( tanpa tambahan apapun)
  first;
  last;
  balance = 12;

  constructor(namaD, namaB) {

    this.first = namaD;
    this.last = namaB;
  }

  sayHello() {
    return 'hello';
  }
}

const arief = new Customer('arief', 'saifuddien');
console.log(arief);
console.log(arief.first);
console.log(arief.last);
console.log(arief.sayHello());



class Counter {

  // private property ( tambahan # di depan)
  #counter = 10;

  tambah() {
    return this.#counter++;
  }

  kurang() {
    return this.#counter--;
  }

  getCounter() {
    return this.#counter;
  }
}

const count = new Counter();

// kurangi
count.kurang();
count.kurang();
count.kurang();

console.log(count.getCounter());


// private method

class Person {

  // private (tambah # di depan)
  #sayName(name) {
    console.info(`hello ${name}`);
  }

  #sayAny() {
    console.info(`hello`);
  }

  say(name) {
    if (name) {
      this.#sayName(name);
    } else {
      this.#sayAny();
    }
  }
}

const ady = new Person();
ady.say('ady');

class Mhs {
  nama;
  #nrp;
  #email() {
    console.info(`nama : ${this.nama}, mail : ${this.nama}@mail.com, nrp : ${this.#nrp}`);
  }

  mahasiswa(nama) {

    this.nama = nama;
    this.#nrp = 2626;
    this.#email();
  }
}

const hanif = new Mhs();
hanif.mahasiswa('hanif');

// // nggak bisa akses private
// athiyah.#nrp = 21111;



// static class field
// tambahan di depan (static)

class Config {

  // static property
  static name = 'arief saifuddien';
  static modul = 'oop js';
  static ver = 2;
  static author = 'eko';

  // static method
  static sayHelloAll() {
    console.log(`hello ${Config.name}`);
  }
}

// pemanggilan tanpa buat object
console.log(Config.name);
console.log(Config.modul);
console.log(Config.ver);
console.log(Config.author);

// pemanggilan static method
Config.sayHelloAll();