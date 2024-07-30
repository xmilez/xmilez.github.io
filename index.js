// Создаем структуру HTML и стили с использованием JavaScript
document.write(`
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ваша Личная Веб-Страница</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: Roboto, sans-serif;
            background-color: #e0f7e9; /* Светло-зеленый */
            color: #333;
            margin: 0;
            padding: 0;
             line-height: 1.6;
        }
        .container {
            width: 90%;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            text-align: center;
            padding: 50px 0;
             background-color: #004d40; /* Темно-зеленый */
            color: white;
              position: relative;
        }
        h1 {
            margin: 0;
            font-size: 3em;
            letter-spacing: 2px;
        }
        section {
            margin: 50px 0;
        }
        .contact-info, .bot-info {
          background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }
        footer {
             text-align: center;
            padding: 20px;
            background-color: #004d40; /* Темно-зеленый */
            color: white;
        }
        a {
              color: #00796b; /* Средний зеленый */
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <h1>Ваши Услуги</h1>
    </header>
    <div class="container">
        <section>
            <h2>Наши Услуги</h2>
            <p>Мы предлагаем помощь в предварительной оценке проектной документации перед направлением на экспертизу проектной документации. Консультации по вопросам создания мест приложения труда (МПТ), расчет площади МПТ, помощь в разработке технологических решений.</p>
        </section>
        <section class="contact-info">
            <h2>Контактная информация</h2>
            <p>Для предложений о сотрудничестве: <a href="mailto:info@vund.ru">info@vund.ru</a></p>
        </section>
        <section class="bot-info">
            <h2>Робот для предварительной оценки стоимости услуг и заказ звонка</h2>
            <p>Вы можете воспользоваться нашим ботом: <a href="https://t.me/vundrubot" target="_blank">t.me/vundrubot</a></p>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 Ваше Имя. Все права защищены.</p>
    </footer>
</body>
</html>
`);
