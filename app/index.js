const express = require('express');
const mysql = require('mysql');
const app = express();

const port = process.env.APP_PORT || 3000;
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb',
};

const connection = mysql.createConnection(config);

app.get('/', (req, resp) => {
	let peopleList = [];
	const name = 'teste';
	// Inserir dados usando uma consulta MySQL
	connection.query(`INSERT INTO people (nome) VALUES ('${name}')`);
	// Selecionar dados usando uma consulta MySQL
	connection.query('SELECT * FROM people', (err, results) => {
		if (err) {
			console.error('Erro ao buscar dados:', err);
			resp.status(500).send('Erro ao buscar dados no banco de dados.');
			return;
		}

		console.log('[RESULTS]: ', results);

		// Construir a lista de pessoas para exibir na resposta HTML
		peopleList = results.map((person) => `<li>${person.nome}</li>`).join('');
	});

	resp.send(`
                <h1>Full Cycle Rocks!</h1>
                <ol>
                    ${peopleList}
                </ol>
            `);
});

app.listen(port, () => {
	console.log(`Rodando na porta ${port}`);
});
