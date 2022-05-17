const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		debugger
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			debugger
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			debugger
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				debugger
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});