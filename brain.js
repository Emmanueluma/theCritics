const menuBtn = document.getElementById('menuBtn');
const stuff = document.getElementById('stuff');
const navIcons = document.querySelectorAll('.navIcons');
const nav = document.querySelector('.nav');
const nav002 = document.querySelector('.nav002');
const blur = document.querySelector('.blur');


window.onscroll = function(){
    if(window.pageYOffset > 100){
        nav.style.backgroundColor = '#000';
        nav002.style.color = '#fff';
        blur.style.filter = 'blur(5px)';
    
    }else {
        nav.style.backgroundColor = 'transparent';
        nav002.style.color = 'transparent';
        blur.style.filter = 'blur(0px)'
    }
}

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
navIcons.forEach(ele => {
    ele.addEventListener('click', e => {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
        stuff.classList.toggle('active');
    })
})


const btnS =document.getElementById('btnS');
const form =  document.getElementById('form')
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    const send = async () =>  {
        const body1 = 
        `Name: ${name1.value} </br>
        Email address: ${email.value} </br>
        Subject: ${subject.value} </br>
        message: ${message.value}
        `;
        /* console.log(name1.value,email.value,subject.value,message.value) */
    e.preventDefault();
    Email.send({
        SecureToken : "d3782a77-1d2c-4f12-8850-c4913226cb27",
        To : "umaemmanuel62@gmail.com",
        From : "umaemmanuel62@gmail.com",
        Subject : "New message for the Critics company",
        Body : body1
    }).then(
      message => {
        const popside = document.querySelector('.popside');
        popside.style.display = 'flex';
        popside.style.transform = 'translateX(-30%)';
        setTimeout(e => {
            popside.style.display = 'none';
        },2000)
    }).catch(data => {
        alert('error')
    });
    }
    send();

    name1.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
})



//const f = '5A786BAF0F2606A3F2469D5746BD39659180';
//const Password = ' d3782a77-1d2c-4f12-8850-c4913226cb27';




const popside = document.querySelector('.popside');
popside.style.display = 'flex';
popside.style.transform = 'translateX(-30%)';
setTimeout(e => {
    popside.style.display = 'none';
},2000)