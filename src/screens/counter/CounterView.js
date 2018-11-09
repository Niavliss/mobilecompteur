import React, {Component} from 'react';
import Button from "./../../components/Counter/Button";
import {styles} from "./CounterStyle";
import {Text, View} from "react-native";


export default class CounterView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <View>
                    <Button
                        title="Go to Localisation"
                        onPressButton={() => this.props.navigation.navigate('Localisation')}
                    />
                </View>

                <View style={styles.container}>
                    <Text>{`Number of like ${this.props.number}`}</Text>
                    <View style={{flex: 1}}>
                        <Button
                            title={`J'aime`}
                            onPressButton={this.props.increment}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Button
                            title={`Je n'aime pas`}
                            onPressButton={this.props.decrement}
                        />
                    </View>
                </View>
                <Text>"API: "{this.props.dataSource}</Text>
            </View>
        );
    }
}