// PROTOTYPE

// object

// // 1. literal

// let mahasiswa = {
// 	nama: "arief",
// 	umur: 25,
// 	energi: 10,
// 	makan: function (porsi) {
// 		// this.energi = this.energi + porsi;
// 		this.energi += porsi;
// 		console.log("halo " + this.nama + ", selamatmakan!");
// 	},
// };

// let mahasiswa2 = {
// 	nama: "ery",
// 	umur: 23,
// 	energi: 10,
// 	makan: function (porsi) {
// 		// this.energi = this.energi + porsi;
// 		this.energi += porsi;
// 		console.log("halo " + this.nama + ", selamatmakan!");
// 	},
// };

// 2. declaration

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = {};
//  mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
// 	mahasiswa.makan = function (porsi) {
// 		this.energi += porsi;
// 		console.log("halo " + this.nama + ", selamat makan");
// 	};
// 	mahasiswa.main = function (jam) {
// 		this.energi -= jam;
// 		console.log("halo " + this.nama + ", selamat bermain");
// 	};
// 	return mahasiswa;
// }

// let arief = Mahasiswa("arief", 20);
// let ery = Mahasiswa("ery", 40);

// // 3. constractor

// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;
// 	this.makan = function (porsi) {
// 		this.energi += porsi;
// 		console.log("halo " + this.nama + ", selamat makan");
// 	};
// 	this.main = function (jam) {
// 		this.energi -= jam;
// 		console.log("halo " + this.nama + ", selamat bermain");
// 	};
// }
// let arief = new Mahasiswa("arief", 20);
// let ery = new Mahasiswa("ery", 40);

// // 4. object.creat()

// const methodMahasiswa = {
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log("halo " + this.nama + ", selamat makan");
// 	},
// 	main: function (jam) {
// 		this.energi -= jam;
// 		console.log("halo " + this.nama + ", selamat bermain");
// 	},
// 	tidur: function (jam) {
// 		this.energi += jam * 2;
// 		console.log("halo " + this.nama + ", selamat tidur");
// 	},
// };

// // // cara nggak efektif
// // function Mahasiswa(nama, energi) {
// // 	let mahasiswa = {};
// // 	mahasiswa.nama = nama;
// // 	mahasiswa.energi = energi;
// // 	mahasiswa.makan = methodMahasiswa.makan;
// // 	mahasiswa.main = methodMahasiswa.main;
// // 	return mahasiswa;
// // }

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
// 	return mahasiswa;
// }

// let arief = Mahasiswa("arief", 20);
// let ery = Mahasiswa("ery", 40);

// // 5. prototype object

// // inherit version
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
// 	console.log("halo " + this.nama + ", selamat makan");
// };
// Mahasiswa.prototype.main = function (jam) {
// 	this.energi -= jam;
// 	console.log("halo " + this.nama + ", selamat bermain");
// };
// Mahasiswa.prototype.tidur = function (jam) {
// 	this.energi += jam * 2;
// 	console.log("halo " + this.nama + ", selamat tidur");
// };

// let arief = new Mahasiswa("arief", 20);
// let ery = new Mahasiswa("ery", 40);

// class version(dibelakang layar dengan contructor)
class Mahasiswa {
	constructor(nama, energi) {
		this.nama = nama;
		this.energi = energi;
	}
	makan(porsi) {
		this.energi += porsi;
		console.log("halo " + this.nama + ", selamat makan");
	}
	main(jam) {
		this.energi -= jam;
		console.log("halo " + this.nama + ", selamat bermain");
	}
	tidur(jam) {
		this.energi += jam * 2;
		console.log("halo " + this.nama + ", selamat tidur");
	}
}

let arief = new Mahasiswa("arief", 20);
let ery = new Mahasiswa("ery", 40);