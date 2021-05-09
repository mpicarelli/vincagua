//DOM DEPARTAMENTOS
$(function(){
    $.ajax('../JSON/deptos.json', {
        success: function(data){
        //funcion para armar DOM deptos
        construyeDeptos(data.JSONdepto);
        //funcion para escuchar la input de huespedes
        tomaCapacidad(data.JSONdepto);
        }
    })
});


//tomo valor del input huespedes
function tomaCapacidad(depto){
    const cantHuesped = document.querySelector('#huespedes')
    cantHuesped.addEventListener('input',(e)=>{
        //armo un array con los deptos que se pueden ocupar y lo guardo para usar en la otra pagina
        const capacidadOK = depto.filter(dto => dto.ocupantes >= e.target.value);
        const huespedElegidos = e.target.value;
        localStorage.setItem("capacidadOK", JSON.stringify(capacidadOK));
        localStorage.setItem("huespedes",JSON.stringify(huespedElegidos));
    })
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

document.querySelector('#buscar').addEventListener('click',function (e){
    let checkInValue = document.querySelector('.datepickerIN').value;
    let checkOutValue = document.querySelector('.datepickerOUT').value;
    //condicional para que no continue a la otra pagina sin ingresar las fechas
    if(checkInValue && checkOutValue ){
        localStorage.setItem("checkin", JSON.stringify(checkInValue));
        localStorage.setItem("checkout", JSON.stringify(checkOutValue)); 
        e.target.parentElement.setAttribute('action','reserva.html')
        
    } else {
        alert('Por favor, ingrese fecha de llegada y salida para poder continuar')
        e.target.parentElement.setAttribute('action','#')
    }
})
