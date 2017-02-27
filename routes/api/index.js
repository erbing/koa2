var router = require('koa-router')();
var user_router = require('./user_routers');

router.use( '/users', user_router.routes(), user_router.allowedMethods() )

module.exports = router;