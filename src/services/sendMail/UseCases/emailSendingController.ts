import { Request, Response } from "express";
import ISendMaillPrams from "../Interfaces/IEmailParametersInterface";
import EmailSendingService from "./emailSendingService";

class EmailSendingController {
  async emailSendingController(request: Request, response: Response) {
    console.log(request);
    const { destino, assunto, mensagem }: ISendMaillPrams = request.body;

    if (!destino || !assunto || !mensagem) {
      return response
        .status(400)
        .json({ msg: "Todos os campos precisam estar preenchidos" });
    }

    try {
      const sendEmailService = new EmailSendingService();
      const data = await sendEmailService.emailSendingService({
        destino,
        assunto,
        mensagem,
      });
      return response.status(200).json({ data: data });
    } catch (e) {
      console.log("Error: ", e);
      return response.status(200).json({ error: e });
    }
  }
}

export default EmailSendingController;
