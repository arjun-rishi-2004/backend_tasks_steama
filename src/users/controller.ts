import { pool } from "../db/connectdb";
import { getUserQuery } from "./queries";

export const getUserById = async(userId)=> {
    const query = getUserQuery();
    const params =  [userId] ;
    let result;
    try{
     result =await pool.query(query,params);
    }
    catch(err){
        console.log(err);
    }
    return result.rows.length > 0 ? result.rows[0] : null;
}