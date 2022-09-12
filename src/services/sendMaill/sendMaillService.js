const { transporter } = require("../../config/nodemailer/nodemailler");

class EmailService {
  async sendEmailService(destino, assunto, mensagem) {
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

module.exports = { EmailService };
