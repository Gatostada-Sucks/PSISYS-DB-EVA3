// ============================================================
//  PROYECTO AQUASELECCION - Base de datos NoSQL (MongoDB)
//  Coleccion: candidatos
//  Si la coleccion ya esta poblada, NO vuelvas a ejecutar el
//  insertMany; parte desde la seccion READ para no duplicar.
// ============================================================

use('aquachile');

db.candidatos.insertMany([
    {
        nombre: "Juan Perez",
        rut: "18.345.678-9",
        edad: 30,
        correo: "juan.perez@gmail.com",
        empresa_actual: "MLT S.A",
        tipo_licencia: ["Clase B"],
        habilidades: ["Manejo de vehiculos", "Conocimiento en mecanica", "Experiencia en rutas"],
        experiencia_laboral: [
            { cargo: "Chofer", empresa: "Prosiga S.A", anios: 5 },
            { cargo: "Auxiliar de aseo", empresa: "Manpower", anios: 3 }
        ],
        postulacion: {
            cargo: "Chofer",
            fecha_postulacion: new Date("2026-10-10"),
            evaluacion: {
                evaluador: "Carla Mendez",
                fecha: new Date("2026-10-13"),
                puntaje: 65,
                observacion: "Buena experiencia en rutas, licencia vigente."
            }
        }
    },
    {
        nombre: "Maria Gonzalez",
        rut: "19.765.432-1",
        edad: 28,
        correo: "maria.gonzalez@gmail.com",
        empresa_actual: "IC Logistica",
        licencia_activa: true,
        habilidades: ["Operacion de maquinaria", "Control de calidad", "Trabajo en equipo"],
        experiencia_laboral: [
            { cargo: "Operaria de produccion", empresa: "ADECCO", anios: 2 },
            { cargo: "Operaria de produccion", empresa: "Manpower", anios: 3 },
            { cargo: "Operaria de produccion", empresa: "Randstad", anios: 1 }
        ],
        postulacion: {
            cargo: "Operaria de produccion",
            fecha_postulacion: new Date("2026-09-10"),
            evaluacion: {
                evaluador: "Diego Soto",
                fecha: new Date("2026-09-11"),
                puntaje: 95,
                observacion: "Amplia experiencia en produccion, excelente evaluacion."
            }
        }
    },
    {
        nombre: "Pedro Ramirez",
        rut: "17.222.333-4",
        edad: 35,
        correo: "pedro.ramirez@gmail.com",
        tipo_licencia: ["Clase B", "Clase D"],
        habilidades: ["Manejo de vehiculos", "Conocimiento de rutas", "Trabajo en equipo"],
        experiencia_laboral: [
            { cargo: "Chofer", empresa: "Transportes S.A", anios: 5 }
        ],
        postulacion: {
            cargo: "Chofer",
            fecha_postulacion: new Date("2026-10-10"),
            evaluacion: {
                evaluador: "Carla Mendez",
                fecha: new Date("2026-10-15"),
                puntaje: 90,
                observacion: "Dos tipos de licencia, perfil muy completo."
            }
        }
    },
    {
        nombre: "Ana Torres",
        rut: "19.333.444-5",
        edad: 28,
        correo: "ana.torres@gmail.com",
        habilidades: ["Python", "SQL", "Analisis de datos", "Excel"],
        certificaciones: ["Analisis de datos", "Python", "SQL"],
        experiencia_laboral: [
            { cargo: "Analista de datos", empresa: "Microsoft", anios: 2 },
            { cargo: "Analista de datos", empresa: "Google", anios: 3 }
        ],
        postulacion: {
            cargo: "Analista de datos",
            fecha_postulacion: new Date("2026-09-10"),
            evaluacion: {
                evaluador: "Rodrigo Vega",
                fecha: new Date("2026-09-11"),
                puntaje: 100,
                observacion: "Perfil tecnico sobresaliente, maxima evaluacion."
            }
        }
    },
    {
        nombre: "Luis Fernandez",
        rut: "17.444.555-6",
        edad: 32,
        correo: "luis.fernandez@gmail.com",
        habilidades: ["Programacion en Python", "Diseno de arquitectura", "Gestion de proyectos"],
        certificaciones: ["Desarrollo de software", "Gestion de proyectos"],
        experiencia_laboral: [
            { cargo: "Ingeniero de software", empresa: "Tech Solutions", anios: 4 }
        ],
        postulacion: {
            cargo: "Ingeniero de software",
            fecha_postulacion: new Date("2026-10-10"),
            evaluacion: {
                evaluador: "Rodrigo Vega",
                fecha: new Date("2026-10-15"),
                puntaje: 68,
                observacion: "Buen manejo tecnico, falta experiencia en liderazgo."
            }
        }
    },
    {
        nombre: "Carla Rojas",
        rut: "24.555.666-7",
        edad: 20,
        correo: "carla.rojas@gmail.com",
        habilidades: ["Diseno grafico", "Ilustracion", "Maquetacion"],
        portafolio: ["www.portafolio-carla.com", "www.behance.net/carla-rojas"],
        experiencia_laboral: [
            { cargo: "Disenadora grafica", empresa: "Creative Studio", anios: 3 }
        ],
        postulacion: {
            cargo: "Disenadora grafica",
            fecha_postulacion: new Date("2026-09-10"),
            evaluacion: {
                evaluador: "Diego Soto",
                fecha: new Date("2026-09-11"),
                puntaje: 52,
                observacion: "Buen portafolio, pero poca experiencia para el cargo."
            }
        }
    },
    {
        nombre: "Jorge Martinez",
        rut: "25.666.777-8",
        edad: 31,
        correo: "jorge.martinez@gmail.com",
        tipo_licencia: ["Clase B", "Clase D"],
        licencia_activa: true,
        habilidades: ["Manejo de vehiculos", "Conocimiento de rutas", "Trabajo en equipo"],
        experiencia_laboral: [
            { cargo: "Chofer", empresa: "Transportes S.A", anios: 5 }
        ],
        postulacion: {
            cargo: "Chofer",
            fecha_postulacion: new Date("2026-10-10"),
            evaluacion: {
                evaluador: "Carla Mendez",
                fecha: new Date("2026-10-15"),
                puntaje: 85,
                observacion: "Licencia activa y buena experiencia. Apto."
            }
        }
    },
    {
        nombre: "Valentina Silva",
        rut: "26.777.888-9",
        edad: 22,
        correo: "valentina.silva@gmail.com",
        licencia_activa: false,
        habilidades: ["Operacion de maquinaria", "Control de calidad", "Trabajo en equipo"],
        experiencia_laboral: [
            { cargo: "Operaria de produccion", empresa: "Adecco", anios: 2 }
        ],
        postulacion: {
            cargo: "Operaria de produccion",
            fecha_postulacion: new Date("2026-09-10"),
            evaluacion: {
                evaluador: "Diego Soto",
                fecha: new Date("2026-09-11"),
                puntaje: 95,
                observacion: "Muy buen desempeno en la evaluacion tecnica."
            }
        }
    },
    {
        nombre: "Raul Torres",
        rut: "13.121.312-K",
        edad: 48,
        correo: "raul.torres@gmail.com",
        licencia_activa: false,
        habilidades: ["Operacion de maquinaria", "Control de calidad", "Trabajo en equipo"],
        experiencia_laboral: [
            { cargo: "Operario de produccion", empresa: "Adecco", anios: 2 }
        ],
        postulacion: {
            cargo: "Operario de produccion",
            fecha_postulacion: new Date("2026-09-10"),
            evaluacion: {
                evaluador: "Diego Soto",
                fecha: new Date("2026-09-11"),
                puntaje: 55,
                observacion: "Cumple lo basico, perfil aceptable."
            }
        }
    },
    {
        nombre: "Antoine Rivas",
        rut: "21.504.801-2",
        edad: 22,
        correo: "antoine.rivas@gmail.com",
        licencia_activa: true,
        habilidades: ["Operacion de maquinaria", "Control de calidad", "Trabajo en equipo"],
        experiencia_laboral: [
            { cargo: "Operario de produccion", empresa: "Adecco", anios: 2 }
        ],
        postulacion: {
            cargo: "Operario de produccion",
            fecha_postulacion: new Date("2026-09-10"),
            evaluacion: {
                evaluador: "Carla Mendez",
                fecha: new Date("2026-09-11"),
                puntaje: 85,
                observacion: "Buen manejo de maquinaria y trabajo en equipo."
            }
        }
    }
]);


// ============================================================
//  SECCION READ
// ============================================================

// Ver todos los candidatos cargados.
db.candidatos.find();

// Candidatos con puntaje de evaluacion mayor o igual a 70.
db.candidatos.find({ "postulacion.evaluacion.puntaje": { $gte: 70 } });

// Candidatos de hasta 30 anios.
db.candidatos.find({ edad: { $lte: 30 } });

// Postulaciones a cargos de operario/a, sin distinguir mayusculas.
db.candidatos.find({ "postulacion.cargo": /operari/i });

// Buscar un candidato por su RUT.
db.candidatos.findOne({ rut: "19.333.444-5" });

// Mostrar solo nombre y cargo postulado, sin el _id.
db.candidatos.find(
    {},
    { nombre: 1, "postulacion.cargo": 1, _id: 0 }
);

// Candidatos cuyo cargo postulado este en una lista ($in).
db.candidatos.find({ "postulacion.cargo": { $in: ["Chofer", "Analista de datos"] } });

// Candidatos que tengan TODAS estas habilidades a la vez ($all).
db.candidatos.find({ habilidades: { $all: ["Control de calidad", "Trabajo en equipo"] } });

// Candidatos menores de 25 anios O con puntaje mayor o igual a 90 ($or).
db.candidatos.find({ $or: [ { edad: { $lt: 25 } }, { "postulacion.evaluacion.puntaje": { $gte: 90 } } ] });

// Ranking: ordenar por puntaje de mayor a menor (sort) y mostrar solo los 3 primeros (limit).
db.candidatos.find().sort({ "postulacion.evaluacion.puntaje": -1 }).limit(3);

// Lista sin repetidos de los cargos postulados (distinct).
db.candidatos.distinct("postulacion.cargo");


// ============================================================
//  SECCION CRUD
// ============================================================

// CREATE: insertar un candidato temporal.
db.candidatos.insertOne({
    nombre: "Candidato Temporal",
    rut: "30.000.000-0",
    edad: 40,
    correo: "temporal@prueba.cl",
    temporal: true,
    habilidades: ["Prueba"],
    experiencia_laboral: [],
    postulacion: {
        cargo: "Cargo de prueba",
        fecha_postulacion: new Date("2026-11-01"),
        evaluacion: { evaluador: "Diego Soto", fecha: new Date("2026-11-02"), puntaje: 50, observacion: "Registro de prueba." }
    }
});

// CREATE: insertar varios temporales de una vez.
db.candidatos.insertMany([
    { nombre: "Temporal Dos", rut: "30.000.000-1", temporal: true, postulacion: { cargo: "Prueba", evaluacion: { puntaje: 10 } } },
    { nombre: "Temporal Tres", rut: "30.000.000-2", temporal: true, postulacion: { cargo: "Prueba", evaluacion: { puntaje: 15 } } }
]);

// READ: comprobar el candidato temporal recien creado.
db.candidatos.findOne({ rut: "30.000.000-0" });

// UPDATE: cambiar el puntaje del temporal (un documento).
db.candidatos.updateOne(
    { rut: "30.000.000-0" },
    { $set: { "postulacion.evaluacion.puntaje": 0 } }
);

// UPDATE: subir 5 puntos a todos los que postularon a chofer (varios documentos).
db.candidatos.updateMany(
    { "postulacion.cargo": /chofer/i },
    { $inc: { "postulacion.evaluacion.puntaje": 5 } }
);

// UPDATE: eliminar un campo del temporal con $unset.
db.candidatos.updateOne(
    { rut: "30.000.000-0" },
    { $unset: { correo: "" } }
);

// READ: comprobar el cambio del temporal.
db.candidatos.findOne({ rut: "30.000.000-0" });

// DELETE: eliminar solo el primer temporal.
db.candidatos.deleteOne({ rut: "30.000.000-0" });

// DELETE: eliminar todos los documentos de prueba.
db.candidatos.deleteMany({ temporal: true });

// READ: verificar que ya no quedan temporales.
db.candidatos.find({ temporal: true });
