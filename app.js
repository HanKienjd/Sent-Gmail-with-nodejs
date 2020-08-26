var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'kienp544@gmail.com',
        pass: 'kienpham12102000'
    }
}));

var mailOptions = {
    from: 'kienp544@gmail.com',
    to: 'truyenthongmaumatma@gmail.com',
    subject: 'Sending Email using Node.js[nodemailer]',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});