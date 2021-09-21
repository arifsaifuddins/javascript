// pengulangan & pengkondisian



// pengulangan.While

// while (true) {
//   console.log('hello world');
// }

// var ulang = true;
// while (ulang) {
//   console.log('hello world');
//   ulang = confirm('lagi?');
// }

// var nilaiAwal = 1;
// while (nilaiAwal <= 5) {
//   console.log('hello world');
//   nilaiAwal = nilaiAwal + 1;
// }

// var jmlAngkot = 10;
// var noAngkot = 1;
// while (noAngkot <= jmlAngkot) {
//   console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik.');
//   noAngkot++;
// }





// pengulangan,For



// var noAngkot = 1;
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// while (noAngkot <= jmlAngkot) {
//   console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik');
//   noAngkot++;
// }

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log('Angkot No.' + noAngkot + ' tidak beroperasi dengan baik');
// }





// pengkondisian.If Else



// var angka = prompt('masukan angka:');

// if (angka % 2 == 2) {
//   alert(angka + ' adalah bilangan genap');
// } else {
//   alert(angka + ' adalah bilangan ganjil');
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= 6) {
//     console.log('Angkot No. ' + noAngkot + ' beropasi dengan baik');
//   } else {
//     console.log('Angkot No. ' + noAngkot + ' tidak beropasi dengan baik');
//   }
// }





// pengkondisian.Else If



// var angka = prompt('masukan angka:');

// if (angka % 2 == 0) {
//   alert(angka + ' adalah bilangan genap');
// } else if (angka % 2 == 1) {
//   alert(angka + ' adalah bilangan ganjil');
// } else {
//   alert('yang anda masukan bukan angka');
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= 6) {
//     console.log('Angkot No. ' + noAngkot + ' beropasi dengan baik');
//   } else if (noAngkot == 8) {
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//   } else {
//     console.log('Angkot No. ' + noAngkot + ' tidak beropasi dengan baik');
//   }
// }



// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   // if (noAngkot <= 4 || noAngkot == 6)
//   if (noAngkot <= 6 && noAngkot !== 5) {
//     console.log('Angkot No. ' + noAngkot + ' beropasi dengan baik');
//   } else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//   }
//   //  else if (noAngkot == 10) {
//   //   console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//   // }
//   else {
//     console.log('Angkot No. ' + noAngkot + ' tidak beropasi dengan baik');
//   }
// }






// switch



// var angka = parseInt(prompt('masukanangka :'));

// if (angka === 1) {
//   alert('anda memasukan angka 1');
// } else if (angka === 2) {
//   alert('anda memasukan angka 2');
// } else if (angka === 3) {
//   alert('anda memasukan angka 3');
// } else {
//   alert('anda memasukan angka yang salah');
// }


// var angka = prompt('masukanangka :');

// if (angka == 1) {
//   alert('anda memasukan angka 1');
// } else if (angka == 2) {
//   alert('anda memasukan angka 2');
// } else if (angka == 3) {
//   alert('anda memasukan angka 3');
// } else {
//   alert('anda memasukan angka yang salah');
// }


// var angka = prompt('masukan angka :');

// switch (angka) {
//   case '1':
//     alert('anda memasukan angka satu');
//     break;
//   case '2':
//     alert('anda memasukan angka dua');
//     break;
//   case '3':
//     alert('anda memasukan angka tiga');
//     break;
//   default:
//     alert('anda memasukan angka yang salah');
//     break;
// }

// var jenisMakanan = prompt('masukan makanan kesukaanmu : \n (contoh : nasi, daging, sayur, susu, hamburger, softdrink, junkfood');

// switch (jenisMakanan) {
//   case 'nasi':
//   case 'sayur':
//   case 'daging':
//   case 'susu':
//     alert('anda memilih makan yang sehat');
//     break;
//   case 'softdrink':
//   case 'hamburger':
//   case 'junkfood':
//     alert('anda memilih makan yang tidak sehat');
//     break;
//   default:
//     alert('anda memilih makanan yang salah');
//     break;
// }





// pengulangan & pengkondisian bersarang


// var s = '';
// for (var i = 0; i < 10; i++) {
//   s += '*';
// }
// console.log(s);

// var s = '';
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += "\n";
// }
// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += "\n";
// }
// // for (var i = 10; i > 0; i++) {
// //   for (var j = 10; j >= 10; j--) {
// //     s += '*';
// //   }
// //   s += '\n';
// // }
// console.log(s);