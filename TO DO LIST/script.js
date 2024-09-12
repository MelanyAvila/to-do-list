// variables: nueva tarea y su boton, contenedor para agregar. 
const inputPrincipal = document.querySelector(".input");
const botonAgregar = document.querySelector(".boton-agregar");
const container = document.querySelector(".container");

// clase Item para manejar las tareas.
class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    // metodo, crear para la tarea
    crearDiv(nuevaTarea) {
        const inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true; 
        inputItem.classList.add("item-input"); 
        inputItem.value = nuevaTarea; 

        // crear el div contenedor
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        // editar
        const botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");

        // remover
        const botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        itemDiv.appendChild(inputItem);
        itemDiv.appendChild(botonEditar);
        itemDiv.appendChild(botonRemover);

        container.appendChild(itemDiv);

        // evento para editar
        botonEditar.addEventListener("click", () => {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            }
        });

        // evento para remover
        botonRemover.addEventListener("click", () => {
            container.removeChild(itemDiv);
        });
    }
}

// función para revisar y agregar nueva tarea
function chequearInput() {
    const nuevaTarea = inputPrincipal.value.trim();
    if (nuevaTarea) {
        new Item(nuevaTarea);
        inputPrincipal.value = "";
    }
}

// click para el botón de agregar tarea
botonAgregar.addEventListener("click", chequearInput);