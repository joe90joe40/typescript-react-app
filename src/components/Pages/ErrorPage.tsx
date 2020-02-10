import React, { FunctionComponent } from 'react';

import { ErrorProps } from './types';

export const ErrorPage: FunctionComponent<ErrorProps> = ({ message, status, stack }: ErrorProps) => (
	<>
		<h1>{ message }</h1>
		<h2>{ status }</h2>
		<pre>{ stack }</pre>
	</>
);
