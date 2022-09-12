
![Logo](https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1)


# SendMail

Aplicação para envio de emails com NodeJS


## Documentação da API

#### Adiciona uma Compra

```http
  POST /mesage
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `destino` | `email` | **Obrigatório**. Destinatario do e-mail |
| `assunto` | `string` | **opciona**. Assunto do e-mail |
| `mensagem` | `string` | **opciona**. Texto do e-mail |



## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`EMAIL_HOST`

`EMAIL_PORT`

`EMAIL_USER`

`EMAIL_PASS`


## Referência

 - [NodeMailer](https://nodemailer.com/about/)
 
## Instalação

Importando e instalando dependências do projeto

```bash
  git clone https://github.com/daviaquino87/NodeMailer.git
```

```bash
 npm i 
```
    