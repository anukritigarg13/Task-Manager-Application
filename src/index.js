const express=require("express")
require('./db/mongoose.js')
const userRouter=require("./routers/user.js")
const taskRouter=require("./routers/task.js")

const app=express()

const port=process.env.PORT || 3000


// app.use((req,res,next)=>{
//     if(req.method==="GET"){
//         res.send("GET requests are forbidden")
//     }else{
//         next()
//     }

// })

// app.use((req,res,next)=>{
//     res.status(503).send("Site is under maintenance!")
// })




app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log("Server is up on PORT "+port)
})

const Task=require("./models/task")
const User=require("./models/user")
// const main=async()=>{
//     // const task=await Task.findById('5f1bc5b11c49752e140cf20f')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     //5f1bc2db541f66376801089f
//     //const user=await
//     const user=await User.findById('5f1bc2db541f66376801089f')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()



//5f1bc9700651c60dd8c4058e id of task of pranshu








// const jwt=require("jsonwebtoken")
// const myFunction=async ()=>{
//     const token =await jwt.sign({_id:"abc123"},"thisismynewcourse",{expiresIn:"7 days"})
//     console.log(token)
//     const data=jwt.verify(token,"thisismynewcourse")
//     console.log(data)

// }
// myFunction()