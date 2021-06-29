// app/schedule/force_refresh.js
exports.schedule = {
    interval: '15h',
    type: 'all', // run in all workers
};

exports.task = async ctx => {
    await ctx.service.source.update();
    ctx.app.lastUpdateBy = 'force';
};