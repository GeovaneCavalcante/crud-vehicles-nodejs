import { Router } from 'express';

import vehiclesRouter from './vehicles.routes';

const routes = Router();

routes.use('/vehicles', vehiclesRouter);

export default routes;
