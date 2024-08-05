data ={};
data.userDetials = require('../model/userDetilas.json');

const getAllUsers = (req,res)=>{
    res.json(data.userDetials);
}

const creatNewuser = (req,res)=>{
    res.json({
        'name':req.body.name,
        'email':req.body.email,
        'work':req.body.work
    })
}

const updateUser = (req,res)=>{
    res.json({
        'name':req.body.name,
        'email':req.body.email,
        'work':req.body.work
    })
}

const deletUser = (req,res)=>{
    res.json({'id':req.body.id})
  }
 const  getUser = (req,res)=>{
    res.json({'id':req.body.id})
  }

module.exports ={ getAllUsers, creatNewuser, updateUser, deletUser, getUser}