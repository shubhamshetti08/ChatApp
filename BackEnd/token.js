const jwt=require('jsonwebtoken');



exports.getRandomToken = (payload) => {
   // console.log("token here");
    const obj = {
        token: jwt.sign({
            payload
        }, "dggds", {
            // expires in 24 hours
            expiresIn: 86400
        })
    }
    return obj;
}
