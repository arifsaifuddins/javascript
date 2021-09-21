// cara hapus 1 elemen

// const sCard = document.querySelector('.card');
// const tClose = document.querySelector('span.close');
// // const Body = document.querySelector('body')

// tClose.addEventListener('click', function () {
//   // Body.removeChild(sCard);
//   sCard.style.display = 'none';
// });


// DOM traversal

// // cara satu
// const sClose = document.querySelectorAll('.close');
// const sCard = document.querySelectorAll('.card');

// for (let i = 0; i < sCard.length; i++) {
//   sClose[i].addEventListener('click', function () {
//     sCard[i].style.display = 'none';
//   });
// }

// // cara dua
// const sClose = document.querySelectorAll('.close');

// for (let i = 0; i < sClose.length; i++) {
//   sClose[i].addEventListener('click', function () {
//     sClose[i].parentElement.style.display = 'none';
//   });
// }

// cara tiga
// const sClose = document.querySelectorAll('.close');

// for (let i = 0; i < sClose.length; i++) {
//   sClose[i].addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     // console.log(e.target)
//   });
// }

// // cara empat
// const sClose = document.querySelectorAll('.close');

// sClose.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//   });
// });



// // contoh method

// const nama = document.querySelector('.nama');
// console.log(nama.parentNode);
// console.log(nama.parentElement);
// console.log(nama.parentElement.parentNode);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousSibling);
// console.log(nama.previousElementSibling);




// // cara mengembalkan default elemen (prevent default)
// const sClose = document.querySelectorAll('.close');

// sClose.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault();
//   });
// });


// // cara membedakan yang di klik
// const sClose = document.querySelectorAll('.close');
// const sCards = document.querySelectorAll('.card');

// sClose.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// sCards.forEach(function (card) {
//   card.addEventListener('click', function () {
//     alert('ok');
//   });
// });


// cara mengaktifakan elemen yang ditambah
const container = document.querySelector('body');

container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
  if (e.target.className == 'card') {
    alert('ok');
  }
})