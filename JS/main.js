//VARIABLES
//let deptoNumero = Number(prompt("que departamento desea?"));
//let cantHuesped = Number(prompt("cuantas personas se van a hospedar"));

//defino constructor de departamentos

class Depto {
    constructor(numero, personas, precio, disponible){
        this.numero     = numero;
        this.personas   = personas;
        this.precio     = precio;
        this.disponible = disponible;
    }
    
    capacidad(){
        if (cantHuesped > this.personas){
            return false
        } else {
            let diferencia = this.personas - cantHuesped;
            if (diferencia == 0){
                console.log("Cantidad de huespedes igual a la capacidad del depto")
            } else {
                console.log("queda lugar para " + diferencia + " huesped/es")
            }
            return true
        }
    }
}

//objetos departamentos
const departamentos = [];
departamentos.push (new Depto (1, 2, 1500, true));
departamentos.push (new Depto (2, 2, 1500, true));
departamentos.push (new Depto (3, 3, 2500, true));
departamentos.push (new Depto (4, 4, 3000, true));
departamentos.push (new Depto (5, 6, 3500, true));

localStorage.setItem("departamentos", JSON.stringify(departamentos));

//RESERVAR

function reservar (){
    for (i=0; i<departamentos.length; i++){
        if(deptoNumero == departamentos[i].numero){
            if (departamentos[i].capacidad() == false){
                alert("La cantidad de huespedes supera a la capacidad del depto. Por favor elija uno mas grande");
            } else {
                if (deptoNumero == departamentos[i].numero){
                    if(departamentos[i].disponible == false){
                        alert("Este Depto no esta disponible. Por favor elija otro");
                    } else {
                        departamentos[i].disponible = false;
                        alert("Felicitaciones! ya tiene su reserva");
                    } 
                }
            }
        }
    }
}

//reservar();

//DOM DEPARTAMENTOS


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
        li3.textContent=`Precio por noche: $${dto.precio}`;
    
    let alink   = document.createElement('a');
        divCard.appendChild(alink);
        alink.setAttribute('href','#');
        alink.setAttribute('class','btn btn-primary');
        alink.textContent="RESERVAR"
    
    document.querySelector("#deptos").appendChild(article)
})


//Mostrar estado de los departamentos post reserva
/* for (i=0; i<departamentos.length; i++){
    if(departamentos[i].disponible){
        console.log("Departamento " + departamentos[i].numero + " disponible")
    } else {
        console.log("Departamento " + departamentos[i].numero + " ocupado")
    }
} */
