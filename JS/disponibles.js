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
let showCheckInM = moment(showCheckIn , "D MMM YYYY")
let h6CheckIn = document.createElement('h6');
h6CheckIn.textContent = `${showCheckInM.format("dddd D [de] MMMM YYYY")}`;
document.querySelector('#check-in').appendChild(h6CheckIn)

//DOM CHECK OUT
let showCheckOutM = moment(showCheckOut , "D MMM YYYY")
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
    
    document.querySelector("#deptos2").appendChild(article)
})

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

// crea el DOM con el total de la reserva
function muestraTotal(total){
    document.querySelector('#totalReserva').innerHTML = ''
    let h5TotalReserva = document.createElement('h5');
    h5TotalReserva.textContent = `El costo total de su estadia es: $${total}.`;
    document.querySelector('#totalReserva').appendChild(h5TotalReserva)
}

//mostrar precio final y boton de reserva
$('.reservar').click((e)=>{
    e.preventDefault()
    const cardDepto = e.target.parentElement.parentElement.parentElement;
    obtenerPrecioDepto(cardDepto);
    //para que muestre el boton confirmar luego de elegir depto
    $('#totalReserva').append(
        `<a class = 'btn btn-primary my-3 confirmarReserva'>
        CONFIRMAR
        </a>`
    )
    .slideDown('slow')
    $('html, body').animate({
        scrollTop: $("#totalReserva").offset().top},
        1000)
    showFormConfirmar();
})

//CUADRO DE CONFIRMACION DE RESERVA
function showFormConfirmar(){
    $('.confirmarReserva').click(()=> {
        //vacio lo que ya estaba por si lo apretan  2 veces
        $('#formReserva').html('')
        //formulario de reserva
        $('#formReserva').append(`
        <h4>Confirma tu reserva </h4>
        <form>
            <div class="row">
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
            <button id='lalala' type="submit" class="btn btn-primary" data-toggle="modal" data-target="#OKReserva">
                Confirmar Reserva
            </button>
        </form>
        `).fadeIn(1200)
        $('html, body').animate({
            scrollTop: $("#formReserva").offset().top},
            1000)
        finalfinal();
    })
}
function finalfinal(){
    $('#lalala').click(()=>{
        $('#formReserva').append(
            `
            <div class="modal fade" id="OKReserva" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Felicitaciones</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Ha confirmado su reserva con nosotros. En la brevedad nos contactaremos con ud.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    })
}
