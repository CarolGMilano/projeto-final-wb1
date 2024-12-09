const database = require("../models/ConnectDatabase");

class PacienteRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const sqlResponse = await database.query(
      `
        SELECT paciente.*
        FROM paciente
        ORDER BY paciente.codP ${direction};
      `
    );

      return sqlResponse;
  }

  async findById(codP) {
      if (codP === undefined || codP === null) {
        throw new Error("O parâmetro codP não pode ser nulo ou indefinido.");
      }

    const sqlResponse = await database.query(
      `
        SELECT paciente.*
        FROM paciente
        WHERE paciente.codP = ?;
      `
      , [codP]
    );

      return sqlResponse;
  }

  async create({ nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT }) {
    const sqlResponse = await database.query(
      `
        INSERT INTO paciente (nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `
      , [nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT]);

    const insertedPacienteCodP = sqlResponse.insertId;
    const [insertPacienteSQLResponse] = await database.query(
      `
        SELECT codP, nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT
        FROM paciente
        WHERE codP = ?
      `
      , [insertedPacienteCodP]
    );
    
      return insertPacienteSQLResponse;  
  }

  async update(codP, { nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT }) {
    const params = [
      nome || null,
      anoNascimento || null,
      especie || null,
      raca || null,
      porte || null, 
      temperamento || null, 
      microchipagem || null,
      observacao || null, 
      codT || null,
      codP,
    ];

    const sqlResponse = await database.query(
      `
        UPDATE paciente
        SET nome = ?, anoNascimento = ?, especie = ?, raca = ?, porte = ?, temperamento = ?, microchipagem = ?, observacao = ?, codT = ?
        WHERE codP = ?;
      `
      , params
    );

    const [updatedPacienteSQLResponse] = await database.query(
      `
        SELECT codP, nome, anoNascimento, especie, raca, porte, temperamento, microchipagem, observacao, codT
        FROM paciente
        WHERE codP = ?
      `, [codP]
    );

      return updatedPacienteSQLResponse;
  }

  async delete(codP) {
    const sqlResponse = await database.query(
      `
        DELETE FROM paciente
        WHERE codP = ?;
      `
      , [codP]
    );

    return sqlResponse;
  }
}

module.exports = new PacienteRepository();