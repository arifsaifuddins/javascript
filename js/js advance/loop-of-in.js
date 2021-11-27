// modern looping

// 1. for of (ittereble)

// a. array
const mhs = ['arief', 'edy', 'garry', 'aldi'];

// for biasa
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

// forEach
mhs.forEach(function (e) {
  console.log(e);
});

mhs.forEach(m => console.log(m));

// for of
for (mn of mhs) {
  console.log(mn);
}

// in string
const nama = 'arief';
for (mm of nama) {
  console.log(mm);
}

const siswa = ['arief', 'dody', 'eddy', 'anny'];
// forEach dengan index
siswa.forEach((jk, i) => console.log(`${jk}, adalah siswa ke - ${ i + 1}`));
// for of dengan index (tambah .entries)
for ([i, bn] of siswa.entries()) {
  console.log(`${bn}, adalah siswa ke - ${ i + 1}`)
}


// b. nodelist
const liNama = document.querySelectorAll('.nama');

// forEach
liNama.forEach(mh => console.log(mh.innerHTML));
// for of
for (ml of liNama) {
  console.log(ml.innerHTML);
}


// c. argument
function jmlAngka() {
  let jumlah = 0;
  for (mc of arguments) {
    jumlah += mc;
  }
  return jumlah;
}
console.log(jmlAngka(1, 2, 3, 4, 5, 6, 7));


// 2. for in(enumereble)

const mhs1 = {
  nama: 'arief',
  usia: 21,
  email: 'arief@mail.com'
}

// index
for (dd in mhs1) {
  console.log(dd);
}

// value (index[])
for (dd in mhs1) {
  console.log(mhs1[dd]);
}