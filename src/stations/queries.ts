export const createChargingStationQuery = (hasTariff: boolean) => {
    if (hasTariff) {
        return `
            INSERT INTO stations (name, location, is_deleted, tariff_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
    } else {
        return `
            INSERT INTO stations (name, location, is_deleted)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
    }
};

export const getAllStationsQuery = () =>{
    let query = 
    `
    SELECT * FROM stations`
    return query;
}

export const getSingleStationsQuery = () =>{
    let query = 
    `
    SELECT * FROM stations Where id = $1`
    return query;
}


export const updateChargingStationQuery = () =>{
    let query = `
    UPDATE stations
    SET name = COALESCE($1, name),
        location = COALESCE($2, location),
        tariff_id = COALESCE($3, tariff_id),
        is_deleted = COALESCE($4, is_deleted)
    WHERE id = $5
    RETURNING *;
`;

return query
}