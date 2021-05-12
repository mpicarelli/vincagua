//animaciones
//a departaentos
$('nav li .departamentos').click(function(e){
    e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#deptos").offset().top - 240},
            1000)
    })
    
//a servicios
$('nav li .servicios').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#servicios").offset().top - 190},
        1000)
})

//a about us
$('nav li .about').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 190},
        500)
})

//volver arriba
$('.reservar, nav li .inicio, nav li img, .footer1 a img').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#arriba").offset().top},
            1000)
    })

// click en reservar o en la foto y te lleva al form de reserva
$('#deptos').on('click', '.reservar, .img-wrapper', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#arriba").offset().top},
        1500)
})

//que no se me vaya arriba al apretar los links del footer
$('.footer1 a li').click(function(e){
e.preventDefault()
})