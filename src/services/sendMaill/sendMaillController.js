const { EmailService } = require("./sendMaillService");

class EmailController {
  async SendEmailController(request, response) {
    const { destino, assunto, mensagem } = request.body;

    if (!destino || !assunto || !mensagem) {
      return response
        .status(400)
        .json({ msg: "Todos os campos precisam estar preenchidos" });
    }

    try {
      const sendEmailService = new EmailService();
      const data = await sendEmailService.sendEmailService(
        destino,
        assunto,
        mensagem
      );
      return response.status(200).json({ data: data });
    } catch (e) {
      console.log("Error: ", e);
      return response.status(200).json({ error: e });
    }
  }
}

module.exports = { EmailController };
