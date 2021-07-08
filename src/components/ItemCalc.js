import React from 'react';

import { View, Text } from 'react-native';



export function ItemCalc(props) {
    //console.log("OIIII"+props) 
    return (

        <View style={props.styles}>
            {props.isEquals && (
                <Text style={props.styles}>{props.result}</Text>
            )}
            {!props.isEquals && (
                <Text style={props.styles}>{props.parcial}</Text>
            )}
        </View>

    )
} 