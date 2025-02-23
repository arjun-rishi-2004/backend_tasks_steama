export const getUserQuery = () =>{
    let query = 
    `
    SELECT * FROM users
    WHERE id = $1 `
    return query;
}