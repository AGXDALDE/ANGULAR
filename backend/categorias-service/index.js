const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const categorias = [
  { id: 1, nombre: "Categoría 1" },
  { id: 2, nombre: "Categoría 2" }
];

app.get('/categorias', (req, res) => {
  res.json(categorias);
});

app.post('/categorias', (req, res) => {
  const nuevaCategoria = req.body;
  nuevaCategoria.id = categorias.length + 1;
  categorias.push(nuevaCategoria);
  res.status(201).json(nuevaCategoria);
});

app.listen(port, () => {
  console.log(`Backend categorias corriendo en http://localhost:${port}`);
});
