var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 titles'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
