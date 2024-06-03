import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../routes/montealban.css"

export function Monte(){

  const agregarInformacion = (id) => {
    // Aquí puedes agregar la lógica para manejar la información basada en el id
    console.log(`Agregar información para el ID: ${id}`);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="position-relative">
          <img src="lugares/monteAlban/img/172521.png" className="imagen-lugar" alt="..." />
          <div className="card-title-overlay">MONTE ALBAN</div>
        </div>
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Descripcion general</h5>
          <p className="card-text">
            Monte Albán, situado en una montaña con vistas panorámicas del Valle de Oaxaca, es un sitio arqueológico de gran importancia histórica. Fundado hace más de dos mil años, fue el centro político y ceremonial de la civilización zapoteca. Este impresionante complejo incluye una serie de plazas, pirámides, y estructuras ceremoniales que reflejan el avanzado conocimiento de ingeniería y astronomía de sus constructores. Entre sus características más destacadas se encuentran los Danzantes, misteriosas figuras talladas en piedra que aún hoy intrigan a los arqueólogos. Monte Albán no solo ofrece una visión profunda del pasado mesoamericano, sino que también proporciona una experiencia única para quienes desean explorar la rica herencia cultural de Oaxaca.
          </p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => agregarInformacion(4)}>Mas informacion</button>
        </div>
      </div>

      <h1>mapa</h1>
      
      <div className="btn-group-vertical boton-color" role="group" aria-label="Vertical radio toggle button group">
        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalTransporte">Transporte</button><br />
        <button className="btn btn-outline-danger" data-bs-toggle="collapse" data-bs-target="#collapseExample">Lugares</button>
      </div>

      <div className="collapse" id="collapseExample">
        <div className="container">
          <div className="card" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => agregarInformacion(1)}>
            <img src="lugares/monteAlban/restaurante/1.png" className="card-img-top img-lugares" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Casa Oaxaca el Restaurante</h5>
              <p className="card-text">Platos oaxaqueños modernos hechos con vegetales orgánicos y carnes de libre pastoreo que se sirven en un patio lujoso.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go somewhere</button>
            </div>
          </div>
          <div className="card" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => agregarInformacion(2)}>
            <img src="lugares/monteAlban/hotel/image.png" className="card-img-top img-lugares" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hotel Los Olivos Spa</h5>
              <p className="card-text">Francisco I. Madero 1254 Col, Santa María del Marquesado, Ex-Marquezado, 68030 Oaxaca de Juárez, Oax.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go somewhere</button>
            </div>
          </div>
          <div className="card" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => agregarInformacion(3)}>
            <img src="lugares/monteAlban/cafeteria/image.png" className="card-img-top img-lugares" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cafe la casita de Naela</h5>
              <p className="card-text">Disfruta de un rico cafe y mas en nuestra cafeteria</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go somewhere</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="modal-body-content">
              {/* Contenido del modal */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalTransporte" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalTransporte" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="modal-body-content">
              {/* Contenido del modal */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

