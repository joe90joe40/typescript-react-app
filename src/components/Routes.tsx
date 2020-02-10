import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import { config, ConfigProps } from '../config';

const Routes = () => (
	<>
		<Switch>
			{ config.map(({ path, exact, Layout, Page, headTitle }: ConfigProps, index: number) => (
				<Route key={ `route-${ index }` } exact={ exact } path={ path }>
					<Helmet>
						<title>{ headTitle }</title>
					</Helmet>
					<Layout>
						<Page.Component title={ Page.title }/>
					</Layout>
				</Route>
			)) }
		</Switch>
		<Helmet>
			<script>console.log('fsdfsdfsd')</script>
		</Helmet>
	</>
);

export default Routes;
