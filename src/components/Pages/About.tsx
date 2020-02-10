import React, { FunctionComponent, lazy, Suspense } from 'react';

import ClientRender from '../ClientRender';
import { PageTypes } from './types';

const OtherComponent = lazy(() => import('../Test'));

export const About: FunctionComponent<PageTypes> = ({ title }: PageTypes) => (
	<div>
		<h1>{ title }</h1>
		<ClientRender>
			<Suspense fallback={ <div>Loading...</div> }>
				<OtherComponent/>
			</Suspense>
		</ClientRender>
	</div>
);
