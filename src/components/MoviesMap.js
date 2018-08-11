import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MovieMarker from "./MovieMarker";

const MoviesMap = withScriptjs(withGoogleMap((props) => {

    // const markers = props.movies.map(movie => <MovieMarker
    //                     key={movie.uid}
    //                     movie={doctor}
    //                     location={{ lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon }}
    //                 />);
                    
    return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: -33.86785, lng: 151.20732 }}
            >
                
            </GoogleMap>
        );
    }
))

export default MoviesMap