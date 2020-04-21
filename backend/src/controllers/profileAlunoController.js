const dbConnection = require('../database/connection');

module.exports = {

    async profile(req,resp)
    {
        const aluno_id = req.params.id;
        const [Aluno] = await dbConnection('Alunos')
            .join('Turmas', 'Turmas.id', '=', 'Alunos.turma_id')
            .select(['Turmas.*', 'Alunos.*'])
            // .join('Instituicoes', 'Instituicoes.id', '=', 'Turmas.instituicao_id')
        
        return resp.json(Aluno);
    }

}