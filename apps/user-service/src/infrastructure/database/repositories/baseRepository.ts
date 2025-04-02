import { Model } from 'mongoose';

export class BaseRepository<Entity, QueryMethods, InstanceMethods> {
  constructor(private model: Model<Entity, QueryMethods, InstanceMethods>) {}

  async findById(_id: string) {
    return this.model.findById(_id);
  }
}
