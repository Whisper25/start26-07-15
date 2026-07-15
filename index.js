const radius = "7px";
const color = 'green';
const h1 = document.getElementById("title");
h1.textContent = "Привіт, DOM!";
h1.style.textAlign = "center";
h1.style.color = color;
const slogan = document.getElementById("slogan");
slogan.textContent = "Я щойно змінив цей абзац за допомогою JavaScript.";
slogan.style.textAlign = "center";
const blocks = document.getElementsByClassName("block");
for (const block of blocks) {
  block.style.borderRadius = radius;
  block.addEventListener('click', ()=>{
    block.style.backgroundColor='gray';
  })
}

console.log(blocks);
const articleTitle = document.getElementById("article-title");
articleTitle.textContent = "Нова назва";
articleTitle.addEventListener('click', ()=>{
    articleTitle.style.color=color;
})
const image = document.getElementById("image");
image.src = "./something.jpg";
image.style.width = "100%";
image.style.borderRadius = radius;

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const footer = document.getElementById("footer");
footer.style.textAlign = "center";

image.addEventListener('click', ()=>{
    image.src = image.src==="http://127.0.0.1:5500/something.jpg" || image.src==='./something.jpg' ? './something-word.webp' : "./something.jpg";
    console.log(image.src);
})