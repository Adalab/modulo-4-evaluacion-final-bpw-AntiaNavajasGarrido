require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const server = express();
server.use(cors());
server.use(express.json({ limit: "25mb" }));

const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

// CONFIGURACIÓN DE MYSQL
async function getConnection() {
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST || '127.0.0.1',
        database: process.env.MYSQL_DB || 'recetas_db',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS,
    });
    connection.connect();

    return connection;

}

console.log(
    `Conexión establecida con la base de datos (identificador=${serverPort})`
);


//endpoints

server.get('/api/recetas', async (req, res) => {
    try {
        const conn = await getConnection();

        const queryRecetas = `SELECT * FROM recetas`;

        const [results] = await conn.query(queryRecetas);


        conn.close();

        res.json({
            info: { "count": results.length },
            results: results,
        });
    } catch (error) {
        console.error("No hemos podido obtener tu API de recetas", error);
        res.status(500).json({ success: false, error: "No hemos podido obtener tu API de recetas" });
    }

});

server.get('/api/recetas/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const conn = await getConnection();
  
      const queryRecetaById = `SELECT * FROM recetas WHERE id = ?`;
      const [results] = await conn.query(queryRecetaById, [id]);
  
      conn.close();
  
      if (results.length > 0) {
        res.json({
          success: true,
          receta: results[0]
        });
      } else {
        res.status(404).json({ success: false, error: "No hemos podido encontrar esta receta :(" });
      }
    } catch (error) {
      console.error("Error al obtener la receta por id:", error);
      res.status(500).json({ success: false, error: "Error al obtener la receta por id" });
    }
  });

server.post('/api/recetas', async (req, res) => {
    const { nombre, ingredientes, instrucciones } = req.body;

    try {
        const conn = await getConnection();
    
        const queryInsertReceta = `INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES (?, ?, ?)`;
        const [result] = await conn.query(queryInsertReceta, [nombre, ingredientes, instrucciones]);

        const nuevo_id = result.insertId;
    
        conn.close();
    
        if (result && result.insertId) {
          res.status(201).json({
            success: true,
            id: nuevo_id
          });

        } else {
          res.status(500).json({ success: false, message: "No se ha podido generar una nueva receta" });
        }

      } catch (error) {
        console.error("No se ha podido crear tu nueva receta:", error);
        res.status(500).json({ success: false, message: "No se ha podido crear tu nueva receta" });
      }

});

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));
