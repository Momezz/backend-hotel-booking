import { Application } from "express";
import hotel from './api/hotel'

function routes(app: Application): void{
    app.use('api/hotels', hotel)

}

export default routes;
