const crypto = require('crypto');
const dbConnection = require('../database/connection');

module.exports = {

    async create(req,resp)
    {
        const { nome, nascimento, turma_id } = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const idade = 10; //Criar calculo

        await dbConnection('Alunos').insert(
            {
                id,
                nome,
                nascimento,
                idade,
                turma_id
            }
        );

        return resp.json({ id });
    },

    async index(req, resp)
    {
        const { page = 1 } = req.query;
        const turma_id = req.headers.turma;
        const [count] = await dbConnection('Alunos').count();
        const alunos = await dbConnection('Alunos')
            .where('turma_id', turma_id)
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        resp.header('Total_de_alunos', count['count(*)']);
        return resp.json(alunos);
    },

    async delete(req,resp)
    {
        console.log('Rota deletar chamada');
        const { id } = req.params;
        const instituicao_id = req.headers.authorization;
        const [Aluno] = await dbConnection('Alunos').where('id', id);
        const [Turma] = await dbConnection('Turmas').where('id', Aluno.turma_id);

        if(instituicao_id == Turma.instituicao_id)
        {
            await dbConnection('Alunos').where('id', id).delete();
            return resp.status(204).send();
        }
        
        return resp.status(401).json({ Error : 'Acesso negado.'});
    }

}

/*
*   CALCULAR IDADE
* 
*   var nascimento = new Date( $('input:Date').valueAsNumber );
*   var diferenca = new Date( (Date.now() - nascimento) );
*   var idade = diferenca.getFullYear() - 1970;
* 
*/