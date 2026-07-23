const btns = document.querySelectorAll('button');
for (const btn of btns) {
btn.classList.add('btn');
btn.addEventListener('mouseover', ()=>{
  btn.classList.add('active')
})
btn.addEventListener('mouseout', ()=>{
  btn.classList.remove('active');
})
btn.addEventListener('click', ()=>{
  btn.classList.toggle('shadow');
})
}
const block = document.getElementById('block');
block.addEventListener('click', ()=>{
  block.classList.toggle('big-text');
})
const clickbtn =document.querySelector('#block>button');
const picture =document.querySelector('#block>img');
clickbtn.addEventListener('click',()=>{
  picture.classList.toggle('hide');
  clickbtn.textContent=clickbtn.textContent === 'show picture' ? 'hide picture' : 'show picture';
})

const btnTheme = document.querySelector('button:first-of-type');
btnTheme.addEventListener('click', ()=>{
  btnTheme.textContent=btnTheme.textContent==='light'?'dark' : 'light';
  document.body.classList.toggle('dark');
})