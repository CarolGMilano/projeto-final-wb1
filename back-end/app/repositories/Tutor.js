const database = require("../models/ConnectDatabase");

class TutorRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const sqlResponse = await database.query(
      `
        SELECT tutor.*
        FROM tutor
        ORDER BY tutor.codT ${direction};
      `
    );

      return sqlResponse;
  }

  async findById(codT) {
      if (codT === undefined || codT === null) {
        throw new Error("O parâmetro codT não pode ser nulo ou indefinido.");
      }

    const sqlResponse = await database.query(
      `
        SELECT tutor.*
        FROM tutor
        WHERE tutor.codT = ?;
      `
      , [codT]
    );

      return sqlResponse;
  }

  async create({ cpf, nome, telefone, endereco }) {
    const sqlResponse = await database.query(
      `
        INSERT INTO tutor (cpf, nome, telefone, endereco)
        VALUES (?, ?, ?, ?);
      `
      , [cpf, nome, telefone, endereco]);

    const insertedTutorCodT = sqlResponse.insertId;
    const [insertTutorSQLResponse] = await database.query(
      `
        SELECT codT, cpf, nome, telefone, endereco
        FROM tutor
        WHERE codT = ?
      `
      , [insertedTutorCodT]
    );
    
      return insertTutorSQLResponse;  
  }

  async update(codT, { cpf, nome, telefone, endereco }) {
    const params = [
      cpf || null,
      nome || null,
      telefone || null,
      endereco || null,
      codT,
    ];

    const sqlResponse = await database.query(
      `
        UPDATE tutor
        SET cpf = ?, nome = ?, telefone = ?, endereco = ?
        WHERE codT = ?;
      `
      , params
    );

    const [updatedTutorSQLResponse] = await database.query(
      `
        SELECT codT, cpf, nome, telefone, endereco
        FROM tutor
        WHERE codT = ?
      `, [codT]
    );

      return updatedTutorSQLResponse;
  }

  async delete(codT) {
    const sqlResponse = await database.query(
      `
        DELETE FROM tutor
        WHERE codT = ?;
      `
      , [codT]
    );

    return sqlResponse;
  }
}

module.exports = new TutorRepository();