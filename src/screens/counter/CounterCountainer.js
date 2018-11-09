import React, {Component} from 'react';
import CounterView from "./CounterView";



export default class CounterCountainer extends Component {
    constructor(props) {
        super(props);
        this.state ={ isLoading: true};
        this.state = {
            number: 0,
            dataSource : [],
        }

    }

    /**
     * Increment counter.
     */
    increment = () => {
            this.setState({
            number: (this.state.number + 1)
        });
    }

    /**
     * Decrement counter.
     */
    decrement = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    // promise = new Promise(function(resolve, reject) {
    //
    //     setTimeout(() => reject(new Error("Whoops!")), 1000);
    //
    //
    // });




    componentDidMount(){
        fetch('https://www.metaweather.com/api/location/search/?query=london',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson[0],

                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });

    }



    render() {
        debugger;
        console.log(this.state.dataSource);
        return <CounterView number={this.state.number} increment={this.increment} decrement={this.decrement} navigation={this.props.navigation} dataSource={this.state.dataSource.latt_long} />
    }

}