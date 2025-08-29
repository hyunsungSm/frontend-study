// 1. 자라나라
// const button = document.querySelector('button');
// const img = document.querySelector('img')
// let count = 0;
// button.addEventListener('click', function () {
//   count++;
//   img.style.width = `${count}00px`;
//   img.style.height = `${count}00px`;
// });

// // 2. 크기 조정
// const widthVal = document.querySelector('#widthValue');
// const heightVal = document.querySelector('#heigthValue');
// const buttonEl = document.querySelector('.trans')
// const img2 = document.querySelector('.doong') 

// buttonEl.addEventListener('click', function () {
//   img2.width = widthVal.value;
//   img2.height = heightVal.value;  
// });

// // 랜덤 배경색
// const backGround = document.querySelector('body');

// function changeBgColor() {
//   backGround.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256) + 0}, 
//                                     ${Math.floor(Math.random() * 256) + 0}, 
//                                     ${Math.floor(Math.random() * 256) + 0})`;
// }

// 구슬 추가
// const span = document.querySelector('span');
// const addBtn = document.querySelector('.add');
// const holjakBtn = document.querySelector('.holjak');
// const returnBtn = document.querySelector('.return');

// addBtn.addEventListener('click', function () {
//   console.log(span);
//   span.innerHTML += '<div></div>';
// });

// holjakBtn.addEventListener('click', function () {
// })

// returnBtn.addEventListener('click', function () {
//   span.remove('div');
// });

// 문자 누적하기
// const btnEl = document.querySelector('.nu');
// const inputEl = document.querySelector('input');
// const textArea = document.querySelector('textarea');

// btnEl.addEventListener('click', function () {
//   textArea.textContent += inputEl.value;
//   inputEl.value = '';
// });

// 날씨 확인
// const buttonEl = document.querySelector('.check');
// const inputEl = document.querySelector('.temp');

// buttonEl.addEventListener('click', function () {
//   if (inputEl.value >= 35){
//     alert('폭염경보!!!');
//   } else if (inputEl.value >= 33 && inputEl.value < 35){
//     alert('폭염 주의보!!');
//   } else if (inputEl.value <= -15){
//     alert('한파 경보!!');
//   } else if (inputEl.value <= -12){
//     alert('한파 주의보!!');
//   }
// });

// 스폰지밥 뚱이 징징이
// const optionEl = document.querySelector('.option');
// const selectEl = document.querySelector('#sponge');
// const charImg = document.querySelector('#charImg');

// selectEl.addEventListener('change', function () {
//   console.log(selectEl.value);

//   let imagePath = '';
//   switch (selectEl.value) {
//     case 'spongebob':
//       imagePath = './images/sponge.png';
//       break;
//     case 'doong':
//       imagePath = './images/dung.png';
//       break;
//     case 'jing':
//       imagePath = './images/human.png';
//       break;
//   }
//   charImg.src = imagePath;
// })


// 콤보 세트
// const button = document.querySelector('.button');
// const input = document.querySelector('.input');
// const div = document.querySelector('div');

// const popcornPath = `<img src="./images/popcorn.png">`;
// const cokePath = `<img src="./images/coke.png">`;
// const setPath = popcornPath + cokePath + cokePath;
// button.addEventListener('click', function () {
//   for (let i = 1; i <= input.value; i++){
//     div.innerHTML += setPath + '<br>';
//   }
// });

// 테이블 만들기
// const tableArea = document.querySelector('.table-area');

// function createTable() {
//   const row = prompt('테이블 행의 개수는?');
//   const col = prompt('테이블 열의 개수는?');

//   let num = 1;
//   let html = '<table>';
//   for (let i = 0; i < row; i++){
//     html += '<tr>';
//     for(let j = 0; j < col; j++){
//       html += `<td>${num++}</td>`;
//     }
//     html += '</tr>';
//   }
//   html += '</table>';
//   tableArea.innerHTML = html;
// };

// // 귤농장
// const basketDiv = document.querySelector('.basket');

// function getOrange() {
//   const gram = prompt('몇 그램?');
//   let orangeWeight = 0;
//   let html = '';

//   while (gram - orangeWeight >= 10){
//     orangeWeight += 10;

//     html += '<div>';
//     html += `<p> 귤 ${orangeWeight}g</p>`;
//     html += '<img src="./images/gyul.png" alt="귤>';
//     html += '</div>';
//   }
//   basketDiv.innerHTML = html;
// }

// 
// const spongeImg = document.querySelector('.img-sponge');
// const rangeValue = document.querySelector('#rangeValue');

// function radiusAdd(round) {
//   rangeValue.textContent = round;
//   spongeImg.style.borderRadius = round + 'px';
// }

