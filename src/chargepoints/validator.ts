import { Request, Response, NextFunction } from "express";


export const validateChargePointId = (req: Request, res: Response, next: NextFunction) => {
    const charge_point_id = parseInt(req.params.id, 10);
  
    if (isNaN(charge_point_id) || charge_point_id <= 0) {
    res.status(400).json({ error: "Invalid charge_point ID." });
    return;
    }
    next();
  };