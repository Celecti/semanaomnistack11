const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

/** 
 * Rota / Recurso 
 */

/** 
 * Metodos HTTP  
 * 
 *  Get: Buscar uma informação no back-end
 *  Post: Criar uma informação no back-end
 *  Put: Alterar uma informação no back-end
 *  Delete: Deleta uma informação no back-end
 * 
 */

/** 
 * Tipos de parametros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros ,Paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/** 
 * SQL: SQLight, MySQL, PostGreSQL, Oracle, Microsoft SQL Server
 * NoSQL: mongoDB, CouchDB, etc  
 */

/** 
 * Driver: Select * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */





app.listen(3333);