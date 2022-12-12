import { Application } from "express";
import post from "./api/post";

function routes(app: Application):void{
  app.use('/api/posts', post);
}

export default routes;
