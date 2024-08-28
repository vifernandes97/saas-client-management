const express = require('express');
const router = express.Router();

// Rota de exemplo
router.get('/', (req, res) => {
    res.send('Client Routes Working!');
});

router.post('/', async (req, res) => {
    const {
      nomeFantasia, razaoSocial, cnpj, dataInicio, dataChurn, lifetime,
      ltv, nomeGestor, estrutura, contatosInternos, valorRecorrencia,
      motivoChurn, cidadeBuffet, plano
    } = req.body;
  
    try {
      const newClient = await Client.create({
        nomeFantasia, razaoSocial, cnpj, dataInicio, dataChurn, lifetime,
        ltv, nomeGestor, estrutura, contatosInternos, valorRecorrencia,
        motivoChurn, cidadeBuffet, plano
      });
      res.status(201).json(newClient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const clients = await Client.findAll();
      res.json(clients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  

module.exports = router;
