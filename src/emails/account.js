const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'mak.mayank.2002@gmail.com',
        subject: 'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendByeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'mak.mayank.2002@gmail.com',
        subject: 'Goodbye, dear user',
        text:` We will miss your presence ${name}. Do let us know what caused you to delete your account. Thank you`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}