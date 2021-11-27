// notasi (...)


// // 1. spread operator (pemecah iterable menjadi single)

// // memecah
// const mhs = ['arief', 'jefri', 'ery'];
// console.log(mhs);
// console.log(...mhs);
// console.log(...mhs[1]);

// // menggabung beberapa array
// const mhs1 = ['aji', 'abdi', 'qomar', 'asfi'];
// const dosen = ['edy', 'bambang', 'sofi'];
// console.log([...mhs1, 'wanda', ...dosen]);

// // meng-copy
// const mhs2 = ['aji', 'abdi', 'qomar', 'asfi'];
// const mhs3 = [...mhs2];
// mhs3[2] = 'wawan';
// console.log(mhs3);

// // membuat array dari html
// const mhs5 = document.querySelectorAll('.nama');

// // // manual
// // const mhs = [];
// // for (let i = 0; i < mhs5.length; i++) {
// //   mhs.push(mhs5[i].textContent);
// // }
// // console.log(mhs);

// // spread
// const mhs = [...mhs5].map(m => m.textContent);
// console.log(mhs);



// contoh animasi pakai spread

const arief = document.querySelector('.satu');
const animasi = [...arief.textContent].map(d =>
  `<span class="aHuruf">${d}</span>`).join('');
arief.innerHTML = animasi;

const saifuddien = document.querySelector('.dua');
const scale = [...saifuddien.textContent].map(d =>
  `<span class="aHuruf">${d}</span>`).join('');
saifuddien.innerHTML = scale;


// 2. rest parameter (representasi argument yang terbatas menjadi sebuah arrray)

// // harus di akhir
// function myFunc(a, b, ...myArgs) {
//   return `a = ${a}, b = ${b}, sisanya = ${myArgs}`;
// }

// // all of argument
// function myFunc(...myArgs) {
//   return myArgs;
// }

// // contoh
// function myFunc() {

//   // // arguments (auto di function)
//   // return arguments; /* bukan jadi array */

//   // // array from( merubah jadi array)
//   // return Array.from(arguments);

//   // pakai spread
//   return [...arguments]
// }

// console.log(myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9));


// penjumlahan dengan rest

function jumlahAngka(...angka) {
  // // for of
  // let jumlah = 0;
  // for (const a of angka) {
  //   jumlah += a;
  // }
  // return jumlah;

  // reduce
  return angka.reduce((a, b) => (a * b));
}
console.log(jumlahAngka(1, 2, 3, 4, 5, 6, 7, 8, 9));


// array destructuring
const kelompok1 = ['arief', 'dani', 'abi', 'jefri', 'adidi', 'roni'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(`ketua = ${ketua}`);
console.log(`wakil = ${wakil}`);
console.log(`anggota = ${anggota}`);


// object destructuring
const team = {
  pm: 'arief',
  frontend: 'joko',
  backend: 'edy',
  ui: 'aji',
  ux: 'fery',
  devops: 'tary'
}

const {
  pm,
  ...myTeam
} = team;
console.log(myTeam);


// filtering
function filterBy(type, ...value) {
  return value.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 3, 'arief', false, true, true, 23, 'dody'));
console.log(filterBy('string', 1, 2, 3, 'arief', false, true, true, 23, 'dody'));
console.log(filterBy('boolean', 1, 2, 3, 'arief', false, true, true, 23, 'dody'));