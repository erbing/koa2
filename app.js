const Koa = require('koa');
const app = new Koa();

const bodyparser = require('koa-bodyparser')();
const router = require('koa-router')();

const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const logger = require('koa-logger');

// 路由
const index = require('./routes/index');
const users = require('./routes/users');
const login = require('./routes/login');
const register = require('./routes/register');
const list = require('./routes/list');



// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(require('koa-static')(__dirname + '/public')));

// app.use(views(__dirname + '/views', {
//   extension: 'jade'
// }));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());
router.use('/register', register.routes(), register.allowedMethods());
router.use('/list', list.routes(), list.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  log.error('server error', err, ctx);
});


module.exports = app;