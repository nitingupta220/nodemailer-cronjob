// Importing the required dependencies
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
let nodemailer = require("nodemailer");

app = express();

// specifying the mailOptions
let transporter = nodemailer.createTransport({
  // The service which will be used to send the emails
  service: "gmail",
  //   credentials to send emails
  auth: {
    user: "your-email-id",
    pass: "your-password"
  }
});

// Using node-cron to schedule a task which will run on given interval
// Here "* * * * *" refers to the time
// You can use different intervals like: - 
// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
cron.schedule("* * * * Thursday", function() {
  console.log("-----------------");
  console.log("Running Cron Job");
  let mailOptions = {
    from: "your-email-id",
    to: "recipient-email-id",
    subject: `hello`,
    text: `Hi, I'm using cron job`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log("email sent");
    }
  });
});

app.listen(3120);
