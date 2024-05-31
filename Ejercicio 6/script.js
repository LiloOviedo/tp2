const formulario= document.getElementById("formulario");
const mensaje= document.getElementById("mensaje");
const mensaje2= document.getElementById("mensaje2");

formulario.onsubmit = (e) => {
  if(formulario["nombre"].value === ""){
    mensaje.textContent = "Nombre vacio";
  } else if (formulario["apellido"].value === ""){
    mensaje.textContent = "Apellido vacio";
  } else if (formulario["edad"].value === ""){
    mensaje.textContent = "Edad vacia";
  } else if (formulario["edad"].value < 18){
    mensaje.textContent = "No puede ser menor de edad";
  } else if (formulario["altura"].value === ""){
    mensaje.textContent = "Altura vacia";
  } else if (formulario["altura"].value > 230){
    mensaje.textContent = "No puede tener una altura mayor a 230cm";
  } else if (formulario["email"].value === ""){
    mensaje.textContent = "Correo vacio";
  } else if (!formulario["email"].value.includes("@")){
    mensaje.textContent= "Debe incluir @"
  } else {
    mensaje.textContent = "";
    mensaje2.textContent = "Todos los datos son correctos";
  }
    e.preventDefault();
}