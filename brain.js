const menuBtn = document.getElementById('menuBtn');
const stuff = document.getElementById('stuff')

menuBtn.addEventListener('click', e => {
    if(menuBtn.classList.contains('fa-bars')){
        menuBtn.style.transform = 'rotate(0deg)';
        menuBtn.style.transform = 'rotate(180deg)';
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
        stuff.classList.toggle('active');

    }else if (menuBtn.classList.contains('fa-times')){
        menuBtn.style.transform = 'rotate(360deg)';
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
        stuff.classList.toggle('active');
    }
})