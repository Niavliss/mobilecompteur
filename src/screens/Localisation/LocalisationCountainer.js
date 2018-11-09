import React, {Component} from 'react';
import LocalisationView from "./LocalisationView";


export default class LocalisationCountainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null
        };
    }
    sucess(position){
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
        });
}

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(

             this.sucess.bind(this),

            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }



    render() {
        return (
            <LocalisationView latitude={this.state.latitude} longitude={this.state.longitude} error={this.state.error} navigation={this.props.navigation} />
        )
    }
}