const database = require("../models/ConnectDatabase");

class VeterinarioRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const sqlResponse = await database.query(
      `
        SELECT veterinario.*
        FROM veterinario
        ORDER BY veterinario.codV ${direction};
      `
    );

      return sqlResponse;
  }

  async findById(codV) {
      if (codV === undefined || codV === null) {
        throw new Error("O parâmetro codV não pode ser nulo ou indefinido.");
      }

    const sqlResponse = await database.query(
      `
        SELECT veterinario.*
        FROM veterinario
        WHERE veterinario.codV = ?;
      `
      , [codV]
    );

      return sqlResponse;
  }

  async create({ cpf, nome, crmv, especialidade, telefone }) {
    const sqlResponse = await database.query(
      `
        INSERT INTO veterinario (cpf, nome, crmv, especialidade, telefone)
        VALUES (?, ?, ?, ?, ?);
      `
      , [cpf, nome, crmv, especialidade, telefone]);

    const insertedVeterinarioCodV = sqlResponse.insertId;
    const [insertVeterinarioSQLResponse] = await database.query(
      `
        SELECT codV, cpf, nome, crmv, especialidade, telefone
        FROM veterinario
        WHERE codV = ?
      `
      , [insertedVeterinarioCodV]
    );
    
      return insertVeterinarioSQLResponse;  
  }

  async update(codV, { cpf, nome, crmv, especialidade, telefone }) {
    const params = [
      cpf || null,
      nome || null,
      crmv || null,
      especialidade || null,
      telefone || null, 
      codV,
    ];

    const sqlResponse = await database.query(
      `
        UPDATE veterinario
        SET cpf = ?, nome = ?, crmv = ?, especialidade = ?, telefone = ?
        WHERE codV = ?;
      `
      , params
    );

    const [updatedVeterinarioSQLResponse] = await database.query(
      `
        SELECT codV, cpf, nome, crmv, especialidade, telefone
        FROM veterinario
        WHERE codV = ?
      `, [codV]
    );

      return updatedVeterinarioSQLResponse;
  }

  async delete(codV) {
    const sqlResponse = await database.query(
      `
        DELETE FROM veterinario
        WHERE codV = ?;
      `
      , [codV]
    );

    return sqlResponse;
  }
}

module.exports = new VeterinarioRepository();