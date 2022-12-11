import { Application } from 'express';
import booking from './api/booking';

function routes(app: Application): void {
  app.use('/api/bookings', booking);
}

export default routes;
