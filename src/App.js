import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import './App.css';
import * as nzData from './nz.json';
import Zip from './components/Zip';

//import { getWeather } from '../routes/apiv1';

class App extends Component {
  nzCities = nzData
 //   properties = props

    componentDidMount() {
        this.renderMap()
    }
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_MAP_API_KEY + "&callback=initMap");
        window.initMap = this.initMap;
    };

    initMap = () => {
        // Create A Map
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -40.900558, lng: 174.885971 },
            zoom: 6,
           // disableDefaultUI: true,

           
        })
        var infowindow = new window.google.maps.InfoWindow()
        // Display Dynamic Markers
        {
            nzData.cities.map(nzCities => {

                 var contentString = `${nzCities.city}`

                // Create A Marker
                var marker = new window.google.maps.Marker({
                    position: { lat: nzCities.lat, lng: nzCities.lng },
                    map: map,
                    title: nzCities.city
                })

                // Click on A Marker!
                 marker.addListener('mouseover', function () {

                // Change the content
                 infowindow.setContent(contentString)

                // Open An InfoWindow
                  infowindow.open(map, marker)
                 })
                marker.addListener('click', function () {
                    document.getElementById("usr").value = contentString
                    document.getElementById("usr").focus()                       
                })

            })
        }
        
        
        
       
       
    }
    render() {
        return (
            <main>              
                <div>
                    <AppHeader />
                    <AppContainer />
                </div>
                <div id="map">
                </div>
            </main>
        )
    }
}
function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}
export default(App);
