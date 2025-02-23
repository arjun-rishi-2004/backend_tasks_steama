
export const getSingleChargePointQuery = () =>{
    let query = 
    `
    SELECT * FROM charge_points Where id = $1`
    return query;
}


export const stopSessionQuery = () =>{
    let query = `
    UPDATE sessions
    SET status = 'COMPLETED',
    end_time =NOW()

    WHERE id = $1
    RETURNING *;
`;
return query
}
