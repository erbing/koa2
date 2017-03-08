var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 article list'
  };

  await ctx.render('article', {
  });
})
module.exports = router;
