import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import MoviesMapContainer from './components/MoviesMapContainer';
import MovieSearch from './components/MovieSearch';
import MoviesList from './components/MoviesList';

class App extends Component {
  render() {
    return (
		<Container className="App" style={{ marginTop: '3em', width: '95vw' }}>
			<Header as='h2' textAlign='center'>
				Google Map Demo
			</Header>
			<Grid>
				<Grid.Row>
					<Grid.Column width={12}>
						<MoviesMapContainer />
					</Grid.Column>

					<Grid.Column width={4}>
						<MovieSearch />
						<MoviesList />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
    );
  }
}

export default App;
