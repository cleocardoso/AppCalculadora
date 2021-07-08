import React from 'react';

import { View, Text, StyleSheet } from 'react-native';



export function ItemCalculadora(props) {
    //console.log("OIIII"+props)
    return (

        <View style={styles.resultText}>
            {props.isEquals && (
                <Text style={styles.resultText}>{props.result}</Text>
            )}
            {!props.isEquals && (
                <Text style={styles.resultText}>{props.parcial}</Text>
            )}
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    resultContainer: {
        width: 340,
        height: 100,
        marginTop: 30,
        left: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,

    },
    resultText: {
        top: 1,
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'right',
        marginTop: -10,

    },
    ButtonContainer: {
        width: 90,
        height: 80,
        marginTop: 30,
        left: 260,
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        justifyContent: 'center'

    },
    ButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center'

    },
    numberContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    cent2: {
        width: 60,
        height: 60,
        top: 24,
        left: 2,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    numberContainer2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cent3: {
        width: 60,
        height: 60,
        top: -140,
        left: 70,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    numberContainer3: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cent4: {
        width: 60,
        height: 60,
        top: -168,
        left: 140,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    numberContainer4: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cent5: {
        width: 60,
        height: 60,
        top: -195,
        left: 210,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    numberContainer5: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    cent6: {
        width: 60,
        height: 60,
        top: -223,
        left: 280,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    cent7: {
        width: 60,
        height: 135,
        top: -195,
        left: 210,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    ButtonTextNumber: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center'

    },
    ButtonTextNumberMais: {
        top: 30,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center'

    },
});