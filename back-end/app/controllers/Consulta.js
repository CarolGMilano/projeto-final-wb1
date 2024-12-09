const ConsultaRepository = require("../repositories/Consulta");

class ConsultaController {

    async index(request, response) {
        const { orderBy } = request.query;
        const consulta = await ConsultaRepository.findAll(orderBy);

            response.json(consulta);  
    }

    async show(request, response) {
        const { codC } = request.params;
        const consulta = await ConsultaRepository.findById(codC);
    
            if (!codC) {
                return response.status(400).json({ error: "CodC de Consulta inválido." });
            }
    
            if (!consulta) {
                return response.status(404).json({ error: "Consulta não encontrada!" });
            }
    
            response.json(consulta);
    }

    async store(request, response) {
        const { codV, codP, data, hora, motivo } = request.body;
        
            if (!codV) {
                return response.status(400).json({ error: "CodV do Veterinário é obrigatório." });
            }
            
            if (!codP) {
                return response.status(400).json({ error: "CodP do Paciente é obrigatório." });
            }

            if (!data) {
                return response.status(400).json({ error: "Data é obrigatória." });
            }

            if (!hora) {
                return response.status(400).json({ error: "Hora é obrigatória." });
            }

        const consulta = await ConsultaRepository.create({ codV, codP, data, hora, motivo });
            
            response.status(201).json(consulta);
    }

    async update(request, response) {
        const { codC } = request.params;
        const { codV, codP, data, hora, motivo } = request.body;
        const consulta = await ConsultaRepository.findById(codC);

            if (!consulta) {
                return response.status(404).json({ error: "Consulta não encontrada." });
            }
        
        const updatedConsulta = await ConsultaRepository.update(codC, { codV, codP, data, hora, motivo });
          
            response.status(200).json(updatedConsulta);
    }

    async delete(request, response) {
        const { codC } = request.params;
        const consulta = await ConsultaRepository.findById(codC);
            
            if (!consulta) {
                return response.status(400).json({ error: "CodC de Consulta é inválido." });
            }

        await ConsultaRepository.delete(codC);

            response.sendStatus(204);
    }
}

module.exports = new ConsultaController();