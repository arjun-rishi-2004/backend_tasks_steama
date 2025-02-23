import { Request, Response, NextFunction } from "express";

export const validateStationData = (req: Request, res: Response, next: NextFunction) => {
    console.log("req: ",req.body)
    const { name, location, tariff_id } = req.body;

    if (!name || typeof name !== "string") {
        res.status(400).json({ error: true, code: 400, message: "Invalid or missing 'name'" });
        return;
    }

    if (!location || typeof location !== "string") {
        res.status(400).json({ error: true, code: 400, message: "Invalid or missing 'location'" });
        return
    }

    if (tariff_id !== undefined && typeof tariff_id !== "number") {
        res.status(400).json({ error: true, code: 400, message: "'tariff_id' must be a number or null" });
        return
    }

    next();
};


export const validateStationId = (req: Request, res: Response, next: NextFunction) => {
    const station_id = parseInt(req.params.id, 10);
  
    if (isNaN(station_id) || station_id <= 0) {
    res.status(400).json({ error: "Invalid station ID." });
    return;
    }
    next();
  };