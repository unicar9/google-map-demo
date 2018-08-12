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