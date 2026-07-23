const countries = new Map();
countries.set('brasil', 'br');
countries.set('australia', 'au');
countries.set('bahamas', 'bs');
countries.set('USA', 'us');
countries.set('antarctica', 'aq');

const lis = document.querySelectorAll('ul>li');
const flag = document.querySelector('.flag')
console.log(lis);
lis.forEach((li)=>{
  li.addEventListener('click', ()=>{
    flag.textContent=li.textContent;
    flag.style.backgroundImage=`url(https://flagcdn.com/256x192/${countries.get(li.textContent)}.png)`;
    lis.forEach((li)=>{
      li.classList.remove('active');
    })
    li.classList.add('active');
  })
})