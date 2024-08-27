        // Función para validar el texto ingresado
        function validarTexto(texto) {
            var regex = /^[a-z\s]*$/; // Expresión regular para letras minúsculas y espacios
            return regex.test(texto);
        }        
        
        // Función para encriptar el texto
        function encriptarTexto() {
            var texto = document.getElementById("texto").value;
            // Validación del texto
            if (texto === "") {
                alert("Por favor ingrese un texto antes de encriptar.");
                return;
            }
            if (!validarTexto(texto)) {
                alert("El texto ingresado contiene mayúsculas, acentos o caracteres especiales. Por favor elimínelos antes de encriptar.");
                return;
            }
            var textoEncriptado = texto
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            document.getElementById("resultado").textContent = textoEncriptado;
            document.getElementById("btnDesencriptar").disabled = false; // Habilita el botón de desencriptar
            document.getElementById("btnCopiar").style.display = "inline-block"; // Muestra el botón de copiar
            document.getElementById("imagen").style.display = "none"; // Oculta la imagen
        }

        // Función para desencriptar el texto
        function desencriptarTexto() {
            var texto = document.getElementById("texto").value;
            var textoDesencriptado = texto
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            document.getElementById("resultado").textContent = textoDesencriptado;
        }

        // Función para copiar el texto del resultado al portapapeles
        function copiarTexto() {
            var resultado = document.getElementById("resultado").textContent;
            navigator.clipboard.writeText(resultado).then(function() {
                alert("Texto copiado al portapapeles");
            }, function() {
                alert("Error al copiar el texto");
            });
        }

