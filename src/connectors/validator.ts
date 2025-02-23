import { Request, Response, NextFunction } from "express";


export const validateConnectorId = (req: Request, res: Response, next: NextFunction) => {
    const station_id = parseInt(req.params.id, 10);
  
    if (isNaN(station_id) || station_id <= 0) {
    res.status(400).json({ error: "Invalid station ID." });
    return;
    }
    next();
  };