import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Context } from 'koa';

import App from './App';
import { ErrorPage, ErrorProps } from './Pages';

export const RenderServerApp = (ctx: Context) => (
	ReactDomServer.renderToString(
		<StaticRouter location={ ctx.url } context={ {} }>
			<App/>
		</StaticRouter>
	)
);

export const RenderServerError = (error: ErrorProps) => (
	ReactDomServer.renderToString(<ErrorPage { ...error }/>)
);
