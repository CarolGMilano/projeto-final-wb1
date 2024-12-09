const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const server = express();
const path = require("path");
const url = "http://localhost";
const port = 3001;

const database = require("./app/models/ConnectDatabase");

    database.testConnection().catch((erro) => {
        console.error("Não foi possível conectar ao banco de dados. Encerrando o aplicativo.");
        process.exit(1);
    });

    server.use(cors());
    server.use(express.json());
    server.use(routes);
    server.use(express.static(path.join(__dirname, "../front-end/public"))); 
    
    server.get("/", (request, response) => {
        response.status(200).sendFile(path.join(__dirname, "../front-end/public/index.html")); 
    });   
    
    server.listen(port, () => {
        console.log(`O servidor está rodando em ${url}:${port}`);
    });