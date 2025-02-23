export const updateChargingConnectorQuery = () =>{
    let query = `
    UPDATE connectors
    SET charge_point_id = COALESCE($1, charge_point_id),
        station_id = COALESCE($2, station_id),
        type = COALESCE($3, type),
        status = COALESCE($4, status)
    WHERE id = $5
    RETURNING *;
`;

return query
}