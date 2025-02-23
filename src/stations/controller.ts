import { pool } from "../db/connectdb";
import { createChargingStationQuery, getAllStationsQuery, getSingleStationsQuery, updateChargingStationQuery } from "./queries";

export const createChargingStation = async (stationData: any) => {
    const { name, location, tariff_id } = stationData;
    const is_deleted = false;

    const query = createChargingStationQuery(tariff_id !== undefined);
    const values = tariff_id !== undefined ? [name, location, is_deleted, tariff_id] : [name, location, is_deleted];

    const result = await pool.query(query, values);
    return result.rows[0];
};


export const getAllStations = async()=> {
    const query = getAllStationsQuery();
    let result;
    try{
     result =await pool.query(query);
    }
    catch(err){
        console.log(err);
    }
    return result.rows.length > 0 ? result.rows : null;
}

export const getSingleStation = async(station_id)=> {
    const query = getSingleStationsQuery();
    const values = [station_id]
    let result;
    try{
     result =await pool.query(query,values);
    }
    catch(err){
        console.log(err);
    }
    return result.rows.length > 0 ? result.rows[0] : null;
}

export const updateChargingStation = async (stationData: any,station_id:any) => {
    const { name, location, tariff_id,is_deleted } = stationData;
    station_id = parseInt(station_id,10)
    const query = updateChargingStationQuery();
    const values = [name, location, tariff_id,is_deleted,station_id] ;

    let result;
    try{
         result = await pool.query(query, values);
    }
       catch(err){
           console.log(err);
       }
       return result.rows.length > 0 ? result.rows[0] : null;
    };