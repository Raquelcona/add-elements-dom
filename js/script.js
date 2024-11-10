 // Aquí tu código
const lista = document.getElementById("Lista");
const boton = document.getElementById("agregar");

function agregarElemento() {
    const nuevoElemento = prompt ("introduce un elemento para agregar a la lista");

    const li = document.createElement("li");
    li.textContent = nuevoElemento;
    lista.appendChild(li);
}

boton.addEventListener("click", agregarElemento);

