let router = require('koa-router')()

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: ' 注册 - VueJs 中文社区 '
  };

  await ctx.render('register', {
  });
})
module.exports = router;