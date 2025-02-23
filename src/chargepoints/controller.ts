import { pool } from "../db/connectdb";
import { deleteSingleChargePointQuery, getSingleChargePointQuery } from "./queries";


export const getSingleChargePoint = async(charge_point_id)=> {
    const query = getSingleChargePointQuery();
    const values = [charge_point_id]
    let result;
    try{
     result =await pool.query(query,values);
    }
    catch(err){
        console.log(err);
    }
    return result.rows.length > 0 ? result.rows[0] : null;
}



export const deleteSingleChargePoint = async(charge_point_id)=> {
    const query = deleteSingleChargePointQuery();
    const values = [charge_point_id]
    let result;
    try{
     result =await pool.query(query,values);
    }
    catch(err){
        console.log(err);
    }
    return result.rows.length > 0 ? result.rows[0] : null;
}
