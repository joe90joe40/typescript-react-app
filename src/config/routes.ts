import { LeftLayout, FullScreenLayout } from '../components/Layouts/';
import { Home, About, PageNotFound } from '../components/Pages/';
import { ConfigProps } from './types';

export const config: ConfigProps[] = [
	{
		headTitle: 'Home',
		path: '/',
		Layout: LeftLayout,
		Page: {
			Component: Home,
			title: 'Home Page'
		},
		exact: true,
		link: {
			label: 'Home',
			to: '/'
		}
	}, {
		headTitle: 'About',
		path: '/about',
		Layout: LeftLayout,
		Page: {
			Component: About,
			title: 'About Page'
		},
		link: {
			label: 'About',
			to: '/about'
		}
	},
	{
		headTitle: 'Not Found',
		path: '*',
		Layout: FullScreenLayout,
		Page: {
			Component: PageNotFound,
			title: 'About Page'
		}
	}
];
