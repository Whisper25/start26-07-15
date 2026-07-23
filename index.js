// document.getElementById('unique').style.backgroundColor='blue';
const unique = document.getElementById('unique');
unique.style.backgroundColor='black';
unique.style.color='white';

const btns = document.getElementsByClassName('btn');
for (const btn of btns) {
  btn.style.display='block';
  btn.addEventListener('click', ()=>{
    btn.style.fontSize='32px'
  })
}

const h2Block = document.querySelector('#block>h2');
h2Block.style.color='white';
const btnsBlock = document.querySelectorAll('#block>.btn');
btnsBlock.forEach(element => {
  element.style.backgroundColor='yellow';
});
for (const btn of btnsBlock) {
  btn.style.fontSize='16px';
}
const olLis = document.querySelectorAll('#block>ol>li');
olLis.forEach(element => {
  element.addEventListener('click', ()=>{
    element.textContent='wow';
  })
});
document.querySelector('#block>ol>li:last-child').style.backgroundColor='pink';
document.querySelector('#block>ol>li:first-child').style.backgroundColor='pink';