const formulario = document.querySelector(".form-create");

/* este funciona como contador para el id pero el profe nos dijo de otra manera
let id = 1;

function c_id(){
    return id++;
}
    <p>id: ${c_id()}</p> */

    let id = 1;

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div id="${id}" class="publicacion">
            <p>id: ${id}</p>
            <p>${descripcion}</p>
            <button>editar</button>
            <button id="eliminar" onclick="eliminar(this)">eliminar</button>
        </div>`;
        id++;
});

function eliminar(e){
    e.parentElement.remove(this)
}