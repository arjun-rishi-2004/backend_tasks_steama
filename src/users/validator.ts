import { Request, Response, NextFunction } from "express";


export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(req.params.id, 10);
  
    if (isNaN(userId) || userId <= 0) {
    res.status(400).json({ error: "Invalid user ID." });
    return;
    }
    next();
  };