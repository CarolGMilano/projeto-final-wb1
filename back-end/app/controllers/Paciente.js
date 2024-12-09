const PacienteRepository = require("../repositories/Paciente");

class PacienteController {

    async index(request, response) {
        const { orderBy } = request.query;
        const paciente = await PacienteRepository.findAll(orderBy);

            response.json(paciente);  
    }

    async show(request, response) {
        const { codP } = request.params;
        const paciente = await PacienteRepository.findById(codP);
    
            if (!codP) {
                return response.status(400).json({ error: "CodP do Paciente inválido." });
            }
    
            if (!paciente) {
                return response.status(404).json({ error: "Paciente não encontrado." });
            }
    
            response.json(paciente);
    }

    async store(request, response) {
        const { nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT } = request.body;
        
            if (!nome) {
                return response.status(400).json({ error: "Nome é obrigatório." });
            }
            
            if (!anoNascimento) {
                return response.status(400).json({ error: "Ano de nascimento é obrigatório." });
            }

            if (!especie) {
                return response.status(400).json({ error: "Espécie é obrigatório." });
            }

            if (!raca) {
                return response.status(400).json({ error: "Raça é obrigatório." });
            }

            if (!porte) {
                return response.status(400).json({ error: "Porte é obrigatório." });
            }

            if (!temperamento) {
                return response.status(400).json({ error: "Temperamento é obrigatório." });
            }

            if (!microchipagem) {
                return response.status(400).json({ error: "Tipo Sanguíneo é obrigatório." });
            }

            if (!codT) {
                return response.status(400).json({ error: "CodT de Paciente é obrigatório." });
            }

        const paciente = await PacienteRepository.create({ nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT });
            
            response.status(201).json(paciente);
    }

    async update(request, response) {
        const { codP } = request.params;
        const { nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT } = request.body;
        const paciente = await PacienteRepository.findById(codP);

            if (!paciente) {
                return response.status(404).json({ error: "Paciente não encontrado." });
            }
        
        const updatedPaciente = await PacienteRepository.update(codP, { nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT });
          
            response.status(200).json(updatedPaciente);
    }

    async delete(request, response) {
        const { codP } = request.params;
        const paciente = await PacienteRepository.findById(codP);
            
            if (!paciente) {
                return response.status(400).json({ error: "CodP do Paciente inválido." });
            }

        await PacienteRepository.delete(codP);

            response.sendStatus(204);
    }
}

module.exports = new PacienteController();