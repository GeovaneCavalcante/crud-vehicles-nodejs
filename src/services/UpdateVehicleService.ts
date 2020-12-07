import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';

import VehiclesRespository from '../repositories/VehiclesRespository';

interface Request {
  id: string;
  board: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: string;
}

interface Response {
  message: string;
  data: string;
}

class UpdateVehicleService {
  public async execute(request: Request): Promise<Response> {
    const vehiclesRepository = getCustomRepository(VehiclesRespository);

    const schema = yup.object().shape({
      id: yup.string().required(),
      board: yup.string().required(),
      chassis: yup.string().required(),
      renavam: yup.string().required(),
      model: yup.string().required(),
      brand: yup.string().required(),
      year: yup.string().required(),
    });

    await schema.validate(request);

    await vehiclesRepository.update(request.id, request);

    return {
      message: 'Update operation success.',
      data: 'vehicle',
    };
  }
}

export default UpdateVehicleService;
