import { Request, Response, NextFunction } from "express";


export const validateSessionId = (req: Request, res: Response, next: NextFunction) => {
    const session_id = parseInt(req.params.id, 10);
  
    if (isNaN(session_id) || session_id <= 0) {
    res.status(400).json({ error: "Invalid session_id ID." });
    return;
    }
    next();
  };

  
  export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
    const user_id = parseInt(req.params.id, 10);
  
    if (isNaN(user_id) || user_id <= 0) {
    res.status(400).json({ error: "Invalid user_id ID." });
    return;
    }
    next();
  };