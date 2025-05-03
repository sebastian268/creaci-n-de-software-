

function validarContrasena() {
    const contrasena = document.querySelector('.password').value;
    const barra = document.querySelector('.barra-fuerza');
    const requisitos = document.querySelector('.requisitos');
    const exito = document.querySelector('.exito');
  
    let fuerza = 0;
    if (contrasena.length >= 8) fuerza++;
    if (/[A-Z]/.test(contrasena)) fuerza++;
    if (/[0-9]/.test(contrasena)) fuerza++;
    if (/[\W_]/.test(contrasena)) fuerza++;
  
    // Actualizar barra de fuerza
    barra.style.width = (fuerza * 25) + '%';
    barra.style.backgroundColor = ['#ff4d4d', '#ffa500', '#99cc00', '#00cc66'][fuerza - 1] || '#ccc';
  
    // Mostrar mensaje de requisitos
    if (fuerza < 4) {
      requisitos.style.visibility = 'visible';
      exito.style.visibility = 'hidden';
    } else {
      requisitos.style.visibility = 'hidden';
    }
  
    compararContrasenas();
  }
  
  function compararContrasenas() {
    const contrasena = document.querySelector('.password').value;
    const confirmar = document.querySelector('.confirm').value;
    const coincidencia = document.querySelector('.coincidencia');
    const exito = document.querySelector('.exito');
    const barra = document.querySelector('.barra-fuerza');
  
    if (confirmar.length > 0 && contrasena !== confirmar) {
      coincidencia.textContent = 'Las contraseñas no coinciden.';
      coincidencia.style.visibility = 'visible';
      exito.style.visibility = 'hidden';
    } else if (contrasena.length >= 8 && contrasena === confirmar && barra.style.width === '100%') {
      coincidencia.style.visibility = 'hidden';
      exito.style.visibility = 'visible';
    } else {
      exito.style.visibility = 'hidden';
    }
  }
  
  function enviarFormulario() {
    const contrasena = document.querySelector('.password').value;
    const confirmar = document.querySelector('.confirm').value;
    const barra = document.querySelector('.barra-fuerza');
  
    if (
      contrasena === confirmar &&
      contrasena.length >= 8 &&
      /[A-Z]/.test(contrasena) &&
      /[0-9]/.test(contrasena) &&
      /[\W_]/.test(contrasena)
    ) {
      alert("Buena contraseña broustone");
    } else {
      alert("No es valido broustone");
    }
  }
  
  