module.exports = {
    getToken(app,obj) {
        return app.jwt.sign(obj, app.config.jwt.secret);
    },
    checkToken(app,token) {
        return app.jwt.verify(token, app.config.jwt.secret)
    }
}