import { Router, Request, Response } from "express";
import { validateConnectorId } from "./validator";
import { updateChargingConnector } from "./controller";

export const connectorRouter = Router();


const updateChargingConnectorService = async (req: Request, res: Response) => {
    try {
        const connector_id = req.params.id;
        const connectorData = req.body;
        const result = await updateChargingConnector( connectorData,connector_id);
        if (!result) {
            res.json({ error: true, code: 400, data: null, message: "Connector Not Found" });
            return;
        }
        res.json({
            error: false,
            code: 200,
            data: result,
            message: "Connector updated successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}


    connectorRouter.patch("/:id", validateConnectorId, updateChargingConnectorService);

