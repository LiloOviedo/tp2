const listado = document.getElementById("listado");
const mostrar = document.getElementById("mostrar");

mostrar.addEventListener("click", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
        const personas = await res.json();
        
        personas.forEach((persona) => {
            const item = document.createElement("li");
            item.textContent = `${persona.id} - Nombre: ${persona.name} - Usuario: ${persona.username} - Email: ${persona.email} - Website: ${persona.website}`;

            const tareasButton = document.createElement("button");
            tareasButton.textContent = "Ver tareas";
            tareasButton.onclick = async () => {
                const tareasDiv = document.createElement("ul");
                tareasDiv.className = "tareas";

                const resTareas = await fetch(`https://jsonplaceholder.typicode.com/users/${persona.id}/todos`);
                if (resTareas.ok) {
                    const tareas = await resTareas.json();
                    tareas.forEach(tarea => {
                        const tareaItem = document.createElement("li");
                        tareaItem.className = `tarea ${tarea.completed ? 'completed' : 'not-completed'}`;
                        tareaItem.textContent = tarea.title;
                        tareasDiv.appendChild(tareaItem);
                    });
                } else {
                    console.error("Error al obtener las tareas");
                }

                item.appendChild(tareasDiv);
                tareasButton.disabled = true; // Desactivar el botón después de cargar las tareas
            };

            item.appendChild(tareasButton);
            listado.appendChild(item);
        });
    } else {
        console.error("Error");
    }
});