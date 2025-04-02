import {
  FilterQuery,
  Model,
  ProjectionType,
  Types,
  UpdateQuery,
} from 'mongoose';

export class BaseRepository<Document, QueryMethods, InstanceMethods> {
  constructor(private model: Model<Document, QueryMethods, InstanceMethods>) {}

  async create(data: Document) {
    return this.model.create(data);
  }

  async findById(_id: string) {
    return this.model.findById(_id);
  }

  async findOne(
    query: FilterQuery<Document>,
    projection?: ProjectionType<Document>,
  ) {
    return this.model.findOne(query, projection);
  }

  async find(
    query: FilterQuery<Document>,
    projection?: ProjectionType<Document>,
  ) {
    return this.model.find(query, projection);
  }

  async updateById(
    _id: string | Types.ObjectId,
    update: UpdateQuery<Document>,
  ) {
    return this.model.updateOne({ _id }, update);
  }
  async updateOne(query: FilterQuery<Document>, update: UpdateQuery<Document>) {
    return this.model.updateOne(query, update);
  }

  async deleteById(_id: string | Types.ObjectId) {
    return this.model.deleteOne({ _id });
  }
  async deleteOne(query: FilterQuery<Document>) {
    return this.model.deleteOne(query);
  }
}
