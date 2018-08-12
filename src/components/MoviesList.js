import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import MovieItem from './MovieItem';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentWillMount() {
        const showtimesApi = process.env.REACT_APP_SHOWTIMES_API

        fetch(`https://api.internationalshowtimes.com/v4/movies?apikey=${showtimesApi}&limit=20&fields=id,title,poster_image_thumbnail,synopsis,runtime`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.movies);
            this.setState({
                items: data.movies
            })
        })
    }

    render() {
        
        return (
            <Item.Group divided>
                {this.state.items.map(item => 
                    <MovieItem 
                        image={item.poster_image_thumbnail}
                        title={item.title}
                        runtime={item.runtime}
                        synopsis={item.synopsis}
                    />
                )}
            </Item.Group>
        )
    }
}

export default MoviesList;