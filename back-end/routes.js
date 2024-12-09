const { Router } = require("express");

const TutorController = require("./app/controllers/Tutor");
const PacienteController = require("./app/controllers/Paciente");
const VeterinarioController = require("./app/controllers/Veterinario");
const ConsultaController = require("./app/controllers/Consulta");

const routes = Router();

routes.get("/tutores", TutorController.index);
routes.get("/tutores/:codT", TutorController.show);
routes.post("/tutores", TutorController.store);
routes.put("/tutores/:codT", TutorController.update);
routes.delete("/tutores/:codT", TutorController.delete);

routes.get("/pacientes", PacienteController.index);
routes.get("/pacientes/:codP", PacienteController.show);
routes.post("/pacientes", PacienteController.store);
routes.put("/pacientes/:codP", PacienteController.update);
routes.delete("/pacientes/:codP", PacienteController.delete);

routes.get("/veterinarios", VeterinarioController.index);
routes.get("/veterinarios/:codV", VeterinarioController.show);
routes.post("/veterinarios", VeterinarioController.store);
routes.put("/veterinarios/:codV", VeterinarioController.update);
routes.delete("/veterinarios/:codV", VeterinarioController.delete);

routes.get("/consultas", ConsultaController.index);
routes.get("/consultas/:codC", ConsultaController.show);
routes.post("/consultas", ConsultaController.store);
routes.put("/consultas/:codC", ConsultaController.update);
routes.delete("/consultas/:codC", ConsultaController.delete);

module.exports = routes;