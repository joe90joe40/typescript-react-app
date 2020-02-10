import React, { FunctionComponent } from 'react';

import { LayoutTypes } from './types';

export const FullScreenLayout: FunctionComponent<LayoutTypes> = (props: LayoutTypes) => (
	<div className="layout-fullscreen">
		{ props.children }
	</div>
);
