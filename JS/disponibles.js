moment.locale('es');

//recupero datos del local storage

const deptoCapOK      = JSON.parse(localStorage.getItem('capacidadOK'));
const showCantHuesped = JSON.parse(localStorage.getItem('huespedes'));
const showCheckIn     = JSON.parse(localStorage.getItem('checkin'));
const showCheckOut    = JSON.parse(localStorage.getItem('checkout'));

// DOM CANTIDAD DE HUESPESDES
let h5Huesped = document.createElement('h5');
h5Huesped.textContent = `${showCantHuesped}`;
document.querySelector('#cantHuespedes').appendChild(h5Huesped)


//DOM CHECK IN
let showCheckInM = moment(showCheckIn , "YYYY/MM/DD")
let h6CheckIn = document.createElement('h6');
h6CheckIn.textContent = `${showCheckInM.format("dddd D [de] MMMM YYYY")}`;
document.querySelector('#check-in').appendChild(h6CheckIn)

//DOM CHECK OUT
let showCheckOutM = moment(showCheckOut , "YYYY/MM/DD")
let h6CheckOut = document.createElement('h6');
h6CheckOut.textContent = `${showCheckOutM.format("dddd D [de] MMMM YYYY")}`;
document.querySelector('#check-out').appendChild(h6CheckOut)

//DOM DEPARTAMENTOS PARA ALQUILAR

deptoCapOK.forEach( dto => {
    let article = document.createElement('article');
    article.setAttribute('class','col mb-4')
    article.setAttribute('data-id', `${dto.numero}`)
    
    let div     = document.createElement('div');
    article.appendChild(div)
    div.setAttribute('class','card h-100')
    
    let img     = document.createElement('img')
    div.appendChild(img);
    img.setAttribute('src',`https://via.placeholder.com/300x250?text=depto${dto.numero}`)
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
    alink.setAttribute('href','#');
    alink.setAttribute('class','btn btn-primary reservar');
    alink.textContent="RESERVAR"
    alink.setAttribute('data-id', `${dto.numero}`)
    
    document.querySelector("#deptos").appendChild(article)
})

//calculo de monto a pagar

const deptosDisponibles = document.querySelector('#deptos');
deptosDisponibles.addEventListener('click', elijoDepto);

// veo que boton toque
function elijoDepto(e){
    e.preventDefault();
    if(e.target.classList.contains('reservar')){
        const cardDepto = e.target.parentElement.parentElement.parentElement;
        obtenerPrecioDepto(cardDepto);
    }
    //para que despues de dado el evento de tocar el boton reservar en un depto se muestre el boton de confirmar que te lleva al formulario
    showConfirmar();
}


// me da el precio y el ID del depto (por ahora el ID no lo uso)
function obtenerPrecioDepto(card){ 
    const precioDeptos = {
        precio: Number(card.querySelector('div ul li span').textContent),
        id: card.querySelector('a').dataset.id
    }
    montoTotal (precioDeptos);
}

//hace la cuenta de diferencia de dias * precio unitario depto
function montoTotal (precioDepto){
    let diff          = showCheckOutM.diff(showCheckInM, "days");
    let total         = diff * precioDepto.precio;
    muestraTotal (total)
} 

// muestra el total de la reserva
function muestraTotal(total){
    document.querySelector('#totalReserva').innerHTML = ''
    let h5TotalReserva = document.createElement('h5');
    h5TotalReserva.textContent = `El costo total de su estadia es: $${total}.`;
    document.querySelector('#totalReserva').appendChild(h5TotalReserva)
}

//muestro boton de confirmar reserva
function showConfirmar(){
    let confirmar = document.createElement('a');
    confirmar.setAttribute('class', 'btn btn-primary my-3 confirmarReserva');
    confirmar.textContent = "CONFIRMAR"
    document.querySelector('#totalReserva').appendChild(confirmar)
    //formulario de confirmacion
    showFormConfirmar();
}
//CUADRO DE CONFIRMACION DE RESERVA
function showFormConfirmar(){
    $('.confirmarReserva').click(()=> {
        //vacio lo que ya estaba por si lo apretan  2 veces
        $('#formReserva').html('')
        //formulario de reserva
        $('#formReserva').append(`
        <h4>Confirma tu reserva </h4>
        <form action="#">
        <div class="row" >
            <div class="col col-md-6">
                <h5>Datos de contacto</h5>
                <label for="name">Nombre*</label>
                <input type="text" class="form-control form-control-sm" id="nombre" placeholder="Roy" required >
                <label for="apellido">Apellido*</label>
                <input type="text" class="form-control form-control-sm" id="apellido" placeholder="Mustang" required >
                <label for="tel">Telefono*</label>
                <input type="number" class="form-control form-control-sm" id="tel" placeholder="1198765432" required >
                <label for="email">Correo Electronico*</label>
                <input type="email" class="form-control form-control-sm" id="email" placeholder="coronelRoy@alquimista.com" required >     
            </div>
            <div class="col col-md-6">
                <h5>Datos de Pago</h5>
                <label for="nameTarjeta">Nombre (como aparece en la tarjeta)*</label>
                <input type="text" class="form-control form-control-sm" id="nombreTarjeta" placeholder="Roy" required >
                <label for="cardNumber">Numero de Tarjeta*</label>
                <input type="number" class="form-control form-control-sm mb-2" id="cardNumber" placeholder="4567 9875 3215 9875" required >
                <label for="">Fecha vencimiento</label>
                <div class="row">
                    <input type="number" class="form-control form-control-sm col-6 mb-2" placeholder="MM" name="" required="">
                    <input type="number" class="form-control form-control-sm col-6 mb-2" placeholder="YY" name="" required="">
                </div>
                <label for="codSeg">CVV*</label>
                <input type="number" class="form-control form-control-sm" id="codSeg" placeholder="###" required >
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Confirmar Reserva</button>
    </form> 
        `)
    })
}
