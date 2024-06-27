let stars = document.getElementById('stars');
let Moon = document.getElementById('Moon');
let BTS = document.getElementById('BTS');
let Clouds = document.getElementById('Clouds');
let Kamar = document.querySelector('.Kamar');
window.onscroll = function(){
    let value = scrollY;
    stars.style.top = -value + 'px';
    Moon.style.top = value * 3 + 'px';
    BTS.style.top = value * 4 + 'px';
    Clouds.style.top = value + 'px';
    Kamar.style.fontSize = value + 'px'; 
     if(scrollY >= 236){
        Kamar.style.fontSize = 236 + 'px';
        Kamar.style.postin = 'fixed';
}
}