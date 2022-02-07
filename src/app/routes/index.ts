import { Application, Request, Response } from "express";

import Responses from "../middlewares/responses";

const response = new Responses();

/**
 * class
 */
class Routes {
  /**
   * Router
   * @author Ntavigwa Bashombe
   * @since 0.001
   *
   * @param {Application} app - express application
   * @return {void} returns nothing
   * @memberof Routes
   */
  public router = (app: Application): any => {
    app.get("/", (req: Request, res: Response) => {
      response.ok(200, "Home Page", res);
    });
    app.get("/about", (req: Request, res: Response) => {
      response.ok(200, "About Us", res);
    });
    app.get("/contact", (req: Request, res: Response) => {
      response.ok(200, "Contact Us", res);
    });
    app.all("*", (req: Request, res: Response) => {
      response.error(404, "Page Not Found", res);
    });
  };
}

export const route = new Routes().router;
