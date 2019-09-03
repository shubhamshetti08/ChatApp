const services = require('../Services/service');
const token = require('../token');
const mailer = require('../Middleware/mailer');
/**
 * @desc login user  and validating the detailes
 * @param  -req,res - it contains the req and respond json file
 * @return json respond messege- data or error
 */
exports.login = (req, res) => {
    try {
        console.log('this is login controller');
        req.checkBody('email', 'email invalid').isEmail();
        // req.checkBody('password', 'password is invalid').isLength({
        //         min: 5
        //     }).withMessage('must be at least 5 chars long')
        //     .matches(/\d/).withMessage('must contain a number');
        req.checkBody('password', 'password is invalid').notEmpty().len(5, 30);


        errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.error = errors;
            response.success = false;
            return res.status(422).send(response);
        } else {

            services.login(req, (err, data) => {
                if (err) {
                    res.status(422).send(err);

                } else {
                    res.status(200).send(data)
                }
                // console.log(res);

            });
        }
    } catch (err) {
        res.send(err);
    }
}
/**
 * @desc register the user detailes and validating the detailes
 * @param  -req,res - it contains the req and respond json file
 * @return json respond messege- data or error
 */
exports.register = (req, res) => {
    try {
        console.log("data register");
        req.checkBody('firstName', 'Invalid first name').isAlpha();
        req.checkBody('lastName', 'Invalid last name').isAlpha();
        req.checkBody('email', 'Invalid email').isEmail();
        // req.checkBody('password', 'Invalid possword').notEmpty().len(5, 30);
        req.checkBody('password', 'Invalid possword').isLength({
            min: 8
        });
        errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.error = errors;
            response.success = false;
            console.log(response)
            return res.status(422).send(response);
        } else {
            services.register(req, (err, data) => {
                if (err) {
                    res.status(404).send(err);

                } else {
                    res.status(200).send(data)
                }
                //console.log(res);

            });
        }
    } catch (err) {
        res.send(err);
    }
}
exports.forgot = (req, res) => {
    try {
        req.checkBody('email', 'invalid email').isEmail();
        var response = {};
        var errors = req.validationErrors();
        if (errors) {
            response.errors = errors;
            response.success = false;
            return res.status(422).send(success);
        } else {
            services.forgot(req, (err, data) => {
                //console.log(data.id)
                if (err) {
                    res.status(404).send(err);

                } else {
                    console.log(data)
                    var payload = {
                        id: data._id
                    }
                    var tok = token.getRandomToken(payload).token;
                    const url = process.env.URL + 'forgot/' + tok;
                    console.log(url);
                    mailer.sendEmail(data.email, 'mail verification', 'verification link:\n' + url);
                    res.status(200).send(url)
                }

            });
        }
    } catch (err) {
        res.send(err);
    }
}
exports.reset = (req, res) => {
    try {
        req.checkBody('password', 'invalid password').notEmpty().len(5, 30);
        req.checkBody('confirmpassword', ' password should match').notEmpty().len(5, 30);
        var response = {};
        errors = req.validationErrors();
        if (req.body.password != req.body.confirmpassword)
            var errors = "password mismatch";
        if (errors) {
            response.errors = errors;
            response.success = false;
            return res.status(422).send(response);
        } else {
            services.reset(req, (err, data) => {
                if (err) {
                    res.status(404).send(err);
                } else {
                    res.status(200).send(data);
                }
            })
        }
    } catch (err) {
        res.send(err);
    }
}
exports.getAllUseres = (req, res) => {
    try {
        
            services.getAllUseres(req, (err, data) => {
                if (err) {
                    res.status(404).send(err);
                } else {
                    res.status(200).send(data);
                }
            })
        } catch (err) {
            res.send(err);
        }
    }
