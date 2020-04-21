
exports.up = function(knex) {
    return knex.schema.createTable('Turmas', (turma) => {

        turma.increments('id');

        turma.string('nome', 1);

        turma.string('instituicao_id').unsigned().notNullable();
        turma.foreign('instituicao_id').references('id').inTable('Instituicoes');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Turmas');
};
