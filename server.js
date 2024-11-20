const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Ruta para servir el archivo logueo.html
app.get('/preferido', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'logueo.html'));  // Servir 'logueo.html' desde la carpeta 'public'
});

// Manejar la solicitud POST para /logueo
app.post('/preferido', (req, res) => {
  const { preferido } = req.body;

  //acá vamos a agregar una llamada a la BD
  if (preferido == '')
 {
      res.status(401).json({ message: 'Campo preferido no completado' });
  }
});

app.get('/preferido', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bienvenido.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

