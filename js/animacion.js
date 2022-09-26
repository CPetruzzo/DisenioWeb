window.addEventListener('scroll', function(){
    let animacion = document.getElementById('imgBox');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoPantalla=window.innerHeight/2;

    if(posicionObj1<tamañoPantalla){
        animacion.style.animation('animacion 1s ease-out')
    }
})