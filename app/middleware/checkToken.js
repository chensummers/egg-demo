const {checkToken} = require('../../utils/tools.js');

module.exports = () => {
    return async function checkToken1(ctx, next) {
        console.log('/checkToken.js [4]-1',ctx.session,ctx.session.token,ctx.request.header.token);
        try{
            if(ctx.request.header.token) {
                const {id} = await checkToken(ctx.app,ctx.request.header.token)
                ctx.app.userid = id
                await next();
            }
        }catch(err) {
            ctx.body={
                status:50002,
                msg:'未登录'
            }
            console.log('/checkToken.js [17--]1',err);
        }
    };
};