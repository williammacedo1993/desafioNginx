const express = require ('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const config = {
    host: 'mysqlapplication',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get("/", (req, res) => {
    const connection = mysql.createConnection(config);
    const sql = `INSERT INTO people(name) values('William'),('Pedro'),('Gustavo'), ('Antonio')`;
    connection.query(sql);
  
    connection.query(`SELECT * from people`, (err, results) => {
      if (err) {
        throw err;
      }
      res.send(`<h1>Full Cycle Rocks!</h1>
                 <h1>Lista de nomes:</h1>
                  <ul>
                    <li>${results[0].name}</li>
                    <li>${results[1].name}</li>
                    <li>${results[2].name}</li>
                    <li>${results[3].name}</li>
                  </ul>`);
    });
  
    connection.end();
  });

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})