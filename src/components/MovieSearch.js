import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
        this.state = { inputValue: '' };
    }

    handleOnChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleOnClick() {
        console.log(this.state.inputValue);
        const showtimesApi = process.env.REACT_APP_SHOWTIMES_API

        fetch(`https://api.internationalshowtimes.com/v4/showtimes?apikey=${showtimesApi}&movie_id=18047&location=-33.86785,151.20732&distance=50`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(function(data) {
            console.log(data);
        })
    }
    
    render() {
        return (
            <Input
                action
                placeholder='Search movies...'
                onChange={this.handleOnChange}
                value={this.state.inputValue}
            >
                <input />
                <Button 
                    type="submit"
                    onClick={this.handleOnClick}
                >
                    Search
                </Button>
            </Input>
        )
    }
}

export default MovieSearch