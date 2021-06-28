exports.index = async ctx => {
    console.log('/search.js [1]--1',ctx);
    ctx.body = `search: ${ctx.query.name}`;
};

exports.info = async ctx => {
    console.log('/search.js [1]--1--info',ctx);
    ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`;
};