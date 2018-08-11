import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import MoviesMapContainer from './components/MoviesMapContainer';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Grid>
				<Grid.Row>
					<Grid.Column width={12}>
						<MoviesMapContainer />
					</Grid.Column>

					<Grid.Column width={4}>
						<p>
							<span>4</span>
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
    );
  }
}

export default App;
