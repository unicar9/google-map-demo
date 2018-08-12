import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import MoviesMapContainer from './components/MoviesMapContainer';
import MovieSearch from './components/MovieSearch';
import MoviesList from './components/MoviesList';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.handleOnClick = this.handleOnClick.bind(this)

        this.state = { cinemas: [] };
        this.showtimesApi = process.env.REACT_APP_SHOWTIMES_API
	}
	
	handleOnClick(item) {
		console.log(item);

        fetch(`https://api.internationalshowtimes.com/v4/showtimes?apikey=${this.showtimesApi}&movie_id=${item.id}&location=-33.86785,151.20732&distance=50&append=cinemas`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            console.log('movie show times', data.cinemas);
            this.setState({
                cinemas: data.cinemas
            })
        })
	}

	render() {
		return (
			<Container className="App" style={{ marginTop: '3em', width: '95vw' }}>
				<Header as='h2' textAlign='center'>
					Google Map Demo
				</Header>
				<Grid>
					<Grid.Row>
						<Grid.Column width={12}>
							<MoviesMapContainer 
								markers={this.state.cinemas}
							/>
						</Grid.Column>

						<Grid.Column width={4}>
							<MovieSearch />
							<MoviesList 
								handleOnClick={this.handleOnClick}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
    );
  }
}

export default App;
