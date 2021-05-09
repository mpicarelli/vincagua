//pasar moment.js a español
moment.locale('es');

//recupero datos del local storage

//array con deptos que cumplen criterio de capacidad
const deptoCapOK      = JSON.parse(localStorage.getItem('capacidadOK'));
//datos del formulario de reserva
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
deptoCapOK.forEach( dto =>{
        
    //articulo con cada tarjeta
    let article = document.createElement('article');
    article.setAttribute('class' , 'd-flex flex-column col-12 col-md-6 col-lg-4 mb-4');
        //link de imagen
        let aimg = document.createElement('a');
        aimg.setAttribute('href', '#totalReserva');
        aimg.setAttribute('class', 'img-wrapper');
        article.appendChild(aimg);
    
            let img = document.createElement('img');
            img.setAttribute('src',`../assets/deptos/depto${dto.numero}.jpg`);
            img.setAttribute('alt',`foto del departamento ${dto.numero}`)
            aimg.appendChild(img);

        //div con toda la data
        let divData = document.createElement('div');
        divData.setAttribute('class', 'data');
        article.appendChild(divData);
            //h3 con nombre de cada depto
            let htres = document.createElement('h3');
            htres.setAttribute('class','nombre');
            divData.appendChild(htres);

                let span = document.createElement('span');
                span.textContent = `${dto.nombre}`
                htres.appendChild(span)

            //lista no ordenada con los datos del depto
            let ul = document.createElement('ul');
            ul.setAttribute('class', 'fa-ul');
            divData.appendChild(ul);
                //item 1 de la lista
                let li1 = document.createElement('li');
                li1.setAttribute('class','mb-2')
                li1.textContent = `Ocupantes: ${dto.ocupantes}`
                ul.appendChild(li1);

                    let spanli1 = document.createElement('span')
                    spanli1.setAttribute('class', 'fa-li');
                    li1.appendChild(spanli1);

                        let ili1 = document.createElement('i');
                        ili1.setAttribute('class', 'fas fa-user-friends');
                        spanli1.appendChild(ili1);
                //item 2 de la lista
                let li2 = document.createElement('li');
                li2.setAttribute('class','mb-2')
                li2.textContent = `Superficie: ${dto.superficie} m2`
                ul.appendChild(li2);

                    let spanli2 = document.createElement('span')
                    spanli2.setAttribute('class', 'fa-li');
                    li2.appendChild(spanli2);

                        let ili2 = document.createElement('i');
                        ili2.setAttribute('class', 'fas fa-expand-arrows-alt');
                        spanli2.appendChild(ili2);
                //item 3 de la lista
                let li3 = document.createElement('li');
                li3.setAttribute('class','mb-2')
                li3.textContent = `Ambientes: ${dto.ambientes}`
                ul.appendChild(li3);

                    let spanli3 = document.createElement('span')
                    spanli3.setAttribute('class', 'fa-li');
                    li3.appendChild(spanli3);

                        let ili3 = document.createElement('i');
                        ili3.setAttribute('class', 'fas fa-door-open');
                        spanli3.appendChild(ili3);
                //item 4 de la lista
                let li4 = document.createElement('li');
                li4.setAttribute('class','mb-2')
                li4.textContent = `Camas: ${dto.camas}`
                ul.appendChild(li4);

                    let spanli4 = document.createElement('span')
                    spanli4.setAttribute('class', 'fa-li');
                    li4.appendChild(spanli4);

                        let ili4 = document.createElement('i');
                        ili4.setAttribute('class', 'fas fa-bed');
                        spanli4.appendChild(ili4);
            
                //div inferior con precio y boton reserva
                let divFoot = document.createElement('div');    
                divFoot.setAttribute('class', 'd-flex justify-content-between')
                divData.appendChild(divFoot)    

                    let pFoot = document.createElement('p');
                    pFoot.textContent = `Precio: $ `
                    divFoot.appendChild(pFoot);
                    
                        let iprecio = document.createElement('i');
                        iprecio.setAttribute('class', 'fas fa-money-bill-wave px-2');
                        pFoot.prepend(iprecio);

                        let spanPrecio = document.createElement('span');
                        spanPrecio.textContent = `${dto.precio}`
                        pFoot.appendChild(spanPrecio);

                    //boton reservar
                    let dtoBoton = document.createElement('a');
                    dtoBoton.setAttribute('href','#arriba');
                    dtoBoton.setAttribute('class', 'btn btn-primary reservar mb-0');
                    dtoBoton.textContent = "Escoger este departamento"
                    dtoBoton.setAttribute('data-id', `${dto.numero}`)
                    divFoot.appendChild(dtoBoton);

    document.querySelector("#deptos").appendChild(article)
})

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
$('.reservar, .img-wrapper').click((e)=>{
    e.preventDefault()
    const cardDepto = e.target.parentElement.parentElement;
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
