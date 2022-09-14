import Router from "express";
import EmailSendingController from "../services/sendMail/UseCases/emailSendingController";
const routes = Router();

const sendMail = new EmailSendingController();

routes.post("/sendemail", sendMail.emailSendingController);

export default routes;
