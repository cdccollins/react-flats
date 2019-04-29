import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MyMap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Map google={this.props.google} center={{lat: this.props.lat, lng: this.props.lng}} defaultZoom={12}>
        <Marker position={{lat: this.props.lat, lng: this.props.lng}} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBWy2zV1inqrSB5mcWBfD7vFezABcjmXG8')
})(MyMap)
