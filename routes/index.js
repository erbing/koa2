var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'VueJs 中文社区'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
