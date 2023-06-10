const users = require ('../utils/users')

function login (req, res) {
    const {email, password} = req.query;
    return users.find(user => user.email === email && user.password === password) 
    ? res.status(200).json({access: true})
    : res.status(200).json({access: false})
}

module.exports= login