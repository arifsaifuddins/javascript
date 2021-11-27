// javascript (a single threaded nonblocking asynchronoous and cuncurrrent language)

// threaded (urutan baris perbaris)
// blocking (load satu2) & non blocking ( kebalikan)
// asynchronous (pengerjaan secara bersamaan)

// console.log(satu);
// console.log(dua);
// console.log(tiga);

// // asyc callback
// console.log(satu);
// setTimeout(() => {
//   console.log(dua);
// });
// console.log(tiga);



// 1. callbacks

// apa itu callback(eksekusi function setelah yang sebelumnya selesai)

// // function halo(nama) {
// //   alert(`halo, ${nama}`);
// // }

// function tampilNama(callBack) {
//   const nama = prompt(`masukan nama :`);
//   callBack(nama);
// }

// tampilNama(nama => alert(`halo ${nama}`));



// // contoh callback
// const mhs = [{
//   'nama': 'arief',
//   'alamat': 'indonesia',
//   'kuliah': 'IUA',
//   'usia': 31
// }, {
//   'nama': 'edy',
//   'alamat': 'thailand',
//   'kuliah': 'IUA',
//   'usia': 24
// }, {
//   'nama': 'joni',
//   'alamat': 'malaysia',
//   'kuliah': 'IUA',
//   'usia': 34
// }, {
//   'nama': 'adri',
//   'alamat': 'indonesia',
//   'kuliah': 'IUA',
//   'usia': 22
// }];

// mhs.forEach(m => console.log(m.nama));
// mhs.forEach(m => console.log(m.kuliah));

// // mhs.forEach(m => {
// //   for (let i = 0; i < 100; i++) {
// // let date = new Date();
// //  }
// //  console.log(m.alamat);
// // });
// console.log('selesai');



// // asynchronous -- callback

// function getDataM(url, success, error) {
//   let dataM = new XMLHttpRequest();

//   dataM.onreadystatechange = function () {
//     if (dataM.readyState === 4) {
//       if (dataM.status === 200) {
//         succes(dataM.response);
//       } else if (dataM.status === 404) {
//         error();
//       }
//     }
//   }
//   dataM.open('get', url);
//   dataM.send();
// }

// // // cara pemanggilan 1

// // function succes() {}
// // function error() {}
// // getDataM('json/data.json', success, error);

// // cara pemanggilan 2

// getDataM('json/data.json', results => {
//   // 1. console.log(JSON.parse(results));

//   // 2. looping
//   const dataMhs = JSON.parse(results);
//   dataMhs.forEach(mm =>
//     console.table(mm.nama, mm.alamat, mm.usia, mm.kuliah));
// }, () => {});

// console.log('salesai');

// // jquery

// $.ajax({
//   url: 'json/data-mhs.json',
//   success: mhs => {
//     let list = '';
//     mhs.forEach(elm => {
//       list += /*html*/ `
//         <ul>
//           <li style="color:red">Nama : ${elm.nama}</li>
//           <li>Usia : ${elm.usia}</li>
//           <li>Alamat : ${elm.alamat}</li>
//           <li>Agama : ${elm.agama}</li>
//         </ul>`;
//       $('h2').html(list);
//     });
//   },
//   error: () => {}
// });


// 2. promise
// object yang yang merepresentasikan keberhasilan /kegagalan  sebuah event yang asyncronous di masa datang
// janji (terpenuhi / ingkar)
// states (fulfiled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


// contoh promise

let tepat = true;
const promise1 = new Promise((resolve, reject) => {
  if (tepat) {
    resolve('janji ditepati');
  } else {
    reject('ingkar');
  }
});

promise1
  .then(m => console.log('ok' + m))
  .catch(m => console.log('not ok' + m));


// contoh 2

let tepat1 = true;
const promise2 = new Promise((resolve, reject) => {
  if (tepat1) {
    setTimeout(() => {
      resolve('janji ditepati');
    }, 2000);
  } else {
    setTimeout(() => {
      reject('ingkar');
    }, 2000);
  }
});

console.log('mulai');
// console.log(promise2.then(() => console.log(promise2)));
// nggak kelihatan pendingnya
promise2
  .finally('selesai semua')
  .then(m => console.log('ok' + m))
  .catch(m => console.log('not ok' + m));
console.log('selesai');


// promise all

// promise.all
// untuk banyak data
const mhs = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      nama: 'arief',
      kuliah: 'iua',
      usia: '21',
      alamat: 'jepara'
    }]);
  }, 2000);
});

const mhs1 = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      nama: 'sinin',
      kuliah: 'iua',
      usia: '24',
      alamat: 'malang'
    }]);
  }, 500);
});


// // manual
// mhs.then(k=>console.log(k));
// mhs1.then(k=>console.log(k));

// all
Promise.all([mhs, mhs1])
  // // belum jadi object
  // .then(l=> console.log(l))

  // jadi object
  .then(m => {
    const [mhs, mhs1] = m;
    console.log(mhs);
    console.log(mhs1);
  });


// 3. fetch

// sama seperti XMLHTTPReques / $.ajax
// sebuah method API , mengambil response dan jadi promise 

// fetch(reques, init);  ---2 parameter---

// // vanila js

// function dataMhs(url, success, error) {
//   let fileMhs = new XMLHttpRequest();

//   fileMhs.onreadystatechange = function () {
//     if (fileMhs.readyState === 4) {
//       if (fileMhs.status === 200) {
//         success(fileMhs.response);
//       } else if (fileMhs.status === 404) {
//         error();
//       }
//     }
//   }
//   fileMhs.open('get', url);
//   fileMhs.send();
// }

// dataMhs('json/data-mhs.json', resulty => {
//   let mhs = JSON.parse(resulty);
//   mhs.forEach(mm => document.querySelector('h1')
//     .innerHTML += `
//     <ul>
//     <li>nama : ${mm.nama}</li>
//     <li>usia : ${mm.usia}</li>
//     <li>alamat : ${mm.alamat}</li>
//     <li>agama : ${mm.agama}</li>
//     </ul>`);
// }, () => {});

fetch('json/data-mhs.json')
  .then(mm => mm.json())
  .then(jk => {
    let list = '';
    jk.forEach(elm => {
      list += /*html*/ `
          <ul>
            <li style="color:red">Nama : ${elm.nama}</li>
            <li>Usia : ${elm.usia}</li>
            <li>Alamat : ${elm.alamat}</li>
            <li>Agama : ${elm.agama}</li>
          </ul>`;
      document.querySelector('h2')
        .innerHTML = list;
    });
  });


// 4. async(asyncronous function) & await

// function promise() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('selesai')
//     }, 2000);
//   });
// }

// // const coba = promise();
// // coba.then(m => console.log(m));

// async function cobaAsync() {
//   const coba = await promise();
//   console.log(coba);
// }
// cobaAsync();



function promise() {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai');
      }, waktu);
    } else {
      reject('kelamaan');
    }
  });
}

// const coba = promise();
// coba
//   .then(m => console.log(m))
//   .catch(m => console.log(m));

async function cobaAsync() {
  try {
    const coba = await promise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}
cobaAsync();


// error handling

// .then .catch
// try catch