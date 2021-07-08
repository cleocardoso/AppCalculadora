import React from 'react';

import { View} from 'react-native';



export function ContainerCalc(props) {
    //console.log("OIIII"+props)
    return (
        <View style={props.styles}>
            {props.children}
        </View> 
    )
} 