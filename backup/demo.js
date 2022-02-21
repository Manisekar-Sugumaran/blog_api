app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = {name: username}

   const atoken =  jwt.sign(user, process.env.ACCESS_TOKEN)
   res.json({accesstoken: atoken})

})




function authenticateToken(req, res, next){
        
    if (req.headers['auth']) {
        const access_token = req.headers['auth']
        const token = access_token && access_token.split(' ')[1]
    if (token === null) return res.sendStatus(401);
    
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
       if(err) return res.sendStatus(406)
       req.usename = user
       next()
   })    
    } else {
        res.status(401).send({ error: 'UnAuthorized Access' });
      }
    
      
}