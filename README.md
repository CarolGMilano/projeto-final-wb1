# Projeto Final - Desenvolvimento Web 1

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web 1 do curso de Análise e Desenvolvimento de Sistemas na UFPR. O objetivo é fornecer uma solução para a gestão de uma clínica veterinária, permitindo o cadastro e gerenciamento de pacientes, tutores, veterinários e consultas.


## Tecnologias Utilizadas

-   **Front-end**:
    -   React;
    -   Styled-Components;
    -   React Router;
    -   Axios.

-   **Back-end**:
    -   Node.js;
    -   Express;
    -   MySQL2;
    -   Nodemon (para ambiente de desenvolvimento).

-   **Banco de dados** :
	-    MySQL.

-   **Controle de Versão**: 
	 -   Git; 
	 -   GitHub.

##  Como Rodar o Projeto

### 1. Clonar o Repositório

Para clonar o repositório, execute o seguinte comando no seu terminal:

	git clone https://github.com/CarolGMilano/projeto-final-wb1 

### 2. Instalar Dependências

#### Front-end:

1.  Navegue até a pasta do front-end:

	`cd front-end` 

2.  Instale as dependências do front-end:

	`npm install` 

#### Back-end:

1.  Navegue até a pasta do back-end:

	`cd back-end` 

2.  Instale as dependências do back-end:

   	 `npm install`

#### Banco de Dados:

>Embora esse projeto tenha sido desenvolvido utilizando MySQL, a estrutura de banco de dados pode ser adaptada para outros bancos de dados, caso necessário.

1. Construa um banco de dados com a seguinte estrutura:
	
	**Tabela: `Tutor`**
	-  **`codT`**: `int auto_increment` **Primary Key** 
	-  **`cpf`**: `varchar(11)` 
	-  **`nome`**: `varchar(200)` 
	-  **`telefone`**: `varchar(15)` 
	-  **`endereco`**: `varchar(200)`

	**Tabela: `Veterinario`**
	-  **`codV`**: `int auto_increment` **Primary Key** 
	-  **`cpf`**: `varchar(11)` 
	-  **`nome`**: `varchar(200)` 
	-  **`crmv`**: `varchar(10)` 
	-  **`especialidade`**: `varchar(200)`
	-  **`telefone`**: `varchar(15)`

	**Tabela: `Paciente`**
	-  **`codP`**: `int auto_increment`**Primary Key** 
	-  **`nome`**: `varchar(200)` 
	-  **`anoNascimento`**: `varchar(4)` 
	-  **`especie`**: `varchar(200)`
	-  **`raca`**: `varchar(200)`
	-  **`porte`**: `varchar(200)`
	- **`temperamento`**: `varchar(200)`
	- **`microchipagem`**: `varchar(20)`
	- **`observacao`**: `text`
	- **`codT`**: `int` **Foreign Key (Tutor)**

	**Tabela: `Consulta`**
	-  **`codC`**: `int auto_increment`**Primary Key**
	-  **`data`**: `varchar(50)` 
	-  **`hora`**: `varchar(15)` 
	-  **`motivo`**: `text` 
	-  **`codP`**: `int` **Foreign Key (Paciente)**
	-  **`codV`**: `int` **Foreign Key (Veterinario)**

## Como Executar o Projeto

### 1. Back-end

Navegue até a pasta do back-end e execute:

	npx nodemon index.js 

O servidor do back-end será iniciado e estará disponível em `http://localhost:3001` (ou outro endereço configurado).

### 2. Front-end

Navegue até a pasta do frontend e execute:

	npm start 

O frontend será iniciado e estará disponível em `http://localhost:3000`.

## Funcionalidades

O sistema oferece funcionalidades completas de CRUD (Criar, Ler, Atualizar e Deletar) para as cinco tabelas do banco de dados. As tabelas "Paciente" e "Consulta" possuem dependências específicas:
- **Paciente**: Cada paciente deve estar associado a um tutor, ou seja, é necessário que o tutor seja registrado no sistema antes de cadastrar o paciente. 
- **Consulta**: As consultas dependem da existência de um paciente e de um veterinário, pois é obrigatório vincular um paciente e um veterinário ao criar uma nova consulta.

Além disso, os campos dos formulários sofrem validações quanto ao formato, preenchimento e tentativa de cadastro de dados já existentes. Isso assegura que os dados inseridos no sistema sejam válidos e consistentes.

#### Autora: Carolina Milano
