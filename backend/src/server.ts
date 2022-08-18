import express, { Request, Response } from 'express';
import { AppError } from './errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response
      .status(error.statusCode)
      .json({ status: 'error', message: error.message });
  }

  console.log(error);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => console.log('Server running on port 3333'));
