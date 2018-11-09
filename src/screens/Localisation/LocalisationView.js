import React, {Component} from 'react';
import {styles} from  "./LocalisationStyle";
import {Text, View} from "react-native";



export default class LocalisationView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text>Latitude: {this.props.latitude}</Text>
                    <Text>Longitude: {this.props.longitude}</Text>
                    {this.props.error ? <Text>Error: {this.props.error}</Text> : null}
                </View>
            </View>
        );
    }
}