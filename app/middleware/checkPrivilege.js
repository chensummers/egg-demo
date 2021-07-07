
const {checkToken} = require('../../utils/tools.js');

module.exports = () => {
    return async (ctx, next) => {
        // console.log('/checkToken.js [4]-1',ctx.session,ctx.session.token,ctx.request.header.token);
        try{
            const {privilege} = await checkToken(ctx.app,ctx.session.token)
            if(privilege===0){
                await next();
            }else{
                ctx.body={
                    status:50003,
                    msg:'没权限'
                }
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