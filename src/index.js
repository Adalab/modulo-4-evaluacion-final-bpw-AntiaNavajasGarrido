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

        const queryRecipes = `SELECT * FROM recetas`;

        const [results] = await conn.query(queryRecipes);


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
  
      const queryRecipeById = `SELECT * FROM recetas WHERE id = ?`;
      const [results] = await conn.query(queryRecipeById, [id]);
  
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
      res.status(500).json({ success: false, error: "No hemos podido encontrar esta receta :(" });
    }
  });

server.post('/api/recetas', async (req, res) => {
    const { nombre, ingredientes, instrucciones } = req.body;

    try {
        const conn = await getConnection();
    
        const queryInsertRecipe = `INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES (?, ?, ?)`;
        const [result] = await conn.query(queryInsertRecipe, [nombre, ingredientes, instrucciones]);

        const nuevo_id = result.insertId;
    
        conn.close();
    
        if (result && result.insertId) {
          res.status(201).json({
            success: true,
            id: nuevo_id
          });

        } else {
          res.status(500).json({ success: false, message: "No se ha podido crear tu nueva receta" });
        }

      } catch (error) {
        console.error("No se ha podido crear tu nueva receta:", error);
        res.status(500).json({ success: false, message: "No se ha podido crear tu nueva receta" });
      }

});

server.put('/api/recetas/:id', async (req, res) => {
    const recetaId = req.params.id;
    const { nombre, ingredientes, instrucciones } = req.body;

    try {
      const conn = await getConnection();
  
      const queryUpdateRecipe = `UPDATE recetas SET nombre = ?, ingredientes = ?, instrucciones = ? WHERE id = ?`;
      const [result] = await conn.execute(queryUpdateRecipe, [nombre, ingredientes, instrucciones, recetaId]);

      conn.close();
  
      if (result.affectedRows > 0) {
        res.json({
          success: true,
          message: "¡Has actualizado tu receta!"
        });
      } else {
        res.status(404).json({ success: false, message: "No hemos podido encontrar tu receta o no se ha podido actualizar" });
      }
    } catch (error) {
      console.error("Ha ocurrido un error mientras actualizabas tu receta:", error);
      res.status(500).json({ success: false, message: "Ha ocurrido un error mientras actualizabas tu receta" });
    }
  });

server.delete('/api/recetas/:id', async (req, res) => {
    const recetaId = req.params.id;
  
    try {
      const conn = await getConnection();
  
      const queryDeleteRecipe = `DELETE FROM recetas WHERE id = ?`;
      const [result] = await conn.query(queryDeleteRecipe, [recetaId]);
  
      conn.end();
  
      if (result.affectedRows > 0) {
        res.json({ success: true, message: "¡Has borrado tu receta!" });
      } else {
        res.status(404).json({ success: false, message: "No hemos podido encontrar tu receta o no se ha podido eliminar" });
      }
    } catch (error) {
      console.error("Ha ocurrido un error mientras eliminabas tu receta:", error);
      res.status(500).json({ success: false, message: "Ha ocurrido un error mientras eliminabas tu receta" });
    }
  });

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));
