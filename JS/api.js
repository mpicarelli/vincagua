//USO DE API randomuser

let HTMLCard      = ""
let contenidoJSON = ""

function cargoCardsTestimonial() {
    $.ajax({
        url: 'https://randomuser.me/api/?results=4&nat=us,fr,br',
        dataType: 'json',
        success: function(data) {
            contenidoJSON = data.results
            for (let i in contenidoJSON) {
                HTMLCard += `  
                <div class="col">
                    <article class="card mr-2 mb-3 p-0">
                        <img class="card-img-top w-100" src="${contenidoJSON[i].picture.large}">
                        <div class="card-body text-center">
                            <p class="card-text-testimonial">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a doloremque quidem nemo fugiat nulla deserunt ducimus porro, pariatur vel voluptates illo"</p>
                            <span class="card-i-testimonial"><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span></span>
                            <h5 class="card-title-testimonial">${contenidoJSON[i].name.first} ${contenidoJSON[i].name.last}</h5>
                            <h6 class="card-city-testimonial">${contenidoJSON[i].location.city}, ${contenidoJSON[i].location.country}</h6>
                        </div>
                    </article>
                </div>`
            $("#opiniones").html(HTMLCard)            
            };
        }
    })
}
cargoCardsTestimonial()