const database = require("../models/ConnectDatabase");

class ConsultaRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const sqlResponse = await database.query(
      `
        SELECT consulta.*
        FROM consulta
        ORDER BY consulta.codC ${direction};
      `
    );

      return sqlResponse;
  }

  async findById(codC) {
      if (codC === undefined || codC === null) {
        throw new Error("O parâmetro codC não pode ser nulo ou indefinido.");
      }

    const sqlResponse = await database.query(
      `
        SELECT consulta.*
        FROM consulta
        WHERE consulta.codC = ${codC}
      `
      , [codC]
    );

      return sqlResponse;
  }

  async create({ codV, codP, data, hora, motivo }) {
    const sqlResponse = await database.query(
      `
        INSERT INTO consulta (codV, codP, data, hora, motivo)
        VALUES (?, ?, ?, ?, ?);
      `
      , [codV, codP, data, hora, motivo]);

    const insertedConsultaCodC = sqlResponse.insertId;
    const [insertConsultaSQLResponse] = await database.query(
      `
        SELECT consulta.*
        FROM consulta
        WHERE consulta.codC = ?
      `
      , [insertedConsultaCodC]
    );
    
      return insertConsultaSQLResponse;  
  }

  async update(codC, { codV, codP, data, hora, motivo }) {
    const params = [
      codV || null,
      codP || null,
      data || null,
      hora || null,
      motivo || null,
      codC,
    ];

    const sqlResponse = await database.query(
      `
        UPDATE consulta
        SET codV = ?, codP = ?, data = ?, hora = ?, motivo = ?
        WHERE codC = ?;
      `
      , params
    );

    const [updatedConsultaSQLResponse] = await database.query(
      `
        SELECT consulta.*
        FROM consulta
        WHERE consulta.codC = ?
      `, [codC]
    );

      return updatedConsultaSQLResponse;
  }

  async delete(codC) {
    const sqlResponse = await database.query(
      `
        DELETE FROM consulta
        WHERE codC = ?;
      `
      , [codC]
    );

    return sqlResponse;
  }
}

module.exports = new ConsultaRepository();