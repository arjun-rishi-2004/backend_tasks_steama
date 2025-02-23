
export const getSingleChargePointQuery = () =>{
    let query = 
    `
    SELECT * FROM charge_points Where id = $1`
    return query;
}


export const deleteSingleChargePointQuery = () =>{
    let query = `
    UPDATE charge_points
    SET is_deleted = true
    WHERE id = $1
    RETURNING *;
`;
return query
}
