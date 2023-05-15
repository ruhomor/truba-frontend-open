import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import MapGLStyles from './MapGL.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoid2ExdnkiLCJhIjoiY2t2a3Vlbmc5MGY5ZzJvbzVhejIyMGFtMCJ9.edkPjuHa8iE1U-Qd5Dd6Tw'
// Sample data
const data = [
    {
        "location": "Manhattan Ave & Norman Ave at NE corner",
        "city": "Brooklyn",
        "state": "New York",
        "coordinates": [-73.9516030004786,40.72557300071668],
    },
    {
        "location": "6th Ave & 42nd St at NW corner",
        "city": "Manhattan",
        "state": "New York",
        "coordinates": [-73.98393399979334,40.75533300052329],
    },
    {
        "location": "Essex St & Delancey St at SE corner",
        "city": "Manhattan",
        "state": "New York",
        "coordinates": [55.98104720000002, 37.558461013494146],
    }
]

class MapGL extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            lng:37.6173,
            lat:55.7558,
            zoom:10
                //55.7558° N, 37.6173° E
        }
    }
// Create map and lay over markers
    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })
        // Add zoom and rotation controls to the map.
        // map.addControl(new mapboxgl.NavigationControl());
        // const marker = new mapboxgl.Marker()
        //     .setLngLat([55.98104720000002, 37.558461013494146])
        //     .setPopup(new mapboxgl.Popup({ offset: 30 })
        //     .setHTML('<h4>' + location.city + '</h4>' + location.location))
        //     .addTo(map);
// add markers to map
        data.forEach((location) => {
            console.log(location)
            const marker = new mapboxgl.Marker()
                .setLngLat(location.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 0 })
                    .setHTML('<h4>' + location.city + '</h4>' + location.location))
                .addTo(map);

        })
    }

    render() {
        return(
                <div
                    ref={el=> this.mapContainer = el}
                    style={{width:'100%', height:'700px'}
                    }>
                </div>
        )
    }
}

export default MapGL