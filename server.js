const PORT = process.env.PORT || 4000;

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// For Deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.post("/post_data", (req, res) => {
  let { name, email, message } = req.body;

  details = {
    from: `${name} <personalwebsite@gmail.com>`,
    to: "vincemoschella04@gmail.com",
    subject: `From: ${email}`,
    html: `<p>${message}<p> <br/> <h6 style="margin-top:100px;">sent through personal website<h6>`,
  };

  // Define nodemailer transporter
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASS,
    },
  });

  // Send email using the details object, via tha nodemailer transporter
  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent");
    }
  });

  res.send("sent");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
