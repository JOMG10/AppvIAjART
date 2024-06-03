const datos = document.getElementById("modal-body-content");

const data = [
  {
    id: 1,
    title: "Moogoñé - Cocina de época",
    lugar: "Av. de la Independencia 105 A, CALZADA MADERO, Centro, 68000 Oaxaca de Juárez, Oax.",
    horario:" Lunes a Viernes: 12:00 PM - 10:00 PM, Sábado: 11:00 AM - 11:00 PM, Domingo:11:00 AM - 9:00 PM",
    precios:" ../Restaurante.pdf",
    contactos:"+52 951 516 8500",
    img: "../src/app/lugares/Hierve/restaurante/restauran1.png",
    img1: "../src/app/lugares/Hierve/restaurante/restauran3.png"
  },
  {
    id: 2,
    title: "Hotel Isabel",
    lugar: "Gral. Ignacio Zaragoza 503, Zona Lunes Feb 09, Centro, 68090 Oaxaca de Juárez, Oax.",
    horario:" Lunes a Viernes: 12:00 PM - 10:00 PM, Sábado: 11:00 AM - 11:00 PM, Domingo:11:00 AM - 9:00 PM",
    precios:" ../Hotel.pdf",
    contactos:"+52 951 516 8500",
    img: "../src/app/lugares/Hierve/hotel/hotel2.png",
    img1: "../src/app/lugares/Hierve/hotel/hotel3.png"
  },
  {
    id: 3,
    title: "Café Venado",
    lugar: "Francisco I. Madero 1254 Col, Santa María del Marquesado, Ex-Marquezado, 68030 Oaxaca de Juárez, Oax. http://www.casaoaxacaelrestaurante.com/",
    horario:" Lunes a Viernes: 12:00 PM - 10:00 PM, Sábado: 11:00 AM - 11:00 PM, Domingo:11:00 AM - 9:00 PM",
    precios:" ../Cafeteria.pdf",
    contactos:"+52 951 516 8500",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "../src/app/lugares/Hierve/cafeteria/cafe3.png",
    img1: "../src/app/lugares/Hierve/cafeteria/cafe2.png"  },
    {
        id: 4,
        title: "HIERVE EL AGUA",
    horario:" Lunes a Viernes: 12:00 PM - 10:00 PM, Sábado: 11:00 AM - 11:00 PM, Domingo:11:00 AM - 9:00 PM",
    precios:"../PrecioZona.pdf",
    contactos:"+52 951 516 8500",    
        lugar: "Hierve el Agua San Isidro Roaguía, San Lorenzo Albarradas Oaxaca, México ",
         img: "../src/app/lugares/Hierve/img/foto2.png",
        img1: "../src/app/lugares/Hierve/img/foto1.png"
      }
];

function agregarInformacion(id) {
  const item = data.find(d => d.id === id);
  if (item) {
    datos.innerHTML = `
      <h2 class="titulo">${item.title}</h2>
      <div class="row">
        <div class="col-md-6">
        <img src="${item.img1}" class="img-fluid mb-3 ajustar-imagen" alt="Card Image" style="width: 100%; height: 80%; ">
        </div>
        <div class="col-md-6">
          <img src="${item.img}" class="img-fluid mb-3 ajustar-imagen" alt="Card Image" style="width: 100%; height: 80%; ">
        </div>
      </div>

      <div class="card mb-3 items" style="background-color:rgb(135, 212, 142);color: rgb(0, 0, 0); font-size: 15pt;">
      <div class="card-body">
        <h4 class="card-title">Ubicacion</h4>
        <p class="card-text">${item.lugar}</p>
      </div>
    </div>

    <div class="card mb-3 items" style="background-color:rgb(199, 243, 203);color: rgb(0, 0, 0); font-size: 15pt;">
    <div class="card-body">
      <h4 class="card-title">Horario</h4>
      <p class="card-text">${item.horario}</p>
    </div>
  </div>


  <div class="card mb-3 items" style="background-color:rgb(135, 212, 142);color: rgb(0, 0, 0); font-size: 15pt;">
  <div class="card-body">
  <h4 class="card-title">Contacto</h4>
  <p class="card-text">${item.contactos}</p>
</div>
</div>

<div class="container">
<div class="card mb-3 items" style="background-color:rgb(199, 243, 203);color: rgb(0, 0, 0); font-size: 15pt;">
<div class="card-body">
      <h4 class="card-title">Precios</h4>
      <p class="card-text">${item.precios}</p>
      <a href="${item.precios}" class="btn" download="${item.precios}">Descargar PDF</a>
      <button class="btn" onclick="togglePDF()">Ver PDF</button>
    </div>
  </div>

  <iframe src="${item.precios}" class="pdf-viewer" id="pdfViewer"></iframe>
</div>

<h1>Calificar</h1>
    <div class="rating">
        <input type="radio" id="star5" name="rating" value="5">
        <label for="star5" title="5 estrellas">&#9733;</label>
        <input type="radio" id="star4" name="rating" value="4">
        <label for="star4" title="4 estrellas">&#9733;</label>
        <input type="radio" id="star3" name="rating" value="3">
        <label for="star3" title="3 estrellas">&#9733;</label>
        <input type="radio" id="star2" name="rating" value="2">
        <label for="star2" title="2 estrellas">&#9733;</label>
        <input type="radio" id="star1" name="rating" value="1">
        <label for="star1" title="1 estrella">&#9733;</label>
    </div>

    <button type="button" class="btn btn-success calificar" data-bs-dismiss="modal">CALIFICAR</button>

    <div class="container">
    <h2>Reseñas de Clientes</h2>

    <div class="reviews">
        <div class="review">
            <h3>Juan Hernandez</h3>
            <p>¡Excelente servicio! Recomiendo este lugar.</p>
            <div class="stars" data-rating="3"></div>
                    </div>

        <div class="review">
            <h3>Jovani Ramirez</h3>
            <p>Increíble experiencia, definitivamente volveré.</p>
            <div class="stars" data-rating="5"></div>
        </div>

        <div class="review">
        <h3>Jose Martinez</h3>
        <p>¡Excelente servicio! Recomiendo este lugar.</p>
        <div class="stars" data-rating="3"></div>
                </div>

    <div class="review">
        <h3>Jorge Ramirez</h3>
        <p>Increíble experiencia, definitivamente volveré.</p>
        <div class="stars" data-rating="5"></div>
    </div>
    </div>  
</div>

<h2>Escribe una Reseña</h2>
<form action="#">
    <textarea name="review" id="review" placeholder="Escribe tu reseña aquí"></textarea>
    <button type="submit">Enviar</button>
</form>

    `;
  }
}



function togglePDF() {
  var pdfViewer = document.getElementById('pdfViewer');
  if (pdfViewer.style.display === 'none' || pdfViewer.style.display === '') {
    pdfViewer.style.display = 'block';
  } else {
    pdfViewer.style.display = 'none';
  }
}