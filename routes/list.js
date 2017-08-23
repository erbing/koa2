var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '文章列表 -- VueJs 中文社区'
  };

  await ctx.render('list', {
  });
})
module.exports = router;