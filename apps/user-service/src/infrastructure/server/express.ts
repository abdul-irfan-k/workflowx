import { createServer, Server } from 'http';
import express, { Application } from 'express';
import helmet from 'helmet';

import { PORT } from '@config/env';
import logger from '@utils/logger';
import { AuthRoutes } from '@infrastructure/http/routes/authRoutes';

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

  private configureMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private configureRoutes(): void {
    this.app.use('/api/v1/users/', AuthRoutes.getRoutes());
  }

  private configureErrorHandlers(): void {}

  public start() {
    this.server.listen(PORT, () => {
      logger.info('Server is running on port ' + PORT);
    });
  }
}
