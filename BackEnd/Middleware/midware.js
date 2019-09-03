const jwt=require('jsonwebtoken');

/**
 * @desc it varify the token clicked same as user token or not by using secretkey
 * @param  -req,rs,next - it is a middleware 
 * @return returning if decrypted key matched  next callback else res callback
 */
exports.varify = (req, res, next) => {
    try{
    console.log("varify");
    var token = req.params.token;
    jwt.verify(token, "dggds", (err, payload) => {
        if (err) res.status(422).send(err);
        else {
            console.log(payload)
            req.decoded = payload;
            next();
        }
    })
}catch (e) {
    console.log(e);
}
}