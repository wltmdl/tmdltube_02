const rightIcon = document.querySelector('.topContent .right-icon');
const contentSide = document.querySelector('.side-tab');
const contentMiniSide = document.querySelector('.side-mini-tab');
const contentMain = document.querySelector('.content-main');


rightIcon.addEventListener('click',()=>{

    rightIcon.classList.toggle('active');
    contentSide.classList.toggle('active');
    contentMain.classList.toggle('active');
    //contentMiniSide.classList.toggle('active');

   
})

