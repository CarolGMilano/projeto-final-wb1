const TutorRepository = require("../repositories/Tutor");

class TutorController {

    async index(request, response) {
        const { orderBy } = request.query;
        const tutor = await TutorRepository.findAll(orderBy);

            response.json(tutor);  
    }

    async show(request, response) {
        const { codT } = request.params;
        const tutor = await TutorRepository.findById(codT);
    
            if (!codT) {
                return response.status(400).json({ error: "CodT do Tutor inválido." });
            }
    
            if (!tutor) {
                return response.status(404).json({ error: "Tutor não encontrado." });
            }
    
            response.json(tutor);
    }

    async store(request, response) {
        const { cpf, nome, telefone, endereco } = request.body;
        
            if (!cpf) {
                return response.status(400).json({ error: "CPF é obrigatório." });
            }
            
            if (!nome) {
                return response.status(400).json({ error: "Nome é obrigatório." });
            }

            if (!telefone) {
                return response.status(400).json({ error: "Telefone é obrigatório." });
            }

            if (!endereco) {
                return response.status(400).json({ error: "Endereço é obrigatório." });
            }

        const tutor = await TutorRepository.create({ cpf, nome, telefone, endereco });
            
            response.status(201).json(tutor);
    }

    async update(request, response) {
        const { codT } = request.params;
        const { cpf, nome, telefone, endereco } = request.body;
        const tutor = await TutorRepository.findById(codT);

            if (!tutor) {
                return response.status(404).json({ error: "Tutor não encontrado." });
            }
        
        const updatedTutor = await TutorRepository.update(codT, { cpf, nome, telefone, endereco });
          
            response.status(200).json(updatedTutor);
    }

    async delete(request, response) {
        const { codT } = request.params;
        const tutor = await TutorRepository.findById(codT);
            
            if (!tutor) {
                return response.status(400).json({ error: "CodT do Tutor inválido." });
            }

        await TutorRepository.delete(codT);

            response.sendStatus(204);
    }
}

module.exports = new TutorController();