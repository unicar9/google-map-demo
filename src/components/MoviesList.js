import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import MovieItem from './MovieItem';

const items = [
    {
        childKey: 0,
        image: 'https://image.tmdb.org/t/p/w92/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
        title: 'Header',
        runtime: 'Description',
        synopsis: 'Metadata',
    },
    {
        childKey: 1,
        image: 'https://image.tmdb.org/t/p/w92/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
        title: 'Header',
        runtime: 'Description',
        synopsis: 'Metadata',
    }
]

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Item.Group>
                {items.map(item => 
                    <MovieItem 
                        image={item.image}
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