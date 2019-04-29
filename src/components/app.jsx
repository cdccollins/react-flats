import React, { Component } from 'react';

import flats from '../../data/flats.js'
import FlatList from './flat_list'
import MyMap from './my_map'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flats: flats,
      lat: 59.95,
      lng: 30.33
    }
  }

  center() {
    return {
      lat: this.state.lat,
      lng: this.state.lng
    };
  }

  getFlat = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    })
  }

  render() {
    return (
      <div className="app">
        <FlatList flats={this.state.flats} getFlat={this.getFlat}/>
        <div className="map-container">
          <MyMap lat={this.state.lat} lng={this.state.lng}/>
        </div>
      </div>
    )
  }
}

export default App;
