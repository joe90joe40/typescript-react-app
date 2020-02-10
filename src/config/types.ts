import { FunctionComponent } from 'react';
import { LayoutTypes } from '../components/Layouts';
import { PageTypes } from '../components/Pages';

export interface ConfigProps {
	headTitle: string,
	path: string,
	Layout: FunctionComponent<LayoutTypes>,
	Page: {
		Component: FunctionComponent<PageTypes>,
		title: string
	}
	exact?: boolean,
	link?: {
		label: string,
		to: string
	}
}
