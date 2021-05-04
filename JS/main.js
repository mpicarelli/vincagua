//defino constructor de departamentos
class Depto {
    constructor(numero, personas, precio){
        this.numero     = numero;
        this.personas   = personas;
        this.precio     = precio;
    }
}

//objetos departamentos
const departamentos = [];
departamentos.push (new Depto (1, 2, 1500));
departamentos.push (new Depto (2, 2, 1500));
departamentos.push (new Depto (3, 3, 2500));
departamentos.push (new Depto (4, 4, 3000));
departamentos.push (new Depto (5, 5, 3500));

//guardo array de departamentos en limpio por si los tengo que usar.
localStorage.setItem("departamentos", JSON.stringify(departamentos));

//DOM DEPARTAMENTOS

//armo tarjetas con cada departamento:
departamentos.forEach( dto => {
    let article = document.createElement('article');
        article.setAttribute('class','col mb-4')
        
        let div     = document.createElement('div');
        article.appendChild(div)
        div.setAttribute('class','card h-100')
        
        let img     = document.createElement('img')
        div.appendChild(img);
        img.setAttribute('src',`../assets/deptos/depto${dto.numero}.jpg`)
        img.setAttribute('alt','foto del departamento ${dto.numero}')
        img.setAttribute('class','card-img-top')
        
        let divCard = document.createElement('div');
        div.appendChild(divCard);
        divCard.setAttribute('class','card-body')
        
        let h5      = document.createElement('h5');
        divCard.appendChild(h5);
        h5.setAttribute('class','card-title');
        h5.textContent= 'DEPARTAMENTO';
        
        let ul      = document.createElement('ul'); 
        divCard.appendChild(ul);
        ul.setAttribute('class','card-text');
        
        let li1     = document.createElement('li');
        ul.appendChild(li1);
        li1.textContent=`Departamento ${dto.numero}`;
        
        let li2     = document.createElement('li');
        ul.appendChild(li2);
        li2.textContent=`Ocupantes: ${dto.personas}`;
        
        let li3     = document.createElement('li');
        ul.appendChild(li3);
        li3.textContent=`Precio por noche: $`;
        let spanPrecio = document.createElement('span')
        li3.appendChild(spanPrecio);
        spanPrecio.textContent = `${dto.precio}`
        
        let alink   = document.createElement('a');
        divCard.appendChild(alink);
        alink.setAttribute('href','#arriba');
        alink.setAttribute('class','btn btn-primary reservar');
        alink.textContent="RESERVAR"
        alink.setAttribute('data-id', `${dto.numero}`)
        
        document.querySelector("#deptos").appendChild(article)
})

//tomo valor del select huespedes
const cantHuesped = document.querySelector('#huespedes')
cantHuesped.addEventListener('input',verifCapacidad)

function verifCapacidad (e){
    //armo un array con los deptos que se pueden ocupar y lo guardo para usar en la otra pagina
    const capacidadOK = departamentos.filter(Depto => Depto.personas >= e.target.value);
    const huespedElegidos = e.target.value;
    localStorage.setItem("capacidadOK", JSON.stringify(capacidadOK));
    localStorage.setItem("huespedes",JSON.stringify(huespedElegidos));
}

//USO DE PICKDATE.JS 

//date picker de entrada

let from_$input = $('.datepickerIN').pickadate({
    //TRADUCCION A ESPAÑOL
    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
    today: 'hoy',
    clear: 'borrar',
    formatSubmit: 'yyyy/mm/dd',
    //FECHA MINIMA DE LLEGADA = HOY
    min: new Date(),
}), from_picker = from_$input.pickadate('picker')


//date picker de salida

let to_$input = $('.datepickerOUT').pickadate({
    //TRADUCCION A ESPAÑOL
    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
    today: 'hoy',
    clear: 'borrar',
    formatSubmit: 'yyyy/mm/dd'
}), to_picker = to_$input.pickadate('picker')

// verificar si ya hay fecha de inicio o fin
if (from_picker.get('value') ) {
    to_picker.set('min', from_picker.get('select'))
}
if (to_picker.get('value') ) {
    from_picker.set('max', to_picker.get('select'))
}

//Cuando ya se selecciono, actualiza los limites de inicio y fin.
from_picker.on('set', function(e) {
    if (e.select ) {
        to_picker.set('min', from_picker.get('select'))    
    } else if ( 'clear' in e ) {
        to_picker.set('min', false)
    }
})

to_picker.on('set', function(e) {
    if (e.select ) {
        from_picker.set('max', to_picker.get('select'))
    } else if ( 'clear' in e ) {
        from_picker.set('max', false)
    }
})

//GUARDO LOS VALORES DE CHECK IN Y CHECK OUT EN LOCAL STORAGE PARA USAR EN LA SIGUIENTE PAGINA
$('.datepickerIN').change(function(e){
    let checkInValue =e.target.value;
    localStorage.setItem("checkin", JSON.stringify(checkInValue));
})
    
$('.datepickerOUT').change(function(e){
    let checkOutValue =e.target.value;
    localStorage.setItem("checkout", JSON.stringify(checkOutValue));
})




//animaciones
//a departaentos
$('nav li .departamentos').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#deptos").offset().top - 240},
        1000, function(){
            $('#deptos article').fadeIn(1000)
            $('.depto-title').fadeIn(1000)

        })
})

//a servicios
$('nav li .servicios').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#servicios").offset().top - 190},
        1000)
        .fadeIn(1000)
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


//Ajax

let HTMLCard = ""
let HTMLError = ""
let contenidoJSON = ""

function cargoCardsTestimonial() {
    $.ajax({
        url: 'https://randomuser.me/api/?results=4&nat=us,fr,br',
        dataType: 'json',
        success: function(data) {
            contenidoJSON = data.results
            for (let i in contenidoJSON) {
                HTMLCard += `  <div class="card mr-2">
                                <img class="card-img-top img-testimonial" src="${contenidoJSON[i].picture.large}">
                                    <div class="card-body text-center">
                                        <p class="card-text-testimonial">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a doloremque quidem nemo fugiat nulla deserunt ducimus porro, pariatur vel voluptates illo, modi debitis aperiam sit beatae dolor! Earum, in."</p>
                                        <span class="card-i-testimonial"><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span></span>
                                        <h5 class="card-title-testimonial">${contenidoJSON[i].name.first} ${contenidoJSON[i].name.last}</h5>
                                        <h6 class="card-city-testimonial">${contenidoJSON[i].location.city}, ${contenidoJSON[i].location.country}</h6>
                                    </div>
                                </div>`
            $("#testimonial-guests").html(HTMLCard)            
            };
        }
    })
}
cargoCardsTestimonial()