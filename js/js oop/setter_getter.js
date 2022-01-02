// getter & setter

class Person {

  constructor(first, last) {
    this.namaDepan = first;
    this.namaBelakang = last;
  }

  // setter
  set namaLengkap(value) {
    const result = value.split(' ');
    this.namaDepan = result[0];
    this.namaBelakang = result[1];

    // return value; // bisa langsung
  }

  // getter
  get namaLengkap() {
    return `${this.namaDepan} ${this.namaBelakang}`;
  }
}

const arief = new Person('arief', 'saifuddien');
console.log(arief);
console.log(arief.namaLengkap);

// set nama
arief.namaLengkap = 'budi irawan';
console.log(arief);
console.log(arief.namaLengkap);