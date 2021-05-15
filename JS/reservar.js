//pasar moment.js a español
moment.locale('es');

//recupero datos del local storage

//array con deptos que cumplen criterio de capacidad
const deptoCapOK      = JSON.parse(localStorage.getItem('capacidadOK'));
//datos del formulario de reserva
const showCantHuesped = JSON.parse(localStorage.getItem('huespedes'));
const showCheckIn     = JSON.parse(localStorage.getItem('checkin'));
const showCheckOut    = JSON.parse(localStorage.getItem('checkout'));


//DOM

// DOM CANTIDAD DE HUESPESDES
let h6Huesped = document.createElement('h6');
    h6Huesped.textContent = `${showCantHuesped}`;
    h6Huesped.setAttribute('class', 'text-primary text-center')
    document.querySelector('#cantHuespedes').appendChild(h6Huesped)


//DOM CHECK IN
let showCheckInM = moment(showCheckIn , "D MMM YYYY")
let h6CheckIn    = document.createElement('h6');
    h6CheckIn.textContent = `${showCheckInM.format("dddd D [de] MMMM YYYY")}`;
    h6CheckIn.setAttribute('class', 'text-primary text-center')
    document.querySelector('#check-in').appendChild(h6CheckIn)

//DOM CHECK OUT
let showCheckOutM = moment(showCheckOut , "D MMM YYYY")
let h6CheckOut    = document.createElement('h6');
    h6CheckOut.textContent = `${showCheckOutM.format("dddd D [de] MMMM YYYY")}`;
    h6CheckOut.setAttribute('class', 'text-primary text-center')
    document.querySelector('#check-out').appendChild(h6CheckOut)

//DOM DEPARTAMENTOS PARA ALQUILAR
//SOLO APARECERAN LOS DE deptoCapOK, osea, los que su capacidad sea mayor o igual a la cantidad de huespedes
construyeDeptos(deptoCapOK)

// me da el precio y el ID del depto
function obtenerPrecioDepto(card){ 
    const precioDeptos = {
        precio: Number(card.querySelector('.data p span').textContent),
        id: card.querySelector('.reservar').dataset.id
    }
    montoTotal (precioDeptos);
}

//hace la cuenta de diferencia de dias * precio unitario depto
function montoTotal (precioDepto){
    let diff   = showCheckOutM.diff(showCheckInM, "days");
    let total  = diff * precioDepto.precio;
    muestraTotal (total)
} 

// crea el DOM con el total de la reserva
function muestraTotal(total){
    document.querySelector('#totalReserva').innerHTML = ''
    let h6TotalReserva = document.createElement('h6');
        h6TotalReserva.textContent = `El costo total de su estadía  es: $${total}.`;
        h6TotalReserva.setAttribute('class','ml-3')
        document.querySelector('#totalReserva').appendChild(h6TotalReserva)
}

//mostrar precio final y boton de reserva
$('.reservar, .img-wrapper').click((e)=>{
    e.preventDefault()
    const cardDepto = e.target.parentElement.parentElement;
    obtenerPrecioDepto(cardDepto);
    //para que muestre el boton confirmar luego de elegir depto
    $('#totalReserva').append(
        `<a class = 'btn btn-primary my-3 confirmarReserva mr-3'>
        Completar tu Reserva </a>`
    )
    .slideDown('slow')
    $('html, body').animate({
        scrollTop: $("#totalReserva").offset().top},1000)
    showFormConfirmar();
})


//CUADRO DE CONFIRMACION DE RESERVA
function showFormConfirmar(){
    $('.confirmarReserva').click(()=> {
        //vacio lo que ya estaba por si lo apretan  2 veces
        $('#formReserva').html('')
        //formulario de reserva
        $('#formReserva').append(`
        <form>
            <div class="bg-white p-3 rounded">
                <h4 class="text-center mb-3">Confirma tu reserva </h4>
                <div class="row">
                    <div class="col-12 col-md-6 mt-3 ">
                        <h5 class="text-center">Datos de contacto</h5>
                        <label for="name">Nombre*</label>
                        <input type="text" class="form-control form-control-sm" id="nombre" placeholder="Roy" required >
                        <label for="apellido">Apellido*</label>
                        <input type="text" class="form-control form-control-sm" id="apellido" placeholder="Mustang" required >
                        <label for="tel">Teléfono*</label>
                        <input type="number" class="form-control form-control-sm" id="tel" placeholder="1198765432" required >
                        <label for="email">Correo Electrónico*</label>
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="coronelRoy@alquimista.com" required >     
                    </div>
                    <div class="col-12 col-md-6 mt-3">
                        <h5  class="text-center">Datos de Pago</h5>
                        <label for="nombreTarjeta">Nombre (como aparece en la tarjeta)*</label>
                        <input type="text" class="form-control form-control-sm" id="nombreTarjeta" placeholder="Mustang Roy" required >
                        <label for="cardNumber">Número de Tarjeta*</label>
                        <input type="tel" class="form-control form-control-sm mb-2" id="cardNumber" placeholder="4567 9875 3215 9875" maxlength="19" pattern="\d*"required >
                        <label for="">Fecha vencimiento</label>
                        <div class="d-flex">
                            <input type="number" class="form-control form-control-sm mb-2" placeholder="MM" name="" required="" id='mes' min="1" max="12">
                            <input type="number" class="form-control form-control-sm mb-2" placeholder="YY" name="" required="" id='anio' min="2021">
                        </div>
                        <label for="codSeg">CVV*</label>
                        <input type="number" class="form-control form-control-sm" id="codSeg" placeholder="###" min="000" max="999" required >
                    </div>
                </div>
                <button id='confirmar' type="submit" class="btn btn-primary confirmarReserva mr-3" data-toggle="modal" data-target="#OKReserva">
                    Confirmar Reserva
                </button>
            </div>
        </form>
        `).fadeIn(1200)
        $('html, body').animate({
            scrollTop: $("#formReserva").offset().top},1000)
        finDeReserva();
    })
}
function finDeReserva(){
    $('#confirmar').click((e)=>{
        e.preventDefault()
        let nombre        = document.querySelector('#nombre').value;
        let apellido      = document.querySelector('#apellido').value;
        let tel           = document.querySelector('#tel').value;
        let email         = document.querySelector('#email').value;
        let nombreTarjeta = document.querySelector('#nombreTarjeta').value;
        let cardNumber    = document.querySelector('#cardNumber').value;
        let mes           = document.querySelector('#mes').value;
        let anio          = document.querySelector('#anio').value;
        let codSeg        = document.querySelector('#codSeg').value;
        if(nombre && apellido && tel && email && nombreTarjeta && cardNumber && mes && anio && codSeg){
            $('#formReserva').append(
                `
                <div class="modal fade" id="OKReserva" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header text-primary text-center">
                                <h5 class="modal-title" id="exampleModalLabel">Felicitaciones</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p class="my-3">Ha confirmado su reserva con nosotros. En la brevedad nos contactaremos con ud.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary px-3" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
                `
            )
        } else {
            alert('Por favor complete todo los datos del formulario para finalizar su reserva')
        }
    })
}
