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


// Fecha minima en fecha de llegada → hoy;
let today = moment().format("YYYY-MM-D");
console.log(today)
/* document.querySelector('#checkin').setAttribute('min', today) */

// tomo valores de checkin
$('.datepickerIN').pickadate({
    min: new Date(),
    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
    today: 'hoy',
    clear: 'borrar',
    formatSubmit: 'yyyy/mm/dd'
})


let checkIn = document.querySelector('#checkin');
checkIn.addEventListener('input',guardaCheckIn);


function guardaCheckIn(e){
    let checkInValue =e.target.value;
    localStorage.setItem("checkin", JSON.stringify(checkInValue));
    //uso el checkInvalue para darle un minimo a la fecha de checkout
    document.querySelector('#checkout').setAttribute('min', checkInValue)
}

// tomo valores de checkout
const checkOut = document.querySelector('#checkout');
checkOut.addEventListener('input',guardaCheckOut);

function guardaCheckOut (e) {
    const checkOutValue = e.target.value;
    localStorage.setItem("checkout", JSON.stringify(checkOutValue));
}

