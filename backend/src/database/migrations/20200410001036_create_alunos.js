
exports.up = function(knex) {
    return knex.schema.createTable('Alunos', (aluno) => {
        
        aluno.string('id').primary().notNullable();

        aluno.string('nome').notNullable();
        aluno.date('nascimento').notNullable();
        aluno.integer('idade').notNullable();

        aluno.integer('turma_id',1).unsigned();
        aluno.foreign('turma_id').references('id').inTable('Turmas');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Alunos');
};
