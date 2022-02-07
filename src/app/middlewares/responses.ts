import { Response } from "express";

class Responses {
  /**
   * ok
   * @author Ntavigwa Bashombe
   * @since 0.001
   *
   * @param {number} status - response status
   * @param {string} message - response message
   * @param {Response} res - Response
   * @return {Response} returns response
   * @memberof Responses
   */
  public ok = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };

  /**
   * error
   * @author Ntavigwa Bashombe
   * @since 0.001
   *
   * @param {number} status - response status
   * @param {string} message - response message
   * @param {Response} res - Response
   * @return {Response} returns response
   * @memberof Responses
   */
  public error = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };
}

export default Responses;
