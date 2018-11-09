import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from "./Button";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    /**
     * Increment counter.
     */
    increment() {
        this.setState({
           number: (this.state.number +1)
        });
    }

    /**
     * Decrement counter.
     */
    decrement() {
        this.setState({
            number: this.state.number -1
        });
    }

    render() {
        return (
            <View>
                <Text>{`Number of like ${this.state.number}`}</Text>
                <View style={{flex: 1}}>
                    <Button
                        title={`J'aime`}
                        onPressButton={this.increment.bind(this)}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Button
                        title={`Je n'aime pas`}
                        onPressButton={this.decrement.bind(this)}
                    />
                </View>
            </View>
        );
    }
}