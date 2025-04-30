// Constructor de un proyecto
function Proyecto(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tareas = [];
    this.estado = 'En progreso';  // Estado inicial
}

// Método para agregar tarea al proyecto
Proyecto.prototype.agregarTarea = function(nombre, descripcion) {
    const tarea = new Tarea(nombre, descripcion);
    this.tareas.push(tarea);
};

// Método para cambiar el estado del proyecto
Proyecto.prototype.cambiarEstado = function(nuevoEstado) {
    this.estado = nuevoEstado;
};

// Constructor de una tarea
function Tarea(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.estado = 'Pendiente';  // Estado inicial
}

// Método para cambiar el estado de la tarea
Tarea.prototype.cambiarEstado = function(nuevoEstado) {
    this.estado = nuevoEstado;
};

// Crear algunos proyectos
const proyecto1 = new Proyecto("Desarrollo Web", "Proyecto para crear una página web.");
proyecto1.agregarTarea("Diseñar la interfaz", "Crear los bocetos de la interfaz.");
proyecto1.agregarTarea("Implementar funcionalidades", "Codificar las funcionalidades de la página.");

const proyecto2 = new Proyecto("App Móvil", "Desarrollo de una aplicación móvil.");
proyecto2.agregarTarea("Establecer funcionalidades", "Definir las funcionalidades de la app.");
proyecto2.agregarTarea("Pruebas", "Realizar pruebas de la aplicación móvil.");

// Lista de proyectos
const proyectos = [proyecto1, proyecto2];

// Función para mostrar todos los proyectos y sus tareas
function mostrarProyectos() {
    const container = document.querySelector('#proyectos-container');
    container.innerHTML = '';  // Limpiar contenido previo

    proyectos.forEach(proyecto => {
        const h3 = document.createElement('h3');
        h3.textContent = proyecto.nombre;
        
        const pDescripcion = document.createElement('p');
        pDescripcion.textContent = `Descripción: ${proyecto.descripcion}`;
        
        const pEstado = document.createElement('p');
        pEstado.textContent = `Estado: ${proyecto.estado}`;
        
        const tareasList = document.createElement('ul');
        proyecto.tareas.forEach(tarea => {
            const tareaLi = document.createElement('li');
            tareaLi.textContent = `${tarea.nombre} - Estado: ${tarea.estado}`;
            tareasList.appendChild(tareaLi);
        });

        // Añadir todo al contenedor
        container.appendChild(h3);
        container.appendChild(pDescripcion);
        container.appendChild(pEstado);
        container.appendChild(tareasList);
    });
}
