describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверил цвет кнопки

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажали войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авторизации видим текст
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })

    it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            
            cy.get('#forgotEmailButton').click(); //Нажимаю восстановить пароль

            cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту для восстановления
            cy.get('#restoreEmailButton').click(); //Нажимаю отправить код

            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
            cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя

    }) 
    it('Верный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверил цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввели неправильный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После нажатия кнопки видим текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
   })
    it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверил цвет кнопки

        cy.get('#mail').type('german@dolnikovs.ru'); // Ввели неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После нажатия кнопки видим текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверил цвет кнопки

        cy.get('#mail').type('germandolnikovs.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // После нажатия кнопки видим текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверил цвет кнопки

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин заглавными и строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После нажатия кнопки видим текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })
}) 
    

