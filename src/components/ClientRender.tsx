import { ReactElement } from 'react';

type ConditionalRender = ReactElement | null

export default ({ children }: { children: ReactElement }): ConditionalRender => {
	const isServer: boolean = typeof window === 'undefined';

	return !isServer ? children : null;
};
