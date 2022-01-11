const rightIcon = document.querySelector('.topContent .right-icon');
const contentSide = document.querySelector('.content-side');

rightIcon.addEventListener('click',()=>{
    rightIcon.classList.toggle('active');
    contentSide.classList.toggle('active');
})