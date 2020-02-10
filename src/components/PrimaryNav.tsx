import React from 'react';

import { Link } from 'react-router-dom';

import { ConfigProps } from '../config';

const PrimaryNav = ({ config }: { config: ConfigProps[] }) => (
	<ul>
		{ config.map(({ link }: ConfigProps, index: number) => (
			link && (
				<li key={ `link-${ index }` }>
					<Link to={ link.to }>{ link.label }</Link>
				</li>
			)
		)) }
	</ul>
);

export default PrimaryNav;
