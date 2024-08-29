const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const sequelize = require('./config/database');

// Sincronizar o modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const app = express();
app.use(cors());
app.use(express.json());

// Rota básica para a raiz
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Rotas para clientes
app.use('/clients', clientRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
