// import key ( import { var , func } from './source' )

// import { nama } from './module.js'; // one import
import { nama, sayHello } from './module.js';  // many import

// // alias (as)
// import { nama as nm } from './module.js';

// // default import 
// import { default as one } from './module.js';

// // all import
// import * as modules from './module.js';

// agregate import
import { age } from './js/help.js';

const modls = document.querySelector('.modules');

function modul() {

  return /*html*/ `
  <h2>Nama = ${nama}</h1>
  <h2>${sayHello()}</h1>

   <!-- agregate -->
  <h2>${age}</h1>`;
}
modls.innerHTML = modul();


// <!-- default -->
// <h2>${one()}</h1>

// <!-- all -->
// <h2>${modules.nama}</h1>
// <h2>${modules.sayHello()}</h1>

// <!-- alias -->
// <h2>${nm}</h1>