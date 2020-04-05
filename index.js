const mailer = require('nodemailer');
const config = require('./config.json');

class SampleMailSender {

    async sendMail() {
        let transporter = mailer.createTransport({
            host: config.host,
            port: config.port,
            secure: config.secure,
            auth: {
                user: config.authUser,
                pass: config.authPassword
            },
            tls: {
                rejectUnauthorized: config.rejectUnauthorized
            }
        });

        let mailOptions = {
            from: config.from,
            to: config.recipe,
            subject: "Test mail subject",
            text: "Test mail body"
        };

        try{
            let result = await transporter.sendMail(mailOptions);
        }
        catch (e) {
            console.error("Error sending test mail", e);
        }

    }
}

new SampleMailSender().sendMail();
