var router = require('koa-router')()
var mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/local')
console.log("Connected successfully to server");
var UserSchema = new mongoose.Schema({
      name:String,
      age:String
    })

var User =  mongoose.model('user',UserSchema);

// var User = mongoose.model('User')

router.get('/', async (ctx, next) => {

  ctx.state = {
    title: '用户列表信息'
  }

  // var user = new User({})

  var info = User.find({})
  console.log(info.find())
  // await next()
  await ctx.render('users', {
    info: info
  });
});

module.exports = router;
