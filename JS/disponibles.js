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
let h6CheckIn = document.createElement('h6');
h6CheckIn.textContent = `${showCheckIn}`;
document.querySelector('#check-in').appendChild(h6CheckIn)

//DOM CHECK OUT
let h6CheckOut = document.createElement('h6');
h6CheckOut.textContent = `${showCheckOut}`;
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
    
    document.querySelector("#deptos").appendChild(article)
})

//calculo de monto a pagar

const deptosDisponibles = document.querySelector('#deptos');
deptosDisponibles.addEventListener('click', elijoDepto);

function elijoDepto(e){
    e.preventDefault();
    if(e.target.classList.contains('reservar')){
        const cardDepto = e.target.parentElement
        let precio = cardDepto.querySelector('ul li span').textContent
        console.log(precio)
        return precio
    }
}


/* function montoTotal (showCheckIn, showCheckOut, precio){
    let estadia = Number(showCheckOut) - Number(showCheckIn)
    console.log(estadia)
    let total = estadia * precio
    return total
}  */
