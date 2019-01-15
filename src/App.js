import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import nhlVideo from './JAGR0091000H_WEB-_NHL.mp4';
import ReactMapGL from 'react-map-gl';
import VisibilitySensor from 'react-visibility-sensor';

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  background: ${props => props.color}
  `;


const Wrapper = styled.div`
  height: 800px;
  overflow: scroll;
`;


class App extends Component {
  state = {
    showMap: false
  }
  onClick() {
    document.getElementById('foo').scrollIntoView();
    // window.parent.scrollTo(0, 1220);
  }

  renderMap() {
    const showMap = this.state.showMap;
    if (showMap) {
      return (<ReactMapGL
        mapboxApiAccessToken='pk.eyJ1IjoiZm91cnNxdWFyZSIsImEiOiJjanA4c2trZmoxN3UyM3BwbnhwMGJ4MzhlIn0.uz6vq3lNMltfnrRY-p26Ug'
        mapStyle='mapbox://styles/foursquare/cjple79x40umd2rr182a8fhjd'
        width='100%'
        height='100%'
      />);
    }
  }

  onVisible = (isVisible) => {
    if (isVisible) {
      // alert('I am visible')
      // alert(document.getElementById('foo').offsetTop)
      // this.setState({ showMap: true });
    } else {
      // alert(document.getElementById('foo').offsetTop)
      // alert('I am not visible')
      // this.setState({ showMap: false })
    }
  };

  render() {
    return (
      <Wrapper>
        <button onClick={this.onClick}>jump to green</button>
        <Box color="red" >one</Box>
        <Box color="blue" >two</Box>
        <VisibilitySensor onChange={this.onVisible}>
          <Box color="green" id="foo" >
            {this.renderMap()}
          </Box>
        </VisibilitySensor>
        <Box color="red" >
          <video muted preload="auto" autoPlay controls loop src={nhlVideo} width="100%" />
          {/* <iframe src="https://www.jmtrivia.com/#/map"></iframe> */}
        </Box>
      </Wrapper>
    );
  }
}

export default App;
