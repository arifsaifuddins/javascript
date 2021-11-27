// // function expression

// const tampilNama = function (nama) {
//   return `halo, ${nama}`;
// }
// console.log(tampilNama('arief'));

// arrow function

// // 1. satu parameter
// // biasa
// const tampilNama= (nama) => {return `halo, ${nama}`}
// console.log('arief');
// // implisit return (bisa tanpa kurung & return)
// const tampilNama = (nama) => `halo, ${nama}`;
// console.log("arief");

// // 2. lebih dari satu parameter ( harus pake kurung)
// const tampilNama = (nama, time) => {
// 	return `halo, ${nama} , selamat ${time}`;
// };
// console.log(tampilNama("arief", "kerja"));

// // 3. tanpa parameter (harus pake kurung)
// const tampilNama = () => `hello world!`;
// console.log(tampilNama());

// // example //

// let mahasiswa = ["arief", "andiansyah", "ery"];

// // let jumlahHuruf = mahasiswa.map(function (nama) {
// // 	return nama.length;
// // });
// // console.log(jumlahHuruf);

// // // array
// // let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// // console.log(jumlahHuruf);

// // object
// let jumlahHuruf = mahasiswa.map((nama) => ({
// 	// nama: nama,
// 	nama,
// 	jmlHuruf: nama.length,
// }));
// // console.log(jumlahHuruf);
// console.table(jumlahHuruf);

// this in arrow function //

// constructor fuction
// const Mahasiswa = function () {
// 	this.nama = "arief";
// 	this.umur = 25;
// 	this.sayHello = function () {
// 		console.log(
// 			`halo, nama saya ${this.nama}, dan saya umur ${this.umur} tahun`
// 		);
// 	};
// };
// const arief = new Mahasiswa();

// arrow function

// // diubah methodnya
// const Mahasiswa = function () {
// 	this.nama = "arief";
// 	this.umur = 25;
// 	this.sayHello = () => {
// 		console.log(
// 			`halo, nama saya ${this.nama}, dan saya umur ${this.umur} tahun`
// 		);
// 	};
// };
// const arief = new Mahasiswa();

// // object literal
// const mhs = {
//   nama: "arief",
// 	umur: 25,
// 	sayHello: () => {
//     console.log(`halo, nama saya ${nama}, dan saya umur ${umur} tahun`);
// 	},
// };

// // example
// const Mahasiswa = function () {
// 	this.nama = "arief";
// 	this.umur = 25;
// 	this.sayHello = function () {
// 		console.log(
// 			`halo, nama saya ${this.nama}, dan saya umur ${this.umur} tahun`
// 		);
// 	};
// 	setInterval(() => {
// 		console.log(this.umur++);
// 	}, 2000);
// };
// const arief = new Mahasiswa();

// // contoh
// const box = document.querySelector(".box");

// box.addEventListener("click", function () {
// 	this.classList.toggle("size");
// 	setTimeout(() => {
// 		this.classList.toggle("caption");
// 	}, 600);
// });


// const box = document.querySelector('.box')

// box.addEventListener('click', function () {
// 	let one = 'size'
// 	let two = 'caption'

// 	if (this.classList.contains(one)) {
// 		[one, two] = [two, one]
// 	}
// 	this.classList.toggle(one);
// 	setTimeout(() => {
// 		this.classList.toggle(two);
// 	}, 600);
// });


// //  higher order function //

// function kerjaTugas(matkul, selesai) {
// 	console.log(`Mulai mengerjakan tugas ${matkul},,,`);
// 	selesai();
// }

// function selesai() {
// 	alert(`selesai mengerjakan tugas`);
// }

// kerjaTugas(`pemrograman`, selesai);

// // 1
// setTimeout(function () {
// 	console.log(`hello world`);
// }, 1000);

// const box = document.querySelector('.box');

// box.addEventListener('click', function () {
// 	console.log('tombol dikekan');
// });

// // 2
// let total = 0,
// 	count = 1;

// while (count == 10) {
// 	total += count;
// 	count++;
// }
// console.log(total);

// // // or
// // console.log(sum(range(1, 10)));

// // 3
// function repeat(n, action) {
// 	for (let i = 0; i < n; i++) {
// 		action(i);
// 	}
// }

// repeat(10, console.log);
// repeat(3, alert);




// HOF => higher order function example

const angka = [-1, 3, 6, 7, 8 - 8, -4, 2, 3, 4, 6];

// 1. filter
// // for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
// 	if (angka[i] >= 3) {
// 		newAngka.push(angka[i]);
// 	}
// }
// console.log(newAngka);

// // filter
// const newAngka = angka.filter(function (a) {
// 	return a >= 3;
// });
// console.log(newAngka);

// // arrow
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// 2. map
const baruAngka = angka.map(a => a * 2);
console.log(baruAngka);


// // 3. reduce
// const Angkanya = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(Angkanya);

// //  method chaining
// const hasil = angka.filter(a => a > 5)
// 	.map(a => a * 3)
// 	.filter((acc, cur) => acc + cur);
// console.log(hasil);


// latihan HOF

// // 1. ambil semua elemen
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// // 2. pilih yang js lanjut
// let jsLanjut = videos.filter(video => video.textContent.includes('javascript lanjutan'))

// 	// 3. ambil durasi
// 	.map(item => item.dataset.duration)

// 	// 4. ubah jadi int
// 	.map(waktu => {
// 		const parts = waktu.split(':').map(part => parseFloat(part));
// 		return (parts[0] * 60) + parts[1];
// 	})

// 	// 5. jumlah semua
// 	.reduce((total, detik) => total + detik);

// // 6. ubah format
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;

// // 7. simpan di DOM
// const durasi = document.querySelector('.total-durasi');
// durasi.textContent = `${jam} : ${menit} : ${detik}`;

// const jmlVideo = document.querySelector('.total-video');
// jmlVideo.textContent = videos.filter(video => video.textContent.includes('javascript lanjutan')).length;