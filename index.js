// Función para verificar si el texto contiene caracteres en mayúsculas
function verificarMinusculas() {
    const textoArea = document.getElementById("texto");
    const texto = textoArea.value;

    if (/[A-Z]/.test(texto)) {
        swal("¡Solo se permiten letras minúsculas y sin acentos!", "", "warning");
        textoArea.value = texto.replace(/[A-Z]/g, ''); // Elimina las letras en mayúsculas
    }
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let busqueda = document.getElementById("busqueda");

    if (texto.trim() === "") { 
        busqueda.src = "./Images/busqueda.webp"; 
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar y espera la magia.";
        swal("¡Hey! Recuerda ingresar un texto", "", "warning");
        return;
    }

    let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado";
    parrafo.textContent = "";
    busqueda.src = "./Images/encriptado.png";
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let busqueda = document.getElementById("busqueda");

    if (texto.trim() === "") { 
        busqueda.src = "./Images/busqueda.webp"; 
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar y espera la magia.";
        swal("¡Hey! Recuerda ingresar un texto", "", "warning");
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("texto").value = textoDesencriptado;
    tituloMensaje.textContent = "Texto desencriptado";
    parrafo.textContent = "";
    busqueda.src = "./Images/desencriptado.webp";
}

function copiarTexto() {
    let texto = document.getElementById("texto").value;
    if (texto.trim() === "") {
        swal("No hay texto para copiar", "", "warning");
        return;
    }

    navigator.clipboard.writeText(texto).then(function() {
        swal("Texto copiado al portapapeles", "", "success");
    }, function() {
        swal("Error al copiar el texto", "", "error");
    });
}
