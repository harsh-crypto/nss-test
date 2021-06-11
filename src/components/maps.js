import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './map-style.scss';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.31,
      lng: 76.59
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB5SZqTc2lZiPS8070qxRd4jPHSvaYlbcU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent className = "comp"
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;