var userdb=require('../model/model');

//create task
exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"content can not empty!"})
    return;
}
//new user
    const user=new userdb({
        task:req.body.task,
        description:req.body.description,
        status:req.body.status
    })
    //save 
    user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect('/');
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message|| "some error occured"
        });

    });
}
//read all/single task
exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        userdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message:"not found user with id"+id})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:"error retriving task with id"+id})
            })
    }else{
        userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error occured"})
    })
    }
    
}
//update task
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

//delete task
exports.delete = (req, res)=>{
    const id = req.params.id;

    userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}