import { Router, Request, Response } from "express";
import {  validateSessionId } from "./validator";
import { getSingleChargePoint, stopSession } from "./controller";

export const sessionRouter = Router();


const getSingleChargePointService = async (req: Request, res: Response) => {
    try {
        const charge_point_id = req.params.id;
        const result = await getSingleChargePoint(charge_point_id);
        if (!result) {
            res.status(400).json({ error: true, code: 400, data: null, message: "Charge Point Not Found" });
            return;
        }
        res.status(200).json({
            error: false,
            code: 200,
            data: result,
            message: "Charge Point  fetched successfully"
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
