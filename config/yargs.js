const descripcion = {
		demand: true,
		alias: 'd',
		desc: 'Descripción de la tarea por hacer.'
	};

const completado = {
		alias: 'c',
		default: true,
		desc: 'Marca como completado o pendiente la tarea.'
	};

const argv = require('yargs')
		.command('crear','Crear un elemento por hacer.',{descripcion})
		.command('actualizar','Actualiza el estado completado de una tarea.',{descripcion,completado})
		.command('listar','Lista todas las tareas guardadas en la db.')
		.command('borrar','Elimina una tarea de la db.',{descripcion})
		.help()
		.argv;

module.exports = {
	argv
};