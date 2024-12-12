function toggleLinks(linksId, iconId) {
  const links = document.getElementById(linksId);
  const icon = document.getElementById(iconId);

  // Alterna la visibilidad de los enlaces
  if (links.style.display === "none" || links.style.display === "") {
    links.style.display = "block";
    icon.textContent = "-"; // Cambia el signo a "-"
  } else {
    links.style.display = "none";
    icon.textContent = "+"; // Cambia el signo a "+"
  }
}
  


window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-catalogo");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



function cotizar(nombre, precio, cuota) {
  // Al hacer clic en el botón "Cotizar", redirige a la página de cotización pasando los parámetros del vehículo
  localStorage.setItem('nombreVehiculo', nombre);
  localStorage.setItem('precioVehiculo', precio);
  localStorage.setItem('cuotaVehiculo', cuota);
  window.location.href = 'Cotizacion.html';
}
function showForm(name, model, price, installment) {
  document.getElementById('vehicle-name').textContent = name;
  document.getElementById('vehicle-model').textContent = model;
  document.getElementById('vehicle-price').textContent = price + ' $us';
  document.getElementById('vehicle-installment').innerHTML = `Cuota bancaria desde <strong>${installment} $us</strong> al mes`;
  document.getElementById('vehicle-img').src = 'https://via.placeholder.com/300'; // Puedes cambiar la imagen según el vehículo seleccionado
}




function showQuoteForm(name, model, price, installment, image) {
  // Guardar los datos del vehículo en localStorage
  const vehicleData = {
    name,
    model,
    price,
    installment,
    image
  };
  localStorage.setItem("selectedVehicle", JSON.stringify(vehicleData));

  // Redirigir a la ventana del formulario
  window.location.href = "formulario.html"; // Cambia esto por la URL real de tu formulario
}




document.addEventListener("DOMContentLoaded", () => {
  // Recuperar los datos del vehículo desde localStorage
  const vehicleData = JSON.parse(localStorage.getItem("selectedVehicle"));

  if (vehicleData) {
    // Actualizar los elementos del formulario con los datos del vehículo
    document.getElementById("vehicle-img").src = vehicleData.image;
    document.getElementById("vehicle-name").textContent = vehicleData.name;
    document.getElementById("vehicle-model").textContent = vehicleData.model;
    document.getElementById("vehicle-price").textContent = vehicleData.price;
    document.getElementById("vehicle-installment").innerHTML = 
      `Cuota bancaria desde <strong>${vehicleData.installment}</strong> al mes`;
  }
});
