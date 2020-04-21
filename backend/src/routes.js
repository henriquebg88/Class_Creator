const express = require('express');
const instituicoesController = require('./controllers/instituicoesController');
const turmasConstroller = require('./controllers/turmasController');
const alunosController = require('./controllers/alunosController');
const sessionController = require('./controllers/sessionController');
const profileAlunoController = require('./controllers/profileAlunoController');

const routes = express.Router();

//  LOGIN

    routes.post('/session', sessionController.create);

//  INSTITUICOES

    routes.get('/instituicoes', instituicoesController.index);
    routes.post('/instituicoes', instituicoesController.create);

//  TURMAS

    routes.get('/turmas', turmasConstroller.index);
    routes.post('/turmas', turmasConstroller.create);
    routes.delete('/turmas/:id', turmasConstroller.delete);

// ALUNOS

    routes.get('/alunos', alunosController.index);
    routes.post('/alunos', alunosController.create);
    routes.delete('/alunos/:id', alunosController.delete);

// PERFIL ALUNO

    routes.get('/alunos/profile/:id', profileAlunoController.profile);

module.exports = routes;

/**
 * PARAMETROS
 * 
 * Query: Enviaros na URL pelo metodo GET               // request.query
 * Route: Identifica recursos (ex: site/usuarios:id)    // request.params
 * Body: Corpo da requisicao. Enviado pelo POST         // request.body
 */