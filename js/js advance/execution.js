// //  execution phase

// let nama = " arief";
// let umur = 24;

// console.log(sayHello());
// function sayHello() {
// 	return `hello! , iam ${nama}, iam ${umur} years old`;
// }

// // contoh 1

// let nama = "erry";
// let username = "saifuddien_";

// function cetakURL(username) {
// 	let instagramURL = "https://istagram/";
// 	return instagramURL + username;
// }
// console.log(cetakURL(username));
// // console.log(cetakURL('dody_'));

// // contoh 2

// function a() {
// 	console.log("ini a");
// 	function b() {
// 		console.log("ini b");
// 		function c() {
// 			console.log("ini c");
// 		}
// 		c();
// 	}
// 	b();
// }
// a();

// // contoh 3

// function satu() {
// 	let nama = "dedy";
// 	console.log(nama);
// }

// function dua() {
// 	console.log(nama);
// }

// let nama = "erik";
// satu();
// dua("arief");
// console.log(dua());

// Closure (function)

function init() {
	let nama = "arief";
	function tampilNama() {
		console.log(nama);
	}
	tampilNama();
}
init();
