const VeterinarioRepository = require("../repositories/Veterinario");

class VeterinarioController {

    async index(request, response) {
        const { orderBy } = request.query;
        const veterinario = await VeterinarioRepository.findAll(orderBy);

            response.json(veterinario);  
    }

    async show(request, response) {
        const { codV } = request.params;
        const veterinario = await VeterinarioRepository.findById(codV);
    
            if (!codV) {
                return response.status(400).json({ error: "CodV de Veterinário inválido." });
            }
    
            if (!veterinario) {
                return response.status(404).json({ error: "Veterinário não encontrado!" });
            }
    
            response.json(veterinario);
    }

    async store(request, response) {
        const { cpf, nome, crmv, especialidade, telefone } = request.body;
        
            if (!cpf) {
                return response.status(400).json({ error: "CPF é obrigatório." });
            }
            
            if (!nome) {
                return response.status(400).json({ error: "Nome é obrigatório." });
            }

            if (!crmv) {
                return response.status(400).json({ error: "CRMV é obrigatório." });
            }

            if (!especialidade) {
                return response.status(400).json({ error: "Especialidade é obrigatório." });
            }

            if (!telefone) {
                return response.status(400).json({ error: "Telefone é obrigatório." });
            }

        const veterinario = await VeterinarioRepository.create({ cpf, nome, crmv, especialidade, telefone });
            
            response.status(201).json(veterinario);
    }

    async update(request, response) {
        const { codV } = request.params;
        const { cpf, nome, crmv, especialidade, telefone } = request.body;
        const veterinario = await VeterinarioRepository.findById(codV);

            if (!veterinario) {
                return response.status(404).json({ error: "Veterinário não encontrado." });
            }
        
        const updatedVeterinario = await VeterinarioRepository.update(codV, { cpf, nome, crmv, especialidade, telefone });
          
            response.status(200).json(updatedVeterinario);
    }

    async delete(request, response) {
        const { codV } = request.params;
        const veterinario = await VeterinarioRepository.findById(codV);
            
            if (!veterinario) {
                return response.status(400).json({ error: "CodV do Veterinário é inválido." });
            }

        await VeterinarioRepository.delete(codV);

            response.sendStatus(204);
    }
}

module.exports = new VeterinarioController();