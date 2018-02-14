import React, {Component} from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        // call 3rd party library
        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render(){

        //this.refs.map give that div
        return <div ref="map"></div>
    }
}

export default GoogleMap;