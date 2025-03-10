const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 

const grupoRoutes = require('./routes/grupoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const eventoRoutes = require('./routes/eventoRoutes');

const app = express();
app.use(cors());
app.use(express.json());


connectDB().then(() => {
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});

// Rutas
app.use('/api/grupos', grupoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/eventos', eventoRoutes);

