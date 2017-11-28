//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './homepage/homepage.js';
import NotFound from './NotFound';

class Main extends Component {
  render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' render={({path}) =>
						<div>
							<Home />
						</div>
					} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
    );
  }
}

export default Main;
