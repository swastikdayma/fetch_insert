const express = require ("express")
const server = express()
 
const apiRouter = require("./route/api")



server.use(express.json())
server.use("/api",apiRouter)
server.listen(5000)