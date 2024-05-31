const formulario = document.getElementById('formulario');
const pesoinput = document.getElementById('peso');
const estaturainput = document.getElementById('estatura');

formulario.onsubmit = (e) => {
    e.preventDefault();
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("estatura").value);

    let imc = peso/(altura/100*altura/100);

    alert(`El IMC es: ${imc}`);

}

