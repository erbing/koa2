let router = require('koa-router')()

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: ' 登陆 - VueJs 中文社区 '
  };

  await ctx.render('login', {
  });
})
module.exports = router;