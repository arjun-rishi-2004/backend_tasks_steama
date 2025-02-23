import { Router, Request, Response } from "express";
import {  validateSessionId, validateUserId } from "./validator";
import { getAllSessionsForUser, stopSession } from "./controller";

export const sessionRouter = Router();


const getAllSessionsForUserService = async (req: Request, res: Response) => {
    try {
        const user_id = req.params.id;
        const result = await getAllSessionsForUser(user_id);
        if (!result) {
            res.status(400).json({ error: true, code: 400, data: null, message: "Error fetchin Session" });
            return;
        }
        res.status(200).json({
            error: false,
            code: 200,
            data: result,
            message: "Sessions  fetched successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}

const stopSessionService = async (req: Request, res: Response) => {
    try {
        const session_id = req.params.id;
        const result = await stopSession(session_id);
        if (!result) {
            res.status(400).json({ error: true, code: 400, data: null, message: "Session Not Found" });
            return;
        }
        res.status(200).json({
            error: false,
            code: 200,
            data: result,
            message: "Session stopped successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}



sessionRouter.patch("/:id",validateSessionId,stopSessionService)
sessionRouter.get("/user/:id",validateUserId,getAllSessionsForUserService)
