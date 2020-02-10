import Koa, { Context, DefaultState } from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import views from 'koa-views';

import { helmetContext } from './components/App';
import { RenderServerApp, RenderServerError } from './components/Renderers';

const app = new Koa();
const router = new Router<DefaultState, Context>();

app.use(views(`${ __dirname }/templates`, { map: { html: 'handlebars' } }));

app.use(serve('./public'));

app.use(async (ctx, next) => {
	try {
		await next();
	} catch (error) {
		const content = RenderServerError(error);

		ctx.status = error.status || 500;

		await ctx.render('error', { content });
	}
});

router.get('*', async (ctx, next) => {
	const content = RenderServerApp(ctx);
	const { helmet: { title, scripts } } = helmetContext;

	await next();
	await ctx.render('index', { content, title, scripts });
	// ctx.throw(500, 'ggggg')
});

app.use(router.routes());

app.listen(3000, () => {
	console.log(`Listening on ${ 3000 }`);
});

app.on('error', (err) => {
	console.error('======', err);
});
