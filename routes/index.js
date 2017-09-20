var router = require('koa-router')();
var methods = require('../mongo/index.js')

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'VueJs 中文社区'
  };

  var docs = [{
    title : 'koa2 链接渲染 但是项目编写起来很难受',
    createdTime: '2017/09/9/19',
    avator: 'https://avatars1.githubusercontent.com/u/9959097?v=4&s=460'
  }]

  await ctx.render('index', {
    "list" : docs
  });

  methods.findAll('document', (docs) => {
    console.log(docs)
  })

})
module.exports = router;
