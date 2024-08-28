const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
app.use(cors());
app.use(express.json());


// Rota básica para a raiz
app.get('/', (req, res) => {
    res.send('Backend is working!');
  });
  
app.use('/clients', clientRoutes);

app.listen(8001, () => {
  console.log('Backend running on port 8001');
});
