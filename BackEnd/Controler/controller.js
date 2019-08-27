const services=require('../Services/service');

exports.login=(req,res)=>{
    console.log('this is login controller');
    req.checkBody('email','email invalid').isEmail();
    req.checkBody('password','password is invalid').isLength({ min: 5 }).withMessage('must be at least 5 chars long')
    .matches(/\d/).withMessage('must contain a number');


    errors=req.validationErrors();
    var response = {};
    if (errors) {
        response.error = errors;
        response.success = false;
        return res.status(422).send(response);
    }else{

    services.login(req,(err,data)=>{
        if(err)
        {
            res.status(404).send(err);

        }else{
            res.status(200).send(data)
        }
        console.log(res);

    });
    }
}
exports.register=(req,res)=>{
    console.log("data register");
    req.checkBody('firstName', 'Invalid first name').notEmpty().isAlpha();
    req.checkBody('lastName', 'Invalid last name').notEmpty().isAlpha();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('password', 'Invalid possword').notEmpty().len(5, 30);
    errors=req.validationErrors();
    var response = {};
    if (errors) {
        response.error = errors;
        response.success = false;
        return res.status(422).send(response);
    }else{
    services.register(req,(err,data)=>{
        if(err)
        {
            res.status(404).send(err);

        }else{
            res.status(200).send(data)
        }
        //console.log(res);

    });
}
}