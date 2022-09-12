const express = require("express");
const {
  EmailController,
} = require("../services/sendMaill/sendMaillController");
const routes = express.Router();

const sendMail = new EmailController();

routes.post("/mesage", sendMail.SendEmailController);

module.exports = routes;
