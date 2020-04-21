
exports.up = function(knex) {
    return knex.schema.createTable('Instituicoes', (instituicao) => {

        instituicao.string('id').primary().notNullable();

        instituicao.string('nome').notNullable();
        instituicao.string('cidade', 64).notNullable();
        instituicao.string('uf', 2).notNullable();
        instituicao.string('email').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTrable('Instituicoes');
};
