const express = require("express");
const nodemailer = require("nodemailer"); //module send emails
const multiparty = require("multiparty"); //parses form data for node apps
require("dotenv").config(); //allows use of env variables

const app = express();

app.route("/contact").get( (req, res) =>{
res.sendFile(process.cwd() + "./contact.html");
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
  },  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
