import React, { Component } from "react";
import MoviesMap from "./MoviesMap";

export default class MoviesMapContainer extends Component {
	render() {
        const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP
        console.log(process.env);
		return (
			<MoviesMap
				movies={this.props.movies}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}