require('dotenv').config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Leer el certificado de Aiven
const caCert = fs.readFileSync(__dirname + "/aiven-ca.pem");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(__dirname + "/aiven-ca.pem")
  }
  
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error de conexión a MySQL:", err);
  } else {
    console.log("✅ Conectado a MySQL con SSL 🐸");
  }
});

app.get("/comentarios", (req, res) => {
  const sql = "SELECT * FROM comentarios ORDER BY fecha DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.post("/comentarios", (req, res) => {
  const { nombre, mensaje } = req.body;

  if (!nombre || !mensaje) {
    return res.status(400).json({ error: "Nombre y mensaje son obligatorios" });
  }

  const sql = "INSERT INTO comentarios (nombre, mensaje) VALUES (?, ?)";
  db.query(sql, [nombre, mensaje], (err, result) => {
    if (err) {
      console.error("Error al insertar:", err);
      return res.status(500).json({ error: "Error al guardar el mensaje" });
    }
    res.status(200).json({ message: "Mensaje enviado con éxito 🎉" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
