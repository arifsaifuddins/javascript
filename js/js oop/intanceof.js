// operator instanceof

class Employee {

}

class Manager extends Employee {

}

const arief = new Employee();
const edy = new Manager();

// typeof => object
console.table(typeof arief);
console.table(typeof edy);

console.log(arief instanceof Employee);
console.log(arief instanceof Manager);

// inheritance(extends)
console.log(edy instanceof Employee);
console.log(edy instanceof Manager);