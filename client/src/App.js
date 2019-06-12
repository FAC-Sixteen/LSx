import React from 'react';
import './App.css';
import { Landing, Stories, Deepdive } from './Components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

const urls = {
	home: '/',
	stories: '/success-stories',
	deepdive: '/dive-deeper',
	experiments: '/experiments',
	action: '/action-plan',
	share: '/share'
};

function App() {
	const [background, setBackground] = React.useState('city');
	return (
		<BrowserRouter>
			<GlobalStyle data={background} />
			<div className="App">
				<Switch>
					<Route exact path={urls.home} render={(props) => <Landing />} />
					<Route
						exact
						path={urls.stories}
						render={(props) => {
							setBackground('comic');
							return <Stories />;
						}}
					/>
          <Route exact path={urls.deepdive} render={(props) => {
          setBackground('park')
          return (<Deepdive />);}} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
