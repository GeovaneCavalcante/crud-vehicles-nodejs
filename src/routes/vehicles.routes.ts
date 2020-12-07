import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import VehiclesRespository from '../repositories/VehiclesRespository';
import CreateVehicleService from '../services/CreateVehicleService';
import UpdateVehicleService from '../services/UpdateVehicleService';
import DeleteVehicleService from '../services/DeleteVehicleService';

const vehiclesRouter = Router();

vehiclesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const vehiclesRepository = getCustomRepository(VehiclesRespository);

  const vehicle = await vehiclesRepository.findOne(id);
  return response.json(vehicle);
});

vehiclesRouter.get('/', async (request, response) => {
  const vehiclesRepository = getCustomRepository(VehiclesRespository);

  const vehicle = await vehiclesRepository.find();
  return response.json(vehicle);
});

vehiclesRouter.post('/', async (request, response) => {
  try {
    const { board, chassis, renavam, model, brand, year } = request.body;

    const createVehicle = new CreateVehicleService();
    const vehicle = await createVehicle.execute({
      board,
      chassis,
      renavam,
      model,
      brand,
      year,
    });
    return response.json(vehicle);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

vehiclesRouter.put('/:id', async (request, response) => {
  try {
    const { board, chassis, renavam, model, brand, year } = request.body;
    const { id } = request.params;

    const updateVehicle = new UpdateVehicleService();
    const vehicle = await updateVehicle.execute({
      id,
      board,
      chassis,
      renavam,
      model,
      brand,
      year,
    });
    return response.json(vehicle);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

vehiclesRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteVehicle = new DeleteVehicleService();
    const vehicle = await deleteVehicle.execute({ id });
    return response.json(vehicle);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default vehiclesRouter;
