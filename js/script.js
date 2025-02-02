let i = 0;
let h2 = document.querySelector('h2');
let aqua = document.querySelector('.aqua');
let body = document.querySelector('.preloader-container');
let number = document.querySelector('.number');
let percentBar = document.querySelector('.percent-bar');


let interval = setInterval(()=>{
    number.innerHTML = i + '<span>%</span>';
    percentBar.style.width = i + '%';
    i++
    if(i == 101){
        clearInterval(interval)
        setTimeout(()=>{
            aqua.style.opacity = '0';
            aqua.style.visibility = 'hidden';
            body.style.background = '#000';
            h2.style.opacity = '1';
            h2.style.visibility = 'visible';
        })
    }
},80)

let icon = document.getElementById('icon');
icon.onclick = () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = "img/sun.png";
    }else{
        icon.src = "img/moon.png";
    }
}

/*  typing effect  */
let typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
      
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    },10000);
});

document.getElementById("year").textContent = new Date().getFullYear();



