import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });
import { pool } from './db/connectdb';
import { userRouter } from './users/router';
import { stationRouter } from './stations/router';
import { chargePointRouter } from './chargepoints/router';
import { connectorRouter } from './connectors/router';
import { sessionRouter } from './sessions/router';


const port = process.env.PORT;
const app = express();
app.use(express.json());

// const port = 3000;
app.use("/user",userRouter)
app.use("/station",stationRouter)
app.use("/chargepoint",chargePointRouter)
app.use("/connector",connectorRouter)
app.use("/session",sessionRouter)

app.get('/', async(req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});