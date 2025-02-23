import { pool } from "../db/connectdb";
import { getAllSessionsForUserQuery, stopSessionQuery } from "./queries";


export const getAllSessionsForUser = async(user_id)=> {
    const query = getAllSessionsForUserQuery();
    const values = [user_id]
    let result;
    try{
     result =await pool.query(query,values);
    }
    catch(err){
        console.log(err);
    }
    return result.rows.length > 0 ? result.rows : null;
}



export const stopSession = async(session_id)=> {
    const query = stopSessionQuery();
    const values = [session_id]
    let result;
    try{
     result =await pool.query(query,values);
    }
    catch(err){
        console.log(err);
    }
    return result.rows.length > 0 ? result.rows[0] : null;
}
