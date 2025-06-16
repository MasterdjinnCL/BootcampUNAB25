function mostrarFecha() {
  const fechaActual = new Date();

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const diaSemana = diasSemana[fechaActual.getDay()];
  const dia = fechaActual.getDate();
  const mes = meses[fechaActual.getMonth()];
  const anio = fechaActual.getFullYear();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  const mensajeFecha = `Hoy es ${diaSemana} ${dia} de ${mes} de ${anio}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos`;

  alert(mensajeFecha);


  const fechaFinDeAnio = new Date(anio, 11, 31, 23, 59, 59);
  const tiempoRestante = fechaFinDeAnio.getTime() - fechaActual.getTime();

  const diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  const tiempoRestanteMensaje = `Quedan ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para que termine el año.`;

  document.getElementById("tiemporestante").textContent = tiempoRestanteMensaje;
}

function validar(event) {
  event.preventDefault();

  const nombre = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const asunto = document.getElementById('contactSubject').value.trim();
  const mensaje = document.getElementById('contactMessage').value.trim();
  const mensajeError = document.getElementById('mensajeError');

  let errores = [];

  if (!nombre) {
    errores.push("El nombre es obligatorio.");
  }
  if (!email) {
    errores.push("El correo electrónico es obligatorio.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errores.push("El correo electrónico no es válido.");
  }
  if (!asunto) {
    errores.push("El asunto es obligatorio.");
  }
  if (!mensaje) {
    errores.push("El mensaje es obligatorio.");
  }

  if (errores.length > 0) {
    mensajeError.innerHTML = errores.join("<br>");
    mensajeError.classList.remove('d-none');
    return false;
  } else {
    mensajeError.classList.add('d-none');
    // Aquí puedes enviar el formulario si quieres
    // event.target.submit();
    // O mostrar un mensaje de éxito
    alert("Mensaje enviado correctamente.");
    return true;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formContacto');
  if (form) {
    form.addEventListener('submit', validar);
  }
});