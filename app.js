const express = require("express")
const app = express();
const cors = require("cors")
const bodyparcer= require("body-parser");
const Eventdata = require("./Eventdata");
const controls = require("./controller");

const eventdata = require("./Eventdata");

app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyparcer.urlencoded({extended : false}))
app.use(bodyparcer.json())

const createEvent = (req , res) =>{
    let NewEvent = new eventdata();
    NewEvent.title = req.body.title,
    NewEvent.description = req.body.description,
    NewEvent.location = req.body.location,
    NewEvent.startTime = req.body.startTime,
    NewEvent.endTime = req.body.endTime
    console.log(NewEvent);
    if(NewEvent.title == ""){
        res.json({
            "validation error" : 'title is required'
        })
    }else{
        NewEvent.save()
     
     res.json({
        NewEvent
    })

    }
     
}

// Routes 

app.post('/v1/events' ,(req,res)=>{
    res.status(201)
    console.log("creation called")
    createEvent(req , res)
   
   
})

app.get('/v1/events' , controls.allevents)

app.get('/v1/events/{id}' , controls.oneEvent)

app.put('/v1/events/{id}' , controls.updatevent)

app.delete('/v1/events/{id}' , controls.clearevent)







module.exports = app