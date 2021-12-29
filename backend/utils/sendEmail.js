const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {

  const transporter = nodeMailer.createTransport({
    //host: process.env.SMTP_HOST,
    //port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    secure:false,
    port:25,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  console.log(mailOptions)
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
