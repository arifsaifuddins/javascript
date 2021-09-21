// // manipulasi dom

// // 1. manipilasi elemen

// // change element
// const judul = document.getElementById('judul');

// // element.innerHTML
// judul.innerHTML = '<em>Arief Saifuddien</em>';

// // element.style<property>
// judul.style.color = 'salmon';

// // element.attribute

// // adding
// judul.setAttribute('name', ' baru');
// judul.setAttribute('class', ' baru');

// // getting
// judul.getAttribute('id'); /*coba pake console*/

// // removing
// judul.removeAttribute('class', 'baru');
// judul.removeAttribute('name');


// // element.classsList
// const p2 = document.querySelector('.p2');

// // adding
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');
// p2.classList.add('empat');
// p2.classList.add('lima');

// // removing
// p2.classList.remove('satu');

// // toggling (kalo ngga ada yang sama ,tambah. kalo ada yang sama, hapus)
// p2.classList.toggle('satu');

// // contoh toggle
// document.body.classList.toggle('biru-muda');

// // item(tanya urutan) & contains(tanya apakah ada) & replace(ganti)
// p2.classList.item(2); /*coba pake console*/
// p2.classList.contains('empat'); /*coba pake console*/
// p2.classList.replace('lima', 'tujuh');


// // 2. manipulasi node

// // nambah tag dan isi

// // di akhir
// // buat element
// const parBaru = document.createElement('p');
// const textPBaru = document.createTextNode('paraf baru dengan js');

// // masukan tulisan ke p
// parBaru.appendChild(textPBaru);

// // simpan di akhir node / htmlnya dengan node.appendCild
// const sectionA = document.getElementById('a');
// sectionA.appendChild(parBaru);


// // ditngah
// // buat element
// const liBaru = document.createElement('li');
// const textLBaru = document.createTextNode('item baru dengan js');

// // masukan tulisan ke p
// liBaru.appendChild(textLBaru);

// // simpan di antara node / htmlnya dengan node.insertBefore
// const ul = document.querySelector('#b ul');
// const lisBaru = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, lisBaru);


// // set
// // const sectionA = document.getElementById('a');

// // remove element
// const link = sectionA.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// // replace
// const pa1Baru = document.createElement('p');
// const textPa1Baru = document.createTextNode('replace dengan js');

// pa1Baru.appendChild(textPa1Baru);

// const pGanti = sectionA.querySelector('p:first-child');

// sectionA.replaceChild(pa1Baru, pGanti);