import { pool } from "../db/connectdb";
import { updateChargingConnectorQuery } from "./queries";


export const updateChargingConnector = async (connectorData: any,connector_id:any) => {
    const { charge_point_id, station_id, type,status } = connectorData;
    connector_id = parseInt(connector_id,10)
    const query = updateChargingConnectorQuery();
    const values = [charge_point_id, station_id, type,status,connector_id] ;

    let result;
    try{
         result = await pool.query(query, values);
    }
       catch(err){
           console.log(err);
       }
       return result?.rows?.length > 0 ? result.rows[0] : null;
    };