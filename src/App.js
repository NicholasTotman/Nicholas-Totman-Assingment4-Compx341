import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
//import GoogleMaps from './components/GoogleMaps';
import './App.css';
//import {
 //   GoogleMap,
//    useLoadScript,
 //   Marker,
 //   InfoWindow,
//} from "react-google-maps/api";

const mapContainerStlye = {
    width: '100vw',
    height: '100vh',
};
const center = {
    lat: -40.900558,
    lng: 174.885971,
};

function App() {
    //  const { isLoaded, loadError } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    // });

    // if (loadError) return "Error loading maps";
    //   if (!isLoaded) return "Loading Maps";

    return (
        <div className="App">
            <AppHeader />
            <AppContainer />


        </div>
        
    );


    
}


export default App;
