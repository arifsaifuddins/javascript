// destructuring variable /assignment
// (membongkar array / object di variable)

// // on array

// const mhs = ['halo', 'nama', ' saya', 'arief'];

// // nama boleh sembarang (harus sesuai jumlah)
// const [a, b, c, d] = mhs;
// console.log(a);
// console.log(c);

// const [satu, b, tiga, d] = mhs;
// console.log(satu);
// console.log(tiga);

// // 1. skip(kosongi index)
// const [satu, b, , ] = mhs;
// console.log(satu);
// console.log(b);

// // 2. swap(ubah index)
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // 3. return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// // 4. rest parameter (value lebih banyak)
// const [a, b, c, d] = [1, 2, 3, 4, 5, 6];
// console.log(e); /*error*/

// const [a, ...val] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(val[3]);
// console.log(val[0]); /* array */


//  on object

// // 1. biasa
// const mhs = {
//   nama: 'arief',
//   umur: 21,
//   instansi: 'IUA'
// }

// // nama harus sesuai object
// let {
//   nama,
//   umur,
//   instansi
// } = mhs;
// console.log(umur);

// // 2.  assignment tanpa deklarasi (lebih singkat)

// // tambah '()' diawal dan akhir
// ({
//   nama,
//   umur,
//   instansi
// } = {
//   nama: 'arief',
//   umur: 21,
//   instansi: 'IUA'
// });
// console.log(umur);
// console.log(instansi);

// // 3. kalo ingin beda nama (harus tambahi setelah deklarasi ':')
// ({
//   nama: a,
//   umur: p,
//   instansi: v
// } = {
//   nama: 'arief',
//   umur: 21,
//   instansi: 'IUA'
// });
// console.log(a);
// console.log(p);


// // 4. memberi nilai default(jaga2, kalo nggak ada)
// ({
//   nama: a,
//   umur: p,
//   instansi: v = 'al - quran'
// } = {
//   nama: 'arief',
//   umur: 21,
//   // instansi: 'IUA'
// });
// console.log(a);
// console.log(v);

// // 5. rest parameter
// const mhs = {
//   nama: 'arief',
//   umur: 21,
//   instansi: 'IUA'
// }

// const {
//   nama,
//   ...val
// } = mhs;
// console.log(val.instansi); /* object */
// console.log(val.umur); /* object */

// //  6. mengambil field pada object (membongkar)
// const mhs = {
//   id: 1234,
//   nama: 'arief',
//   usia: 21,
//   instansi: 'IUA'
// }

// function getItems({
//   id,
//   nama,
//   instansi
// }) {
//   // sesuai di parameter
//   // return id;
//   return nama;
// }
// console.log(getItems(mhs));


// distruturing on function value

// // on array
// function kalkulasi(a, b) {
//   return [a * b, a + b, a - b /*, a / b */ ];
// }

// nggak boleh ketuker urutannya
// const [kali, tambah, kurang, bagi = 'tidak ada'] = kalkulasi(6, 3);
// console.log(bagi);

// // on object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kali: a * b,
//     kurang: a - b,
//     bagi: a / b
//   }
// }

// // boleh ketuker urutannya
// const {
//   bagi,
//   kurang,
//   tambah,
//   kali
// } = kalkulasi(6, 3);
// console.log(bagi);

// distruturing on function argument
const mhs = {
  nama: 'arief',
  umur: 21,
  kuliah: 'IUA',
  tugas: {
    uas: 90,
    skripsi: 'semangat',
    uts: 50
  }
}

// // literal biasa
// function data(nama, umur) {
//   return `halo saya ${nama}, saya berusia ${umur} tahun`;
// }
// console.log(data(mhs.nama, mhs.umur));

// // argument
// function data(mhs1) {
//   return `halo saya ${mhs1.nama}, saya berusia ${mhs1.umur} tahun`;
// }
// console.log(data(mhs));

// // 1. distructuring single
// function data({
//   nama,
//   umur
// }) {
//   return `halo saya ${nama}, saya berusia ${umur} tahun`;
// }
// console.log(data(mhs));

// 1. distructuring single
function data({
  nama,
  umur,
  tugas: {
    uas,
    skripsi,
    uts
  }
}) {
  return `halo saya ${nama}, saya berusia ${umur} tahun, dan saya punya tugas uts yang nilainya ${uts} bulan lalu`;
}
console.log(data(mhs));