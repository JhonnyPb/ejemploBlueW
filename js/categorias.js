const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

debugger
categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});
   debugger
		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		// Activamos el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => {
			debugger
			if(contenedor.dataset.categoria === categoriaActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});