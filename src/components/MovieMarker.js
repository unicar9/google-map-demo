import React from "react";
import { Marker } from "react-google-maps";
import Tickets from "../tickets.png";

export default class MovieMarker extends React.Component {
  render(){
    return(
        <Marker
            position={this.props.location}
            icon={Tickets}
        >
        </Marker>
    );
  }
}