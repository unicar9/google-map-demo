import React from "react";
import { Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import Tickets from "../tickets.png";
import { Card } from 'semantic-ui-react';

export default class MovieMarker extends React.Component {
	render() {
		return(
				<Marker
					position={this.props.location}
					icon={Tickets}
				>
					{this.props.isOpen && <InfoBox
										onCloseClick={this.props.onToggleOpen}
										options={{ closeBoxURL: ``, enableEventPropagation: true }}
									>
										<Card 
											raised
											color="red"
											header="Cinema Name"
											meta="Cinema address"
										/>
									</InfoBox>}
				</Marker>
		);
	}
}