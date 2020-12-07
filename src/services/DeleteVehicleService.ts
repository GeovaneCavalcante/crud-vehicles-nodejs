import { getCustomRepository } from 'typeorm';

import VehiclesRespository from '../repositories/VehiclesRespository';

interface Request {
  id: string;
}
interface Response {
  message: string;
  data: string;
}

class DeleteVehicleService {
  public async execute(request: Request): Promise<Response> {
    const vehiclesRepository = getCustomRepository(VehiclesRespository);

    await vehiclesRepository.delete(request.id);

    return {
      message: 'Delete operation success.',
      data: 'vehicle',
    };
  }
}

export default DeleteVehicleService;
