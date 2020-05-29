import React from 'react';
import { render } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const mapId = document.getElementById(this.props.id);
        const map = new window.google.maps.Map(mapId, this.props.options);
    }

    componentDidMount() {

        if (window.google) {
            this.onScriptLoad();
            return;
        }

        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}`;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);

        s.addEventListener('load', e => {
            this.onScriptLoad()
        })
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }} id={this.props.id} />
        );
    }
}

export default GoogleMap