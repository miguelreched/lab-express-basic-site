const express = require("express")
const app = express()

app.use(express.static("public"))

const port = 3001

app.get("/home", (req, res)=>{
    res.send("Welcome th everybody")
})

app.listen(port, ()=>{
    
})