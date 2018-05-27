const middleware = {
    testMiddleware: function(req, res, next) {
        console.log(new Date(), req.method, req.url);
        next();
    }
}

module.exports = middleware;
export default module.exports;