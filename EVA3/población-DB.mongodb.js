use('aquachile');

// Si la colección ya está poblada, no vuelvas a ejecutar este insertMany;
// ejecuta las pruebas desde la primera sección READ para no duplicar candidatos.
db.candidatos.insertMany([
    {
    nombre: "Juan Perez",
    rut: "18.345.678-9",
    empresa: "MLT S.A",
    edad: 30,
    tipo_licencia: ["Clase B"],
    postulacion: {"cargo": "chofer", "evaluador": "carlos Manzana", "fecha_postulación" : new Date("2026-10-10"), "puntaje": 65},
    experiencia_laboral: [
        {"cargo": "chofer", "empresa" : "Prosiga S.A", "años": 5},
        {"cargo": "Auxiliar de aseo", "empresa" : "Manpower", "años": 3}
    ],
    habilidades: ["Manejo de vehículos", "Conocimiento en mecánica", "experiencia en rutas"],
    correo: "juan.perez@gmail.com",
    fecha_evaluacion: new Date("2026-10-13")
},
{
    nombre: "Maria Gonzalez",
    rut: "19.765.432-1",
    empresa: "IC-L.A CREYO",
    edad: 28,
    licencia_activa: true,
    postulacion: {"cargo": "Operaria de producción", "evaluador": "carlos Manzana", "fecha_postulación" : new Date("2026-09-10"), "puntaje": 95},
    experiencia_laboral: [
        {"cargo": "Operaria de producción", "empresa": "ADECCO", "años": 2},
        {"cargo": "Operaria de producción", "empresa": "Manpower", "años": 3},
        {"cargo": "Operaria de producción", "empresa": "Randstad", "años": 1}
    ],
    habilidades: ["Operación de maquinaria", "Control de calidad", "Trabajo en equipo"],
    correo: "maria.gonzalez@gmail.com",
    fecha_evaluacion: new Date("2026-09-11")
},
{
    nombre: "Pedro Ramirez",
    rut: "17.222.333-4",
    empresa: "Aquachile",
    edad: 35,
    tipo_licencia: ["Clase B", "Clase D"],
    postulacion: {"cargo": "chofer", "evaluador": "carlos Manzana", "fecha_postulación" : new Date("2026-10-10"), "puntaje": 90},
    experiencia_laboral: [
        {"cargo": "Chofer", "empresa": "Transportes S.A", "años": 5}
    ],
    habilidades: ["Manejo de vehículos", "Conocimiento de rutas", "Trabajo en equipo"],
    correo: "pedro.ramirez@gmail.com",
    fecha_evaluacion: new Date("2026-10-15")
},
{
    nombre: "Ana Torres",
    rut: "19.333.444-5",
    empresa: "Aquachile",
    edad: 28,
    postulacion: {"cargo": "Analista de datos", "evaluador": "Carlitos Lechuga", "fecha_postulación" : new Date("2026-09-10"), "puntaje": 100},
    experiencia_laboral: [
        {"cargo": "Analista de datos", "empresa": "Microsoft", "años": 2},
        {"cargo": "Analista de datos", "empresa": "Google", "años": 3},
    ],
    habilidades: ["Python, SQL", "Análisis de datos", "Excel"],
    certificaciones: ["Certificación en análisis de datos", "Certificación en Python", "Certificación en SQL"],
    correo: "ana.torres@gmail.com",
    fecha_evaluacion: new Date("2026-09-11")
},
{
    nombre: "Luis Fernandez",
    rut: "17.444.555-6",
    empresa: "Aquachile",
    edad: 32,
    postulacion: {"cargo": "Ingeniero de software", "evaluador": "Gabriel Boric", "fecha_postulación" : new Date("2026-10-10"), "puntaje": 68},
    experiencia_laboral: [
        {"cargo": "Ingeniero de software", "empresa": "Tech Solutions", "años": 4}
    ],
    habilidades: ["Programación en Python", "Diseño de arquitectura", "Gestión de proyectos"],
    certificaciones: ["Certificación en desarrollo de software", "Certificación en gestión de proyectos"],
    correo: "luis.fernandez@gmail.com",
    fecha_evaluacion: new Date("2026-10-15")
},
{
    nombre: "Carla Rojas",
    rut: "24.555.666-7",
    empresa: "Aquachile",
    edad: 20,
    postulacion: {"cargo": "Diseñadora gráfica", "evaluador": "Gabriel Boric", "fecha_postulación" : new Date("2026-09-10"), "puntaje": 52},
    experiencia_laboral: [
        {"cargo": "Diseñadora gráfica", "empresa": "Creative Studio", "años": 3}
    ],
    habilidades: ["Diseño gráfico", "Ilustración", "Maquetación"],
    portafolio: ["www.portafolio-carla.com", "www.behance.net/carla-rojas"],
    correo: "carla.rojas@gmail.com",
    fecha_evaluacion: new Date("2026-09-11")
},
{
    nombre: "Jorge Martinez",
    rut: "25.666.777-8",
    empresa: "Aquachile",
    edad: 31,
    tipo_licencia: ["Clase B", "Clase D"],
    licencia_activa: true,
    postulacion: {"cargo": "Chofer", "evaluador": "Carlitos Lechuga", "fecha_postulación" : new Date("2026-10-10"), "puntaje": 85},
    experiencia_laboral: [
        {"cargo": "Chofer", "empresa": "Transportes S.A", "años": 5}
    ],
    habilidades: ["Manejo de vehículos", "Conocimiento de rutas", "Trabajo en equipo"],
    correo: "jorge.martinez@gmail.com",
    fecha_evaluacion: new Date("2026-10-15")
},
{
    nombre: "Valentina Silva",
    rut: "26.777.888-9",
    empresa: "Aquachile",
    edad: 22,
    licencia_activa: false,
    postulacion: {"cargo": "operaria de producción", "evaluador": "Gabriel Boric", "fecha_postulación" : new Date("2026-09-10"), "puntaje": 95},
    experiencia_laboral: [
        {"cargo": "Operaria de producción", "empresa": "Adecco", "años": 2}
    ],
    habilidades: ["Operación de maquinaria", "Control de calidad", "Trabajo en equipo"],
    correo: "valentina.silva@gmail.com",
    fecha_evaluacion: new Date("2026-09-11")
},
{
    nombre: "Raúl Torres",
    rut: "13.121.312-K",
    empresa: "Aquachile",
    edad: 48,
    licencia_activa: false,
    postulacion: {"cargo": "operario de producción", "evaluador": "Gabriel Boric", "fecha_postulación" : new Date("2026-09-10"), "puntaje": 55},
    experiencia_laboral: [
        {"cargo": "Operario de producción", "empresa": "Adecco", "años": 2}
    ],
    habilidades: ["Operación de maquinaria", "Control de calidad", "Trabajo en equipo"],
    correo: "raul.torres@gmail.com",
    fecha_evaluacion: new Date("2026-09-11")
},
{
    nombre: "José Antonio Kast",
    rut: "21.777.888-9",
    empresa: "Aquachile",
    edad: 22,
    postulacion: {"cargo": "Analista de datos", "evaluador": "Gabriel Boric", "fecha_postulación" : new Date("2026-09-10"), "puntaje": 10},
    experiencia_laboral: [
        {"cargo": "Presidente de la república", "empresa": "Ministerio de Chile", "años": 1}
    ],
    habilidades: [""],
    certificaciones: [""],
    observaciones: ["No tiene experiencia en el cargo", "Inútil absoluto"],
    correo: "borictuvolaculpa@gob.cl"
},
{
    nombre: "Antoine Rivas",
    rut: "21.504.801-2",
    empresa: "Aquachile",
    edad: 22,
    licencia_activa: true,
    postulacion: {"cargo": "operario de producción", "evaluador": "Carlos Manzana", "fecha_postulación" : new Date("2026-09-10"), "puntaje": 85},
    experiencia_laboral: [
        {"cargo": "Operario de producción", "empresa": "Adecco", "años": 2}
    ],
    habilidades: ["Operación de maquinaria", "Control de calidad", "Trabajo en equipo"],
    correo: "antoine.rivas@gmail.com",
    fecha_evaluacion: new Date("2026-09-11")
}
]);

// READ: revisar los candidatos cargados.
db.candidatos.find();

// READ: candidatos con puntaje de postulación superior o igual a 70.
db.candidatos.find({
    "postulacion.puntaje": { $gte: 70 }
});

// READ: candidatos de hasta 30 años.
db.candidatos.find({
    edad: { $lte: 30 }
});

// READ: buscar postulaciones a cargos de operario/a, sin distinguir mayúsculas.
db.candidatos.find({
    "postulacion.cargo": /operari/i
});

// READ: candidatos cuya empresa no es Aquachile.
db.candidatos.find({
    empresa: { $nin: ["Aquachile"] }
});

// READ: consultar un candidato por su RUT.
db.candidatos.findOne({
    rut: "19.333.444-5"
});

// READ: recuperar el documento recién creado.
db.candidatos.findOne({
    "rut": "21.777.888-9"
});

// UPDATE: modificar el puntaje de postulación del documento temporal.
db.candidatos.updateOne(
    { "rut": "21.777.888-9" },
    { $set: { "postulacion.puntaje": 0 } }
);

// READ: comprobar el cambio realizado.
db.candidatos.findOne({
    "rut": "21.777.888-9"
});

// DELETE: eliminar solamente el documento temporal de esta prueba.
db.candidatos.deleteOne({
    "rut": "21.777.888-9"
});

// READ: verificar que el documento temporal ya no existe (resultado: null).
db.candidatos.findOne({
    "rut": "21.777.888-9"
});

