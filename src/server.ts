import './config/env';
import 'reflect-metadata';

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import * as swaggerDocument from './config/swagger.json';

import routes from './routes';

import './database';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server started on port ${process.env.PORT}!`);
});
