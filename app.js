const formulario = document.querySelector(".form-create");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div class="publicacion">
            <p>id: 00</p>
            <p>${descripcion}</p>
            <button>editar</button>
            <button>eliminar</button>
        </div>`;
});