const mysql = require("mysql2/promise");

const databaseConnection = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "clinica_veterinaria",
});

const testConnection = async () => {
  try {
    const connection = await databaseConnection.getConnection();

    console.log("MySQL conectado com sucesso!");
    connection.release();
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
};

exports.query = async (sqlQuery, sqlParam) => {
  try {
    const [sqlResponse, responseInfo] = await databaseConnection.execute(sqlQuery, sqlParam);
    return sqlResponse;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

exports.testConnection = testConnection;