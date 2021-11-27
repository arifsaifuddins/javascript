// template literal (back tick (` `))

// multi line string
const nama = 'arief';
const umur = 21;

console.log(`halo dunia,      saya ${nama}, dan saya ${umur} tahun`);
console.log(
  `${nama}
${umur}`);

// embeded expression
console.log(`${1+1}`);
// console.log(`${alert('hallo')}`);

// binary operation
const x = 13;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML

// // 1. fragments
// const mhs = {
//   nama: 'arief',
//   alamat: 'indnesia',
//   email: 'arief@mail.com',
//   umur: 21
// };

// let elm =
//   `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="alamat">${mhs.alamat}</span>
// </div>`;

// // 2. looping

// const mhs = [{
//     nama: 'alvin',
//     alamat: 'mantingan'
//   },
//   {
//     nama: 'edwin',
//     alamat: 'jepara'
//   },
//   {
//     nama: 'sinin',
//     alamat: 'kedung'
//   }
// ];

// let elm =
//   `<div class="mhs">
//   ${mhs.map(m =>
//     `<ul>
//       <li>${m.nama}</li>
//       <li>${m.alamat}</li>
//     </ul>`).join('')}
// </div>`

// // 3. condition

// const penyanyi = {
//   nama: 'ariel',
//   // grup: 'noah',
//   judul: 'dengarlah'
// };

// let elm =
//   `<div class = "lagu">
//   <ul>
//     <li>${penyanyi.nama}</li>
//     <li>${penyanyi.judul}, ${penyanyi.grup ? `grup: ${penyanyi.grup}` : 'solo'}</li>
//   </ul>
// </div>`;

// // 4. nesting

// const mhs = {
//   nama: 'arief',
//   semester: 5,
//   matkul: [
//     'fikih',
//     'akidah',
//     'bahasa',
//     'ushul'
//   ]
// }

// function mataKuliah() {
//   return `
//   <ol>
//     ${mhs.matkul.map(mk => `<li>${mk}</li>` ).join('')}
//   </ol>`
// };

// let elm =
//   `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <div class="semester">semester : ${mhs.semester}</div>
//   <h4>mata kuliah :</h4>
//   ${mataKuliah(mhs.matkul)}
// </div>`

// document.body.innerHTML = elm;