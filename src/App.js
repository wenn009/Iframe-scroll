import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import nhlVideo from './JAGR0091000H_WEB-_NHL.mp4';
import ReactMapGL from 'react-map-gl';

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;
  background: ${props => props.color}
  `;


class App extends Component {
  onClick() {
    document.getElementById('foo').scrollIntoView();
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onClick}>jump to green</button>
        <Box color="red" >one</Box>
        <Box color="blue" >two</Box>
        <Box color="green" id="foo" > <ReactMapGL
          mapboxApiAccessToken='pk.eyJ1IjoiZm91cnNxdWFyZSIsImEiOiJjanA4c2trZmoxN3UyM3BwbnhwMGJ4MzhlIn0.uz6vq3lNMltfnrRY-p26Ug'
          mapStyle='mapbox://styles/foursquare/cjple79x40umd2rr182a8fhjd'
          width='100%'
          height='100%'
        /></Box>
        <Box color="red" ><video muted preload="auto" autoPlay controls loop src={nhlVideo} width="100%" /></Box>
      </div>
    );
  }
}

export default App;
