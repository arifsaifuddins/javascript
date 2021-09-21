// object


// variabel biasa

// var nama = 'arief';
// var umur = 21;
// var lulus = true;
// var IPs = [2,5,4,12,3];

// // array

// var mhs = ['arief', 21, true, [2, 6, 7, 12, 3]];

// function IPKum(IPs) {
//   var total = 0;
//   for (var i = 0; i < IPs.length; i++) {
//     total += IPs[i];
//   }
//   return total / IPs.length;
// }
// IPKum(mhs[3]);
// console.log(IPKum);

// // object

// var mhs = {
//   nama: 'arief',
//   umur: 21,
//   lulus: true,
//   IPs: [2, 5, 4, 12, 3],
//   IPKum: function () {
//     var total = 0;
//     var ipes = this.IPs;
//     for (var i = 0; i < ipes.length; i++) {
//       total += ipes[i];
//     }
//     return total / ipes.length;
//   }
// };
// mhs.IPKum();
// console.log(mhs);

// // Object dalam object

// var mhs = {
//   nama: 'arief',
//   umur: 21,
//   lulus: true,
//   IPs: [2, 5, 4, 12, 3],
//   alamat: {
//     kota: 'bandung',
//     ptovinsi: 'jabar',
//     negara: 'indonesia'
//   }
// };
// console.log(mhs);


// // macam2 object

// // 1. literal

// var mhs1 = {
//   nama: 'edi',
//   umur: 21,
//   lulus: true,
//   jurusan: 'teknologi',
//   email: 'edi@mail.com'
// };
// console.log(mhs1);

// var mhs2 = {
//   nama: 'eri',
//   umur: 24,
//   lulus: true,
//   jurusan: 'sosiologi',
//   email: 'eri@mail.com'
// };
// console.log(mhs2);

// // 2. function declaration

// function dataMahasiswa(nama, umur, lulus, jurusan, email) {
//   var mhs = {};

//   mhs.nama = nama;
//   mhs.umur = umur;
//   mhs.lulus = lulus;
//   mhs.jurusan = jurusan;
//   mhs.email = email;
//   return mhs;
// }
// var mhs3 = dataMahasiswa('roni', 31, true, 'agama', 'roni@mail.com');
// console.log(mhs3);

// var mhs4 = dataMahasiswa('joni', 19, false, 'mtk', 'joni@mail.com');
// console.log(mhs4);

// // 3. function constractor

// function Mahasiswa(nama, umur, lulus, jurusan, email) {
//   this.nama = nama;
//   this.umur = umur;
//   this.lulus = lulus;
//   this.jurusan = jurusan;
//   this.email = email;
// }
// var mhs5 = new Mahasiswa('andi', 23, true, 'sains', 'andi@mail.com');
// console.log(mhs5);

// var mhs6 = new Mahasiswa('very', 20, true, 'ipa', 'very@mail.com');
// console.log(mhs6);


// // this

// console.log(window == this);

// var a = 10;
// console.log(window.a);
// console.log(this.a);

// // this in object

// // 1. literal

// // var obj = {};
// var obj = {
//   nama: 'arief',
//   umur: 21,
//   lulus: true,
// };

// obj.halo = function () {
//   // console.log('halo');
//   console.log(this);
// }
// obj.halo();

// // 2. declaration

// function helo() {
//   console.log('halo');
//   // console.log(this);
// }
// helo();

// // 3. constractor

// function helo() {
//   // console.log('halo');
//   console.log(this);
// }
// new helo();



// latihan object

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return penumpang;
  }

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang == 0) {
      console.log('Angkot sedang kosong');
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  }
}

var angkot1 = new Angkot('andi', ['jepara', 'kudus'], [], 0);
// var angkot2 = new Angkot('jerry', ['semarang', 'malang'], [], 0);