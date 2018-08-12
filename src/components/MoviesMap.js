import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MovieMarker from "./MovieMarker";

const MoviesMap = withScriptjs(withGoogleMap((props) => {
    // const movies = [
    //     {
    //         key: 1,
    //         movie: 'Mission Impossible',
    //         location: { lat: 37.49820, lng: -24.01507 }
    //     },
    //     {
    //         key: 2,
    //         movie: 'Mission Impossible',
    //         location: { lat: 37.49820, lng: -24.01507 }
    //     }
    // ]

    // const markers = movies.map(movie => <MovieMarker
    //                     key={movie.key}
    //                     movie={movie.movie}
    //                     location={movie.location}
    //                 />);

                    
    return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: -33.86785, lng: 151.20732 }}
            >
                {(props.markers || []).map(cinema => 
                    <MovieMarker
                        key={cinema.id}
                        location={cinema.location}
                    />
                )}
            </GoogleMap>
        );
    }
))

export default MoviesMap