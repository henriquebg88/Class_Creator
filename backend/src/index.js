const express = require(`express`);
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); 
app.use(express.json()); //Para o express entender o envio POST no formato JSON
app.use(routes);

const porta = 3333;


app.listen(porta, () => {
    console.log('\x1b[32m%s\x1b[0m',`> Servidor Backend iniciado na porta ${porta}`);
    
});


/** PORTA OCUPADA?
 * 
 *  $ lsof -i :3333
 * 
 *  Mostrara os locais usando a porta. Pegue o PID e insira o numero abaixo:
 * 
 *  $ kill 25408
 * 
 * ou killall node
 */

