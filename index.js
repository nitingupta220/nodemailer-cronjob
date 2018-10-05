const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
let nodemailer = require('nodemailer');

app = express();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nitingupta220@gmail.com",
    pass: "nitin@8087"
  }
});

cron.schedule("* * * * Thursday", function() {
  console.log("-----------------");
  console.log("Running Cron Job");
  let mailOptions = {
    from: "nitingupta220@gmail.com",
    to: "nitin16@navgurukul.org",
    subject: `hello`,
    text: `Hi, I'm using cron job`
  };
  transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
          throw error;
      } else {
          console.log('email sent');
      }
  })
});

app.listen(3120);
