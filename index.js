import express from "express"
import {logger, testRouter} from "./controllers/accountsController.js"
const app = express()

const port = 3625
app.listen(3625, () => console.log(`listenging at ${port}`))

app.use(express.json())
app.use(logger)





