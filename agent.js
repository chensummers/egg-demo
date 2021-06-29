// const Subscriber = require('./lib/subscriber');

module.exports = agent => {
    // 启动时通知
    let start_time = Date.now()
    agent.messenger.on('egg-ready', () => {
        
        agent.messenger.sendToApp('start_action',Date.now() - start_time );
    });
    // 数据源refresh
    // const subscriber = new Subscriber();
    // // listen changed event, broadcast to all workers
    // subscriber.on('changed', () => agent.messenger.sendToApp('refresh', 'push'));


};