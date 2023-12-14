let intentos = 5;

const URLAPi = "https://random-word-api.herokuapp.com/word?length=5&lang=es";
const CANTLETRAS = 5;

let diccionario = ["PLATO", "ANDER", "LLAMA", "ROPAS", "HIENA"];

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const BUTTON = document.getElementById('botonInput')
const ERROR = document.getElementById('error')
const MSGLOSe = document.getElementById('MsgLose')
BUTTON.addEventListener('click', intentar)

function intentar() {
    const INTENTO = leerIntento();
    if ((tamanoControl(INTENTO))) {
        ERROR.style.display = 'none'
        intentoManager(INTENTO);
    }
    else {
        ERROR.style.display = 'block'
    }

    const BOX = document.getElementById("usuarioInput");
    BOX.value = ""
}

function leerIntento() {
    let intento = document.getElementById("usuarioInput");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function tamanoControl(intento) {
    let cantLetras = 0;
    for (let i in intento) {
        cantLetras += 1;
    }

    if (cantLetras == CANTLETRAS) {
        return true
    } else {
        return false
    }
}

function palabraControl(intento) {
    if (intento == palabra) {
        return true
    }
}

function letrasControl(intento) {
  const GRILLA = document.getElementById('grilla');

  const FILA = document.createElement('div');
  FILA.className = 'row';

  for (let s in intento) {
      const SPAN = document.createElement('span');
      SPAN.className = 'letter';

      if (intento[s] == palabra[s]) {
          SPAN.innerHTML = intento[s];
          SPAN.style.backgroundColor = 'green';
      } else if (palabra.includes(intento[s])) {
          SPAN.innerHTML = intento[s];
          SPAN.style.backgroundColor = 'yellow';
      } else {
          SPAN.innerHTML = intento[s];
          SPAN.style.backgroundColor = 'gray';
      }

      FILA.appendChild(SPAN);
  }

  GRILLA.appendChild(FILA);
}

function intentoManager(intento) {
    if (intento == palabra) {
        letrasControl(intento);
        console.log('GANASTE!')
        terminar('GANASTE!')
        intentos -= 1;
    }
    else {
        letrasControl(intento);
        intentos -= 1;
        if (intentos == 0) {
            terminar('PERDISTE!')
            MSGLOSe.style.display = 'block'
            MSGLOSe.innerHTML = "La Palabra Correcta era: " + palabra

        }
    }
}

function terminar(mensaje) {
    let INTENTO = document.getElementById("usuarioInput");
    INTENTO.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('intentos');
    contenedor.innerHTML = mensaje
}