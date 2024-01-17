import express from "express"
import mysql from "mysql"
import cors from 'cors'
const app = express()
const db = mysql.createConnection({
    host :"localhost",
    user:"root",
    password:"1234abcd@#$",
    database:"fasil"
})
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hellow this is the bakeend server of the hole time ")
})
app.get("/books",(req,res)=>{
    const q = "SELECT*FROM books"
    db.query(q,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })

})
app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
    const values =["titl from backe dack end","desc from backend","cover pic from backend"]
    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
})
app.listen(3001,()=>{
    console.log("the app is runing on the seconde part")
})