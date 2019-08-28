const nodemailer=require('nodemailer');
exports.sendEmail = (email, subject, text) => {
    console.log("sending mail")
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text
    }
    // console.log("fdhfdhgf",mailOptions);
   transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("message not sent", err);
        } else {
        
            console.log("messege sent", info.envelope)
        }
    })
}