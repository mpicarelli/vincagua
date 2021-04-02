//DOM DEPARTAMENTOS
const departamentoStorage = JSON.parse(localStorage.getItem('departamentos'));
const disponibles = departamentoStorage.filter(Depto => Depto.disponible == true);

disponibles.forEach( dto => {
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
