// function getComputerChoose() {
//   const comp = Math.random();
//   if (comp < 0.34) return 'rock';
//   if (comp >= 0.34 && comp < 0.67) return 'paper';
//   return 'scissor';
// }

// function getRules(comp, player) {
//   if (player == comp) return 'balance';
//   if (player == 'rock') return (comp == 'paper') ? 'lose' : 'win';
//   if (player == 'paper') return (comp == 'rock') ? 'win' : 'lose';
//   if (player == 'scissor') return (comp == 'paper') ? 'win' : 'lose';
// }

// function roll() {
//   const imgComp = document.querySelector('img.computer1');
//   const image = ['rock', 'paper', 'scissor'];
//   let i = 0;
//   const startTime = new Date().getTime();
//   setInterval(function () {
//     if (new Date().getTime() - startTime > 1000) {
//       clearInterval;
//       return;
//     }
//     imgComp.setAttribute('src', image[i++] + '.png');
//     if (i == image.length) i = 0;
//   }, 200);
// }

// const pChoose = document.querySelectorAll('li img');
// pChoose.forEach(function (choo) {
//   choo.addEventListener('click', function () {
//     const cComp = getComputerChoose();
//     const cPlayer = choo.className;
//     const cRules = getRules(cComp, cPlayer);

//     roll();

//     setTimeout(function () {
//       const imgComp = document.querySelector('img.computer1');
//       imgComp.setAttribute('src', cComp + '.png');

//       const score = document.querySelector('.score');
//       score.innerHTML = cRules;
//     }, 1000);
//   });
// });

// const pRock = document.querySelector('.rock');
// pRock.addEventListener('click', function () {
//   const cComp = getComputerChoose();
//   const cPlayer = pRock.className;
//   const cRules = getRules(cComp, cPlayer);
//   const imgComp = document.querySelector('img.computer1');
//   imgComp.setAttribute('src', cComp + '.png');

//   const score = document.querySelector('.score');
//   score.innerHTML = cRules;
// });

// const pPaper = document.querySelector('.paper');
// pPaper.addEventListener('click', function () {
//   const cComp = getComputerChoose();
//   const cPlayer = pPaper.className;
//   const cRules = getRules(cComp, cPlayer);
//   const imgComp = document.querySelector('img.computer1');
//   imgComp.setAttribute('src', cComp + '.png');

//   const score = document.querySelector('.score');
//   score.innerHTML = cRules;
// });

// const pScissor = document.querySelector('.scissor');
// pScissor.addEventListener('click', function () {
//   const cComp = getComputerChoose();
//   const cPlayer = pScissor.className;
//   const cRules = getRules(cComp, cPlayer);
//   const imgComp = document.querySelector('img.computer1');
//   imgComp.setAttribute('src', cComp + '.png');

//   const score = document.querySelector('.score');
//   score.innerHTML = cRules;
// });