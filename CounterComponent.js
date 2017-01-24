import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center'
    },
    text: {
        fontSize: 20,
    },
    button:{
        backgroundColor: 'darkred',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 50,
        borderRadius: 3,
        margin: 10,

    },
    cancelButton:{
        backgroundColor: '#696969',
    },
    buttonText:{
        fontSize: 20,
        color: '#FFF',
    },
    toolbar:
    {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: 'silver',        
    }
})

export default class CounterComponent extends Component{
    constructor(props){
        super(props);

        this.state = {value:0}
    }
    onIncrement()
    {
        this.setState({
            value : this.state.value + 1,
        });
    }
    render(){
        return(
            <View style = {styles.container}>
            <ToolbarAndroid style={styles.toolbar}
                title="Richard's Learning Application" />
                <Text style={styles.text}>{this.state.value}</Text>
                <TouchableHighlight 
                    style={styles.button}
                    onPress={this.onIncrement.bind(this)}>
                    <Text style = {styles.buttonText}>
                        ADD
                    </Text>
                </TouchableHighlight>
            </View>
            );
    }
}