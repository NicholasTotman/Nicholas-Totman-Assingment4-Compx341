import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
	return (
		<GooogleMap
			defaultZoom={10}
			defaultCenter={{ lat: -40.900558, lng: 174.885971 }}
		/>
	);
}
const WrappedMap = withScriptjs(withGoogleMap(Map));


function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContainer />
      
    </div>
    <div style={{width: '50vw', weight: '50vh'}}>
    	<WrappedMap
      	googleMapURL = {'https://maps.googleapis.com/maps/api/js?key=AIzaSyCg6iDTbehjszVDTPE5942FLEVuqxQbsys&callback=initMap'}
      	loadingElements={<div style={{height: 100%}} />}
      	containerElements={<div style={{height: 100%}} />}
      	mapElements={<div style={{height: 100%}} />}
      
    </div>
    
    
  );
}

export default App;
