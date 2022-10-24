

const inputTarea = document.getElementById('inputTarea');
const selectPrioridad = document.getElementById('selectPrioridad');
const btnGuardar = document.getElementById('btnGuardar');
const form = document.querySelector('form')
const tareaFila = document.getElementById('tareaFila');
const selectPrioridadSearch = document.getElementById('selectPrioridadSearch');

pintarTareas();


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTarea = {
        titulo: inputTarea.value,
        prioridad: selectPrioridad.value,
        idTarea: arrTareas.length + 1
    }

    arrTareas.push(newTarea);

    pintarTareas();

});

function pintarTareas() {
    tareaFila.innerHTML = '';

    for (let tarea of arrTareas) {
        const article = document.createElement('article');

        const tituloTarea = document.createElement('h2');
        tituloTarea.innerText = `${tarea.titulo}`;

        const prioridadTarea = document.createElement('p');
        prioridadTarea.innerText = `${tarea.prioridad}`;

        article.setAttribute('class', tarea.prioridad);

        const btnBorrar = document.createElement('button');
        btnBorrar.innerText = "Borrar";




        btnBorrar.addEventListener('click', (event) => {
            event.target.parentNode.remove();
            arrTareas = arrTareas.filter((cli) => {
                return cli.titulo !== tarea.titulo;
            });
        });

        article.append(tituloTarea, btnBorrar);

        tareaFila.append(article);

    }
}


