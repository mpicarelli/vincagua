
function construyeDeptos(deptos){
    deptos.forEach( dto =>{
        
        //articulo con cada tarjeta
        let article = document.createElement('article');
        article.setAttribute('class' , 'd-flex flex-column col-12 col-md-6 col-lg-4 mb-4');
            //link de imagen
            let aimg = document.createElement('a');
            aimg.setAttribute('href', '#arriba');
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
                    dtoBoton.textContent = "Ir a reservar"
                    dtoBoton.setAttribute('data-id', `${dto.numero}`)
                    divFoot.appendChild(dtoBoton);




        document.querySelector("#deptos").appendChild(article)
    })
}