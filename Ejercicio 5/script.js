function calculo_area(){

    const ladoA = parseInt(document.getElementById("ladoA").value);
    const ladoB = parseInt(document.getElementById("ladoB").value);
    const ladoC = parseInt(document.getElementById("ladoC").value);

    let diferencia = ladoA - ladoC
    let area1 = (diferencia*ladoB)/2
    let area2 = ladoB * ladoC

    let area = area1 + area2;

    alert(`El area es: ${area} m`);
}