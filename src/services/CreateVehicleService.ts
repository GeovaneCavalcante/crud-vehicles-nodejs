import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';

import Vehicle from '../models/Vehicle';
import VehiclesRespository from '../repositories/VehiclesRespository';

interface Request {
  board: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: string;
}

class CreateVehicleService {
  public async execute(request: Request): Promise<Vehicle> {
    const vehiclesRepository = getCustomRepository(VehiclesRespository);

    const schema = yup.object().shape({
      board: yup.string().required(),
      chassis: yup.string().required(),
      renavam: yup.string().required(),
      model: yup.string().required(),
      brand: yup.string().required(),
      year: yup.string().required(),
    });

    await schema.validate(request);

    const vehicle = vehiclesRepository.create(request);

    await vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default CreateVehicleService;
