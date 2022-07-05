import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { getData } from "./getData.js"

const app = express();

const PORT = process.env.PORT|| 5001;

app.use(bodyParser.json());

app.get("/",(req, res) => 
    getData().then(a=>res.json(a))
);

app.listen(PORT,() => console.log("Server running!"));