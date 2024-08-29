const express = require('express');
const router = express.Router();
const Client = require('../models/client');

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
  const {
    nomeFantasia, razaoSocial, cnpj, dataInicio,
    nomeGestor, estrutura, contatosInternos, valorRecorrencia,
    cidadeBuffet, plano
  } = req.body;

  console.log('Received data:', req.body);

  // Verificar se o plano é 'light' ou 'pro'
  if (plano !== 'light' && plano !== 'pro') {
    return res.status(400).json({ error: 'Plano inválido. Deve ser "light" ou "pro".' });
  }

  try {
    const newClient = await Client.create({
      nomeFantasia, razaoSocial, cnpj, dataInicio,
      nomeGestor, estrutura, contatosInternos, valorRecorrencia,
      cidadeBuffet, plano
    });
    res.status(201).json(newClient);
  } catch (error) {
    console.error('Error saving client:', error.message);
    res.status(400).json({ error: error.message });
  }
});


// Rota para listar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clients = await Client.findAll(); // Busca todos os clientes no banco de dados
    res.status(200).json(clients || []); // Retorna os clientes como JSON, garante um array vazio se não houver clientes
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'An error occurred while fetching clients.' });
  }
});

// Rota para obter os detalhes de um cliente pelo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findByPk(id); // Busca o cliente pelo ID
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    res.status(500).json({ message: 'Erro ao buscar cliente.' });
  }
});

// Rota para excluir um cliente pelo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findByPk(id);
    if (client) {
      await client.destroy();
      res.status(200).json({ message: 'Cliente excluído com sucesso.' });
    } else {
      res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    res.status(500).json({ message: 'Erro ao excluir cliente.' });
  }
});


module.exports = router;
