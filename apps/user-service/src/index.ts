import { connectDB } from './infrastructure/database/config/mongoDB';
import { ExpressServer } from './infrastructure/server/express';

const expressServer = new ExpressServer();
connectDB();
expressServer.start();
