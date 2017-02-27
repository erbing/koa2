exports.getUser = async (ctx, next) => {
    ctx.body = {
        username: '冰宝',
        age: 30
    }
}

exports.registerUser = async (ctx, next) => {
    console.log('resiterUser', ctx.request.body);
}