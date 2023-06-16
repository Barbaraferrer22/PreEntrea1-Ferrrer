setTimeout(consultarPrendas, 2000);

function mostrarCuotas() {
  confirm("Puedes pagar en cuotas 💸, Escoge tus cuotas (hasta 12)");
  for (let i = 1; i <= 12; i++) {
    console.log(i + " cuota(s)  sin interés.");
  }
  alert("Gracias por su compra");
}

function mostrarPrecio(codigo) {
  switch (codigo) {
    case "1":
      confirm("El precio del 👙 Bikini Azul es: $12.500 ¿Deseas Comprar?");
      break;
    case "2":
      confirm("El precio del 👙 Bikini Azul es: $19.000 ¿Deseas Comprar?");
      break;
    case "3":
      confirm(
        "El precio del 👙 Bikini Girasol 🌻 es: $13.000 ¿Deseas Comprar?"
      );
      break;
    case "4":
      confirm("El precio del 👙 Traje de Baño es: $15.000 ¿Deseas Comprar?");
      break;
    default:
      alert("🤔 No entendimos tu selección.");
      break;
  }
}

function consultarPrendas() {
  let nombreIngresado = prompt("Hola 👋, ¿nos indicarias tu nombre?");
  alert("bienvenido 😊" + nombreIngresado);
  let respuesta = confirm("¿Deseas comprar alguno de nuestros productos 👙?");
  if (respuesta === true) {
    let codigo = prompt("Ingresa el código del traje de baño que gustes:");
    mostrarPrecio(codigo);
    mostrarCuotas();
  } else {
    alert("En otro momento nos vemos");
  }
}
