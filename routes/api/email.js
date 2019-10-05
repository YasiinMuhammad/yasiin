const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

//******/ NODE MAILER /******//

router.post("/sendEmail", function(req, res) {
  //nodemailer send code
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ymtechStudio@gmail.com",
      pass: "Batman@5435"
    }
  });
  const mailOptions = {
    from: "ymtechStudio@gmail.com",
    to: "ymtechStudio@gmail.com",
    subject: `testing`,
    text: `Thank you. `
  };

  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });
});

