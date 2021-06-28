
const createRule = {
    username: {
        type: 'email',
    },
    // password: {
    //     type: 'password',
    //     compare: 're-password',
    // },
};

exports.create = async ctx => {
    // 如果校验报错，会抛出异常 
    try{
        ctx.validate(createRule);
        ctx.body = ctx.request.body;
    }catch(err) {
        console.log('/form.js [17]--1',err);
    }
};