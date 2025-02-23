import { Router, Request, Response } from "express";
import { createChargingStation, getAllStations, getSingleStation, updateChargingStation } from "./controller";
import { validateStationData, validateStationId } from "./validator";

export const stationRouter = Router();

const createChargingStationService = async (req: Request, res: Response) => {
    try {
        const stationData = req.body;
        console.log("stationData : ", stationData)
        const stationCreationResult = await createChargingStation(stationData);
        if (!stationCreationResult) {
            res.json({ error: true, code: 400, data: null, message: "User Not Found" });
            return;
        }
        res.json({
            error: false,
            code: 200,
            data: stationCreationResult,
            message: "Station created successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}


const getAllStationsService = async (req: Request, res: Response) => {
    try {

        const stationResult = await getAllStations();
        if (!stationResult) {
            res.status(400).json({ error: true, code: 400, data: null, message: "Stations Not Found" });
            return;
        }
        res.status(200).json({
            error: false,
            code: 200,
            data: stationResult,
            message: "Station fetched successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}

const getSingleStationService = async (req: Request, res: Response) => {
    try {
        const station_id = req.params.id;
        const stationResult = await getSingleStation(station_id);
        if (!stationResult) {
            res.status(400).json({ error: true, code: 400, data: null, message: "Station Not Found" });
            return;
        }
        res.status(200).json({
            error: false,
            code: 200,
            data: stationResult,
            message: "Station fetched successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}

const updateChargingStationService = async (req: Request, res: Response) => {
    try {
        const station_id = req.params.id;
        const stationData = req.body;
        console.log("stationData : ", stationData)
        const updatedStationResult = await updateChargingStation( stationData,station_id);
        if (!updatedStationResult) {
            res.json({ error: true, code: 400, data: null, message: "Station Not Found" });
            return;
        }
        res.json({
            error: false,
            code: 200,
            data: updatedStationResult,
            message: "Station updated successfully"
        });

    }
    catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            error: true, code: 400, data: null, message: error.message
        });
    }
}

stationRouter.post("/", validateStationData, createChargingStationService)
stationRouter.get("/",getAllStationsService)
stationRouter.get("/:id",validateStationId,getSingleStationService)
stationRouter.patch("/:id", validateStationId, updateChargingStationService);

