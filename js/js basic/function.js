// cara nulis function

// var a = 8;
// var b = 4;
// var volumeA;
// var volumeB;
// var hasil;


// volumeA = a * a * a;
// volumeB = b * b * b;

// hasil = volumeA + volumeB;

// console.log(hasil);



// var a = 8;
// var b = 4;
// var c = 6;
// var volumeA;
// var volumeB;
// var volumeC;
// var hasil;


// volumeA = a * a * a;
// volumeB = b * b * b;
// volumeC = c * c * c;

// hasil = volumeA + volumeB + volumeC;

// console.log(hasil);



// function jumlahVolumeKubus(a, b, c) {
//   var total, volA, volB, volC;

//   volA = a * a * a;
//   volB = b * b * b;
//   volC = c * c * c;

//   total = volA + volB + volC;

//   return total;
// }

// // console.log(jumlahVolumeKubus(8, 2, 4));
// alert(jumlahVolumeKubus(8, 2, 4));
// alert(jumlahVolumeKubus(32, 39, 7)); <keadaan kedua atau lebih>





//  parameter & argument



// function tambah(a, b) {
//   return a + b;
// }

// var a = parseInt(prompt('masukan nilai pertama :'));
// var b = parseInt(prompt('masukan nilai kedua :'));
// var hasil = tambah(a * 2, b * 3);
// // var a = parseInt(prompt('masukan nilai pertama :'));
// // var b = parseInt(prompt('masukan nilai kedua :'));
// // var hasil = tambah(a, b);
// // var hasil = tambah(2, 3);

// console.log(hasil);



// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }
// var hasil = kali(tambah(2, 3), kali(2, 5));
// // var hasil = kali(tambah(2, 3), tambah(1, 9));

// console.log(hasil);



// jika parameter lebih sedikit

// function tambah(a, b) {
//   return a + b;
// }
// var hasil = tambah(1, 2, 3);
// console.log(hasil);



// jika parameter lebih banyak daripada argument

// function tambah(a, b, c) {
//   return a + b;
// }
// var hasil = tambah(1, 2);
// console.log(hasil);



// array variable argument

// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var total = tambah(1, 2, 3);

// console.log(total);





// refactoring = cara lebih singkat



// function jumlahVolumeKubus(a, b, c) {
//   var total, volA, volB, volC;

//   volA = a * a * a;
//   volB = b * b * b;
//   volC = c * c * c;

//   total = volA + volB + volC;

//   return total;
// }
// alert(jumlahVolumeKubus(8, 2, 4));

// menjadi

// function jumlahVolumeKubus(a, b, c) {
//   return a * a * a + b * b * b + c * c * c;
// }

// alert(jumlahVolumeKubus(8, 2, 4));





// scope = lingkup variable


// global / window scope

// var a = 1;

// function tes() {
//   var b = 2;
//   console.log(a);
// }

// tes();
// console.log(b);
//  <bisa console dari luar dan tidak bisa dari dalam ke luar>


// function tes() {
//   a = 1;
// }

// tes();
// console.log(a);



// var a = 1;

// function tes(a) {
//   console.log(a);
// }

// tes(a);
// console.log(a);


// var a = 1;

// function tes(a) {
//   console.log(a);
// }

// tes(3);
// console.log(a);




// rekrusif = pemanggilan ulang

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }


// gunakan base case

// function tes(n) {
//   if (n === 0) return;
//   console.log(n);
//   return tes(n - 1);
// }
// tes(10);

