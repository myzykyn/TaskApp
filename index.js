// Manejo de navegación entre páginas
function mostrarPagina(nombre) {
  const paginas = document.querySelectorAll('.pagina');
  paginas.forEach(pagina => pagina.classList.add('oculto'));

  const paginaActiva = document.getElementById(`pagina-${nombre}`);
  if (paginaActiva) {
    paginaActiva.classList.remove('oculto');
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('cerrado');
}

// Funcionalidad de lista de tareas
function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const texto = input.value.trim();
  if (texto === "") return;

  const lista = document.getElementById("listaTareas");
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "tarea-texto";
  span.textContent = texto;
  span.contentEditable = true;

  const chkCompletado = document.createElement("input");
  chkCompletado.type="checkbox";
  chkCompletado.addEventListener('change', function () {
  if (chkCompletado.checked) {
    console.log('✔️ El checkbox está marcado');
  } else {
    console.log('❌ El checkbox está desmarcado');
  }
});

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "🗑️";
  btnEliminar.onclick = () => li.remove();

li.appendChild(chkCompletado);
  li.appendChild(span);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = "";
}
