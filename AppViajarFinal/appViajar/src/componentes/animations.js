

export const giratorio={
    duration: 700,
    rotate: {
        x: 0,
        y: 180,
        z: 0,
    },
    reset: true, // Restablece la animación al desplazarse fuera de la vista
    viewFactor: 0.6, // La fracción de elemento visible antes de que se active la animación
}

export const rebote={
    duration: 800,
    scale: 0.5,
    distance: '0px',
     // Restablece la animación al desplazarse fuera de la vista
    viewFactor: 0.6, // La fracción de elemento visible antes de que se active la animación
}
export const IzquierdaDerecha = {
    duration: 800,
    distance: '100px', // Ajusta la distancia para el movimiento de izquierda a derecha
    origin: 'left', // Indica que la animación debe comenzar desde la izquierda
    opacity: 0, // Configura la opacidad para que haga un fade-in
    reset: true, // Restablece la animación al desplazarse fuera de la vista
    viewFactor: 0.6, // La fracción de elemento visible antes de que se active la animación
  };
  export const DerechaIzquierda = {
    duration: 800,
    distance: '100px', // Ajusta la distancia para el movimiento de izquierda a derecha
    origin: 'right', // Indica que la animación debe comenzar desde la izquierda
    opacity: 0, // Configura la opacidad para que haga un fade-in
    reset: true, // Restablece la animación al desplazarse fuera de la vista
    viewFactor: 0.6, // La fracción de elemento visible antes de que se active la animación
  };

export const letras={
    duration: 2500,
    origin: 'top',
    distance: '50px',
    reset: true, // Restablece la animación al desplazarse fuera de la vista
    viewFactor: 0.6, // La fracción de elemento visible antes de que se active la animación
}

export const letrasIzq={
    duration: 2500,
    origin: 'left',
    distance: '100%',
    reset: true, // Restablece la animación al desplazarse fuera de la vista
    viewFactor: 0.6, // La fracción de elemento visible antes de que se active la animación
}

export const aparicion = {
    duration: 6500,
    distance: '100px', // Ajusta la distancia para el movimiento de izquierda a derecha
    origin: 'left', // Indica que la animación debe comenzar desde la izquierda
    opacity: 0, // Configura la opacidad para que haga un fade-in
    reset: true, // Restablece la animación al desplazarse fuera de la vista
    viewFactor: 0.6, // La fracción de elemento visible antes de que se active la animación
  };