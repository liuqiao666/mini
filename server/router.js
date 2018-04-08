module.exports = (app, router)=>{
	let content = require('./controller/content');
	router
	.get('/example/:param', async(ctx, next) => {
		ctx.body = await content.example(ctx.params.param);
	});
}