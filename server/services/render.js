const axios=require('axios');

exports.hoomeRoutes = (req, res) => {
    res.render('index');


}

exports.userList = (req, res) => {
//get request
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        console.log(response)
        res.render('list',{users:response.data})

    })
    .catch(err=>{
        res.send(err);
    })
    
}

exports.userUpdate = (req, res) => {
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('update',{user:userdata.data})

    })
    .catch(err=>{
        res.send(err);
    })

}
