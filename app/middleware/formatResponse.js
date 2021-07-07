module.exports = () => {
    return async function formatRes(ctx,next) {
        await next();
        let {body} = ctx;
        if(body) {
            if(body.status==200) {
                ctx.body = {
                    ...ctx.body,
                    success:true,
                    msg:'success'
                }
            }else {
                ctx.body = {
                    ...ctx.body,
                    success:false,
                }
            }
        }
    }
}