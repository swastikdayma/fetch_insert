const router = require("express").Router()

 



router.get("/",(req,res)=>{
    res.send("dfghjk")
})

const data = []

router.post("/insert",(req,res)=>{
     data.push(req.body)
     res.send({Message:"Succesfully insert"})
})

router.get("/data",(req,res)=>{
    res.send(data)
})



module.exports = router