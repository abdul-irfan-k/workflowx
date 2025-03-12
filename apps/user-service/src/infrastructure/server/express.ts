import { createServer, Server } from 'http';
import express, { Application } from 'express';

import { PORT } from '../../config/env';
import logger from '../../utils/logger';

export class ExpressServer {
  private app: Application;
  private server: Server;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);

    this.configureMiddlewares();
    this.configureRoutes();
    this.configureErrorHandlers();
  }

  private configureRoutes(): void {}

  private configureMiddlewares(): void {}

  private configureErrorHandlers(): void {}

  public start() {
    this.server.listen(PORT, () => {
      logger.info('Server is running on port ' + PORT);
    });
  }
}
