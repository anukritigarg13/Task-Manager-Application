//CRUD- Create,read,update and delete

//const mongodb=require("mongodb")
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID
//to use destructuring

const {MongoClient,ObjectID}=require("mongodb")

const connectionURL="mongodb://127.0.0.1:27017"
const databaseName="task-manager"



// const id=new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database")
    }
    const db=client.db(databaseName)
    // db.collection('Users').insertOne({
    //     _id:id,
    //     name:"Tanishq",
    //     age:21
    // },(error,result)=>{
    //     if(error){
    //         console.log("Unable to add user")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('Users').insertMany([{
    //     name:'Anukriti',
    //     age:21

    // },{
    //     name:"Pranshu",
    //     age:12
    // },{
    //     name:"Rimjhim",
    //     age:18
    // }],(error,results)=>{
    //     if(error){
    //         return console.log("Unable to insert documents")
    //     }
    //     console.log(results.ops)

    // })
    // db.collection('Task Collections').insertMany([{
    //     description:"Clean Room",
    //     completed:true

    // },{
    //     description:"Call Alan",
    //     completed:false
    // },{
    //     description:"Eat Lunch",
    //     completed:false
    // }],(error,result)=>{
    //     if(error){
    //         return console.log("Unable to add documents")
    //     }
    //     console.log(result.ops)

    // })


    // db.collection("Users").findOne({_id:new ObjectID("5f12aa99fd77e847645c4053")},(error,result)=>{
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(result)
    // })
    // db.collection("Users").find({age:21}).toArray((error,result)=>{
    //     console.log(result)
    // })
    // db.collection("Users").find({age:21}).count((error,result)=>{
    //     console.log(result)
    // })
    db.collection("Task Collections").findOne({_id:new ObjectID("5f12bbf6130a455c3c4430bf")},(error,result)=>{
        if(error){
            return console.log("Unable to fetch data")
        }
        console.log(result)
    })
    db.collection("Task Collections").find({completed:false}).toArray((error,result)=>{
        console.log(result)
    })

})