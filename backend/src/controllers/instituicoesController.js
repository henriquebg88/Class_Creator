const crypto = require('crypto');
const dbConnection = require('../database/connection');

module.exports = {

    async create(req, resp){

        const { nome, cidade, uf, email } = req.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await dbConnection('Instituicoes').insert(
            {
                id,
                nome,
                cidade,
                uf,
                email
            }
        );

        return resp.json(id);
    },

    async index(req, resp){

        const instituicoes = await dbConnection('Instituicoes').select('*');

        return resp.json(instituicoes);
    },

};