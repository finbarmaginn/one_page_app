module.exports = {
    'Demo test Google' : function (browser) {
        browser
            .url('http://localhost:8080/webpack-dev-server/')
            .waitForElementVisible('body', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};