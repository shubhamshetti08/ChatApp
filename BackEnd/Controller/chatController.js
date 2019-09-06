const chatServices = require('../Services/chatServices');
module.exports.getUserMsg = (req, res) => {

    chatServices.getUserMsg(req, (err, data) => {
        console.log('controller yes');
        var response = {};
        if (err) {
            // response.err = err;
            // response.success = false;
            res.status(404).send(err);
        } else {
            // response.err=data;
            // response.success = true;
            res.status(200).send(data);
        }
    })
}
exports.addMsg = (req, callback) => {
    chatServices.addMsg(req, (err, data) => {
        console.log('controller add msg yes');
        var response = {};
        if (err) {
            // response.err = err;
            // response.success = false;
            // res.status(404).send(response);
            return callback(err)

        } else {
            // response.success = true;
            // res.status(200).send(response);
            return callback(null, data);
        }
    })
}