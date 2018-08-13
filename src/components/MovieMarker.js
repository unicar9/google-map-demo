import React from "react";
import { Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import Tickets from "../tickets.png";
import { Card } from 'semantic-ui-react';

export default class MovieMarker extends React.Component {
	constructor(props) {
		super(props);

		this.onToggleOpen = this.onToggleOpen.bind(this)
        this.state = { isOpen: false };
	}

	onToggleOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return(
				<Marker
					position={this.props.location}
					icon={Tickets}
					onClick={this.onToggleOpen}
				>
					{this.state.isOpen && <InfoBox
										onCloseClick={this.onToggleOpen}
										options={{ closeBoxURL: ``, enableEventPropagation: true }}
									>
										<Card 
											raised
											color="yellow"
											header={this.props.cinemaName}
											meta={this.props.cinemaPhone}
											description={this.props.cinemaAddr}
										/>
									</InfoBox>}
				</Marker>
		);
	}
}