import React, { FunctionComponent } from 'react';

import { config } from '../../config/routes';
import { LayoutTypes } from './types';

import PrimaryNav from '../PrimaryNav';

export const LeftLayout: FunctionComponent<LayoutTypes> = (props: LayoutTypes) => (
	<div className="layout-left">
		<PrimaryNav config={ config } />
		{ props.children }
	</div>
);
