// events DOM js

// 1. event js handler

// inline HTML
// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//   p3.style.backgroundColor = 'lightblue';
// }

// method event
// const p2 = document.querySelector('.p2');

// // function ubahWarna1() {
//   //   p2.style.backgroundColor = 'lightblue';
//   // }
//   // p2.onclick = ubahWarna1;

//   p2.onclick = function () {
//     p2.style.backgroundColor = 'lightblue';
// };



// 2. addEventListener

// const p4 = document.querySelector('#b p');
// p4.addEventListener('click', function () {
//   p4.style.backgroundColor = 'lightblue';
// });

// const p4 = document.querySelector('#b p');
// p4.addEventListener('click', function () {
//   const ul = document.querySelector('#b ul');
//   const liBaru = document.createElement('li');
//   const textLiBaru = document.createTextNode('ini item baru dengan js ketika diclick');

//   liBaru.appendChild(textLiBaru);
//   ul.appendChild(liBaru);
// });


// perbadaan antara method & addEventListener

// const p2 = document.querySelector('.p2');

// // method
// p2.onclick = function () {
//   p2.style.backgroundColor = 'lightblue';
//   p2.style.color = 'red';
// };

// // addEventListener
// p2.addEventListener('click', function () {
//   p2.style.backgroundColor = 'lightblue';
//   p2.style.color = 'red';
// });

// // dipisah dengan function
// p2.onclick = function () {
//   p2.style.backgroundColor = 'lightblue';
// };
// p2.onclick = function () {
//   p2.style.color = 'red';
// };

// // dipisah dengan function
// p2.addEventListener('click', function () {
//   p2.style.backgroundColor = 'lightblue';
// });
// p2.addEventListener('click', function () {
//   p2.style.color = 'red';
// });