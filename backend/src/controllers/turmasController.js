const dbConnection = require('../database/connection');

module.exports = {

    async create(req, resp)
    {
        const { nome } = req.body;
        const instituicao_id = req.headers.authorization;
    
        const [ id ] = await dbConnection('Turmas').insert(
            { 
                nome,
                instituicao_id 
            }
        );
    
        return resp.json({ id });
    },

    async index(req, resp)
    {
        const instituicao_id = req.headers.authorization;
        const turmas = await dbConnection('Turmas')
            .where('instituicao_id', instituicao_id)
            .select('*');

        return resp.json(turmas);
    },

    async delete(req,resp)
    {
        const { id } = req.params;
        const instituicao_logada = req.headers.authorization;
        const Turma = await dbConnection('Turmas')
            .where('id', id)
            .select('instituicao_id')
            .first();

        if(Turma.instituicao_id == instituicao_logada)
        {
            await dbConnection('Alunos')
                .where('turma_id', id)
                .update('turma_id', null);

            await dbConnection('Turmas')
                .where('id', id)
                .delete()
                
            return resp.status(204).send();
        }

        return resp.status(401).json({ Erro: 'Acesso negado.' });
    }

}