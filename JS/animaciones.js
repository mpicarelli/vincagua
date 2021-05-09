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
    
    //volver arriba apretando el inicio en nav
    $('nav li .inicio').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#arriba").offset().top},
            1000)
    })
    
    $('nav li .inicio').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#arriba").offset().top},
            1000)
    })
    
    $('.reservar').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#arriba").offset().top},
            1000)
    })
    