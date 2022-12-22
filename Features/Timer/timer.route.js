const express = require("express");
const authMiddle = require("../../middlewares/auth.middleware");
const Timer = require("./timer.model");
const app = express.Router();
app.use(authMiddle)
app.get('/', async(req,res)=>{
    const {userID} = req.body;
    try{
        let data = Timer.find({userID}).populate('projectID',{_id : 0 , __v : 0 , userID : 0})
        if(data.length > 0){
         return  res.send({
              status:true,
              data
          })
        }
        else{
          return res.send({
              status:false,
              message : 'You dont any work on this project'
          })
    }
  }
  catch(e){
    return res.send({
        status:false,
        message : e.message
    })
  }
})

app.get('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        let data = Timer.find({projectID:id})
        if(data.length > 0){
         return  res.send({
              status:true,
              data
          })
        }
        else{
          return res.send({
              status:false,
              message : 'You dont any work on this project'
          })
    }
  }
  catch(e){
    return res.send({
        status:false,
        message : e.message
    })
  }
})


app.post('/:id', async(req,res)=>{
    const {id} = req.params;
    const userID = req.body.userID
    try{
        let data = Timer.create({...req.body , projectID : id , userID})
       
          return res.send({
              status:true,
              message : 'Posted successfully'
          })
  }
  catch(e){
    return res.send({
        status:false,
        message : e.message
    })
  }
})



app.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        let data = Timer.deleteOne({_id : id})
       
          return res.send({
              status:true,
              message : 'Deleted successfully'
          })
  }
  catch(e){
    return res.send({
        status:false,
        message : e.message
    })
  }
})





module.exports = app;
