import React from 'react';

import { Text, TouchableOpacity} from 'react-native';



export function ButtonCalc(props) {
 
    return (
        <TouchableOpacity style={props.styles} onPress={props.onPress}>
                <Text style={props.styleValue} >{props.value}</Text>
        </TouchableOpacity>
    )
} 