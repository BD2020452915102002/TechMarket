const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tuandat8103@gmail.com',
      pass: 'spso nytn vmny zdkm',
    },
});

exports.sendConfirmationEmail = (email, token) => {
    const mailOptions = { 
      from: 'TECHMARKET@test.com',
      to: email,
      subject: 'Confirm your account',
      text: `Please click the following link to confirm your account: 
  localhost:5000/api/confirm?token=${token}`,
    }; 

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Confirmation email sent: %s', info.messageId);
      });
}
