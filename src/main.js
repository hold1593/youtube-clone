const moreBtn = document.querySelector('.video-discription .info .moreBtn');
const title = document.querySelector('.video-discription .info .title');

moreBtn.addEventListener('click', () =>{
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});


const upBtn = document.querySelector('.video-discription .action i.fa-thumbs-up');
const downBtn = document.querySelector('.video-discription .action i.fa-thumbs-down');

upBtn.addEventListener('click', () => {
  upBtn.classList.toggle('active');
});

downBtn.addEventListener('click', () => {
  downBtn.classList.toggle('active');
});