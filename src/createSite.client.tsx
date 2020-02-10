import * as React from 'react';
import * as ReactDomClient from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

ReactDomClient.hydrate(
	<BrowserRouter>
		<App/>
	</BrowserRouter>, document.getElementById('root'));
