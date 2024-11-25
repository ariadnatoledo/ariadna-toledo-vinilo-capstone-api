import dotenv from "dotenv";
dotenv.config();

import initKnex from "knex";
import configuration from "./knexfile.js";
import express from 'express';

const knex = initKnex(configuration);
const app = express()
const PORT = 3306

app.use('/assets', express.static('src/assets'));


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Vinilo Capstone!")
})

app.listen(PORT, () => {
    console.log(`Port listening to ${PORT}`)
})