const { usuario } = require('../models');

module.exports = {
    async index(req, res) {
        const user = await usuario.findOne({
            attributes: ['nome', 'sobrenome']
        });

        return res.json(user);
    },

    async store(req, res) {
        const treino = req.body;

        return res.json(treino);
    }
};