import { Router, Request, Response } from "express";
import { validateChargePointId } from "./validator";
import { deleteSingleChargePoint, getSingleChargePoint } from "./controller";

export const chargePointRouter = Router();


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

const deleteSingleChargePointService = async (req: Request, res: Response) => {
    try {
        const charge_point_id = req.params.id;
        const result = await deleteSingleChargePoint(charge_point_id);
        if (!result) {
            res.status(400).json({ error: true, code: 400, data: null, message: "Charge Point Not Found" });
            return;
        }
        res.status(200).json({
            error: false,
            code: 200,
            data: result,
            message: "Charge Point  deleted successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}



chargePointRouter.get("/:id",validateChargePointId,getSingleChargePointService)

chargePointRouter.delete("/:id",validateChargePointId,deleteSingleChargePointService)
