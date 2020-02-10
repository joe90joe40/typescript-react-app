import React, { FunctionComponent } from 'react';

import { PageTypes } from './types';

export const Home: FunctionComponent<PageTypes> = ({ title }: PageTypes) => (
	<>
		<h1>{ title }</h1>
		<p>Welcome to { title }</p>
	</>
);
