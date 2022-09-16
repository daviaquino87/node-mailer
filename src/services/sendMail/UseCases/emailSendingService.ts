import transporter from "../../../config/nodemailer/nodemailer";

interface ISendMaill {
  destino: string;
  assunto: string;
  mensagem: string;
}

class EmailSendingService {
  async emailSendingService({ destino, assunto, mensagem }: ISendMaill) {
    const mailOption = {
      from: "cursodePhPP@gmail.com",
      to: destino,
      subject: assunto,
      text: mensagem,
    };

    const data = await transporter.sendMail(mailOption);

    return data;
  }
}

export default EmailSendingService;
