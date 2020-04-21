const dbConnection = require('../database/connection');

module.exports = {

    async create(req,resp)
    {
        const { id } = req.body;
        const [Instituicao] = await dbConnection('Instituicoes')
            .where('id', id);

        if(id == Instituicao.id)
        {
            return resp.json(Instituicao);
        }

        return resp.status(400).json({ erro : 'Instituicao inexistente'});
    }

};