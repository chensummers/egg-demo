module.exports = app => {
    // 启动agent ddsd
    app.messenger.on('start_action', data => {
        app.logger.info(`start agent runtime by ${data}`);
    });
    // 定时任务
    app.messenger.on('refresh', by => {
        app.logger.info('start update by %s', by);
        // create an anonymous context to access service
        const ctx = app.createAnonymousContext();
        ctx.runInBackground(async () => {
            await ctx.service.source.update();
            app.lastUpdateBy = by;
        });
    });
};