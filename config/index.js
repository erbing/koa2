var dev_env = require('./dev');
var test_env = require('./test');

module.exports = {
    dev: dev_env,
    test: test_env
}[process.env.NODE_ENV || 'dev']