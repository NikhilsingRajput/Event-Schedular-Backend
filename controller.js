const eventdata = require('./Eventdata');

const oneEvent = (req , res )=>{
    let eventid = req.body.id;
    console.log(eventid)
    eventdata.findById(eventid)
    .then(response=>{
        res.status(200)
        res.json({
            response
        })
    })
}

const allevents = (req , res , next) =>{
eventdata.find()
.then(response => {
    res.status(200)
    res.json({
        response
    })
}).catch(()=>{
    res.json({
        error : "error occured while getting all data"
    })
})
}

const updatevent = (req , res) => {
    let eventid = req.body.id;
    let updateddata = {
        title : req.body.title,
        description : req.body.description,
        location : req.body.location,
        startTime : req.body.startTime,
        endTime : req.body.endTime
    }
    eventdata.findById(eventid)
    .then((response)=>{
        res.status(200)
        res.json({
            response
        }).catch(()=>{
            res.status(404)
            res.json({
               error : "Id not found to update or error occured"
            })
        })
    })
}

const clearevent = (req , res ) => {
    let eventid = req.body.id;
    eventdata.findById(eventid)
    .then(()=>{
        res.status(204)
        res.json({
            success : "event deleted "
        })
    }).catch(()=>{
        res.json({
            error : "error while deleting"
        })
    })
}

module.exports = {
oneEvent , allevents , updatevent , clearevent
}