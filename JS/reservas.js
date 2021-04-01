//VARIABLES

let deptoNumero = Number(prompt("que departamento desea?"));
let cantHuesped = Number(prompt("cuantas personas se van a hospedar"));

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
    disponibilidad(){
        if (deptoNumero == this.numero){
            if(this.disponible == false){
                alert("Este Depto no esta disponible. Por favor elija otro");
            } else {
                this.disponible = false;
                alert("Felicitaciones! ya tiene su reserva");
            } 
        }
    }
}

//objetos departamentos
const departamentos = [];
departamentos.push (new Depto (1, 2, 1500, false));
departamentos.push (new Depto (2, 2, 1500, false));
departamentos.push (new Depto (3, 3, 2500, true));
departamentos.push (new Depto (4, 4, 3000, true));
departamentos.push (new Depto (5, 5, 3500, true));


//logica de reservas

function reservar (deptoNumero){
    for (i=0; i<departamentos.length; i++){
        if(deptoNumero == departamentos[i].numero){
            if (departamentos[i].capacidad() == false){
                alert("La cantidad de huespedes supera a la capacidad del depto. Por favor elija uno mas grande");
            } else {
                departamentos[i].disponibilidad();
            }
        }
    }
}

reservar(deptoNumero);




//Mostrar estado de los departamentos post reserva
for (i=0; i<departamentos.length; i++){
    if(departamentos[i].disponible){
        console.log("Departamento " + departamentos[i].numero + " disponible")
    } else {
        console.log("Departamento " + departamentos[i].numero + " ocupado")
    }
}
