const express = require("express")
const connectDB = require("./config/connectDB")
const User = require("./models/User")
require('dotenv').config({path:"./config/.env"})
const app = express()

connectDB()
// parsing into json
app.use(express.json())

// POST PUT GET DELETE

// POST 

app.post("/addUsers",async(req,res)=>{
    const {name,email,phone,avatar}=req.body
    try {
        const newUser = new User({
            name,
            email,
            phone,
            avatar
        })
        await newUser.save()
        res.send(`${newUser.name} registered successfully!`)
    } catch (error) {
        console.log(error.message)
    }
})

// GET 
app.get("/getUsers",async(req,res)=>{
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error.message)
    }
})

// delete
app.delete("/deleteUser/:id",async(req,res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.send(`${deletedUser.name} deleted!`)
    } catch (error) {
        console.log(error.message)
    }
})


// edit user
app.put("/editUser/:id",async(req,res)=>{
    try {
        const editedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(editedUser)
    } catch (error) {
        console.log(error.message)
    }
})

const PORT = process.env.PORT || 4000

app.listen(PORT, err=>err?console.log(err):console.log(`server is running on port ${PORT}`))