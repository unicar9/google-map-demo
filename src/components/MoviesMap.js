import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MovieMarker from "./MovieMarker";

const MoviesMap = withScriptjs(withGoogleMap((props) => {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: -33.86785, lng: 151.20732 }}
            >
                {(props.markers || []).map(cinema => 
                    <MovieMarker
                        key={cinema.id}
                        location={{ lat: cinema.location.lat, lng: cinema.location.lon }}
                        isOpen={true}
                    />
                )}
            </GoogleMap>
        );
    }
))

export default MoviesMap