import { EntityRepository, Repository } from 'typeorm';

import Vehicle from '../models/Vehicle';

@EntityRepository(Vehicle)
class VehiclesRespository extends Repository<Vehicle> {}

export default VehiclesRespository;
