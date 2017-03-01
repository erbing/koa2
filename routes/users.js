var router = require('koa-router')()
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var User = mongoose.model('User')

router.get('/', async (ctx, next) => {
  var user = new User({})
  await next()
  console.log(User.find({}))
  ctx.body = User.find({});
});

module.exports = router;
