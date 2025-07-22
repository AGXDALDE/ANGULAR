const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

const contactos = [
    { id: 1, nombre: "Contacto 1", telefono: "123456789" },
    { id: 2, nombre: "Contacto 2", telefono: "987654321" }
];

app.get('/contactos', (req, res) => {
    res.json(contactos);
});

app.listen(port, () => {
    console.log(`Backend contactos corriendo en http://localhost:${port}`);
});
app.post('/contactos', (req, res) => {
  const nuevo = req.body;
  contactos.push(nuevo);
  res.json(nuevo);
});
