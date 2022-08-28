   const {join} = require('path')

   exports.config = {
        hostname: 'localhost',
        port: 4723,
        path: '/wd/hub',
        waitforTimeout: 15000,
        connectionRetryTimeout: 120000,
        specs: [
            './test/specs/**/*.js'
        ],
        framework:'mocha',
        capabilities:[{
            "platformName": "Android",
            "appium:platformVersion": "9.0",
            "appium:deviceName": "ebac-qe",
            "appium:automationName": "UiAutomator2",
            "appium:app": "C:\\Users\\Felipe\\Documents\\Ebac\\Tarefa16\\TESTES-MOBILE-EBAC-SHOP\\test\\app\\android\\Android-NativeDemoApp-0.4.0.apk",
            "appium:appWaitActivity": ".MainActivity"
        }]
}