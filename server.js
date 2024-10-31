const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Middleware для обработки данных формы
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Настройка транспортера Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Или используйте другую почтовую службу
    auth: {
        user: 'tretiakovcroissants@gmail.com', // Ваш email
        pass: 'your-password'         // Пароль от email
    }
});

// Обработчик POST запроса
app.post('/subscribe', (req, res) => {
    const { email } = req.body;
    
    const mailOptions = {
        from: 'tretiakovcroissants@gmail.com',   // Ваш email
        to: email,                      // Email пользователя
        subject: 'Спасибо за подписку!',
        text: 'Вы успешно подписались на рассылку новостей от TeaTime.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Произошла ошибка при отправке письма');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Письмо успешно отправлено');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
