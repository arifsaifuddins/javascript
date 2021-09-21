// // variable

// var hari = 'senin';
// var hari2 ='selasa';



// // array


// // macam2 array

// var hari = ['senin', 'selasa', 'rabu'];
// var angka = [12, 32, 322];
// var myArr = ['teks', 21, false];
// // boleh banyak tipe data
// var myFunc = function () {
//   alert('hello world');
// };
// var myArr2 = ['teks', 2, false, myFunc];

// var myArr3 = ['teks', 2, false, myFunc, [4, 5, 5]];
// console.log(myArr3[4][2]);



// // manipulasi array


// // 1. menambah

// var arr = [];

// arr[0] = 'andi';
// arr[1] = 'deni';
// arr[2] = 'dodi';

// console.log(arr);

// // 2. menhapus

// var arr = [];

// arr[0] = 'andi';
// arr[1] = undefined;
// arr[2] = 'dodi';

// console.log(arr);

// // 3. menampilkan isi array dengan loop

// var arr = ['andi', 'deni', 'dodi'];

// for (var i = 0; i < 3; i++) {
//   console.log('mahsiswa no ' + (i + 1) + ': ' + arr[i]);
// }

// var arr = ['andi', 'deni', 'dodi',
//   'jerry'
// ];

// for (var i = 0; i < arr.length; i++) {
//   console.log('mahsiswa no ' + (i + 1) + ': ' + arr[i]);
// }


// // method array

// // 1. length

// var arr = ['andi', 'deni', 'dodi',
//   'jerry'
// ];

// for (var i = 0; i < arr.length; i++) {
//   console.log('mahsiswa no ' + (i + 1) + ': ' + arr[i]);
// }

// // 2. join (meratakan teks)

// var arr = ['andi', 'deni', 'dodi', 'jerry'];

// console.log(arr.join(' - '));

// // 3. push & pop (menambah dan mengurangi di akhir array)

// // push
// var arr = ['andi', 'deni', 'dodi', 'jerry'];
// arr.push('dona', 'fitri');

// console.log(arr.join(' - '));

// // pop
// var arr = ['andi', 'deni', 'dodi', 'jerry'];
// arr.pop();
// arr.pop();

// console.log(arr.join(' - '));

// // 4. unshift & shift (menambah dan mengurangi di awal array)

// // unshift
// var arr = ['andi', 'deni', 'dodi', 'jerry'];
// arr.unshift('dona', 'fitri');

// console.log(arr.join(' - '));

// // shift
// var arr = ['andi', 'deni', 'dodi', 'jerry'];
// arr.shift();
// arr.shift();

// console.log(arr.join(' - '));

// // 5. splice & slice (menyisipkan dan membuat di tengah array)

// // splice(indexAwal, mauDihapusBerapa,elemenBaru1,2,3...)
// var arr = ['andi', 'deni', 'dodi', 'jerry'];
// arr.splice(1, 1, 'dona', 'jani');

// console.log(arr.join(' - '));

// // slice(awal,akhir)
// var arr = ['andi', 'deni', 'dodi', 'jerry'];
// var arr1 = arr.slice(1, 3);

// console.log(arr.join(' - '));
// console.log(arr1.join(' - '));


// // 6. forEach & map & sort

// // forEach
// var angka = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// var angka = [1, 2, 3, 4, 5, 6];

// angka.forEach(function (e) {
//   console.log(e);
// });

// var angka = [1, 2, 3, 4, 5, 6];
// var nama = ['andi', 'deni', 'dodi', 'jerry'];

// angka.forEach(function (e, i) {
//   console.log('mahasiswa ke : ' + i + 'adalah : ' + e);
// });

// // map
// var angka = [1, 2, 3, 4, 5, 6];

// angka.map(function (e) {
//   console.log(e);
// });

// var angka = [1, 2, 3, 4, 5, 6];
// var angka1 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka1.join(' - '));

// // sort (mengurutkan)
// var angka = [1, 2, 8, 7, 5, 6, 4, 3];

// angka.sort();
// console.log(angka.join(' - '));

// var angka = [1, 2, 8, 7, 5, 6, 4, 3, 10, 20, 30];

// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(' - '));


// // 7. filter & find

// // filter
// var angka = [1, 2, 8, 7, 50, 6, 4, 3, 10, 20, 30];
// var angka2 = angka.filter(function (x) {
//   // return x == 7;
//   return x > 5;
//   // untuk angka lebih besar dengan hasil banyak
// });
// console.log(angka2.join(' - '));

// // find
// var angka = [1, 2, 8, 7, 50, 6, 4, 3, 10, 20, 30];
// var angka2 = angka.find(function (x) {
//   return x > 20;
//   // untuk angka lebih besar dengan hasil satu
// });
// console.log(angka2);



// app pengelolaan angkot (function & array)

// var follower = ['firman', undefined, 'zaki', undefined, 'riki'];
// // var follower = [];

// function addFollower(followerName, follower) {
//   if (follower.length == 0) {
//     follower.push(followerName);
//     return follower;

//   } else {
//     for (var i = 0; i < follower.length; i++) {
//       if (follower[i] == undefined) {
//         follower[i] = followerName;
//         return follower;

//       } else if (follower[i] == followerName) {
//         console.log(followerName + ' has inside the angkot');
//         return follower;

//       } else if (i == follower.length - 1) {
//         follower.push(followerName);
//         return follower;

//       }
//     }
//   }
// }

// function removeFollower(followerName, follower) {
//   if (follower.length == 0) {
//     console.log('follower angkot is nothing ');
//     return follower;

//   } else {
//     for (var i = 0; i < follower.length; i++) {
//       if (follower[i] == followerName) {
//         follower[i] = undefined;
//         return follower;

//       } else if (i == follower.length - 1) {
//         console.log(followerName + ' is not inside the angkot');
//         return follower;

//       }
//     }
//   }
// }