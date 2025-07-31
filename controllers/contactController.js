const Contact = require('../models/contact');
 
exports.createContact = async (req, res) => {
    try {
      const { name, email, message } = req.body;
   
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }
   
      const contact = await Contact.create({ name, email, message });
      res.status(201).json(contact);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar contato.' });
    }
  }
 
exports.listContact = async (req, res) => {
    try {
        const contacts = await Contact.findAll({ order: [['createdAt' , 'DESC']]});
        res.json(contacts);
    } catch (error) {
        console.error('Erro ao listar contatos:', error);
        res.status(500).json({ message: 'Erro interno do servidor'});
    }
}