const jwt = require("jsonwebtoken");
module.exports = {
    sign: (body,secret) =>{
        return jwt.sign(body,secret);
    }
} 