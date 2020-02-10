import * as React from 'react';

import Routes from './Routes';

import { HelmetProvider } from 'react-helmet-async';

// const strings = await import(`./i18n/${navigator.language}.mjs`);

export const helmetContext = { helmet: { title: '', scripts: '' } };

const App = () => (
	<HelmetProvider context={ helmetContext }>
		<Routes/>
	</HelmetProvider>
);

export default App;
