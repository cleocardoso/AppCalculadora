import React, { useDebugValue, useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';



export function Home() {

    const [result, setResult] = useState(0);
    const [numberConcat, setNumberConcat] = useState(''); // esse state vai "acumular" os numeros digitados
    const [numbers, setNumbers] = useState([]);
    const [operation, setOperation] = useState('')  
 
    
    // 1 + 2 + 5 * 2
    function addNumber(number) { // 1, 2, 5, 2
        console.log('Number', number)
        setNumberConcat(n => n + number)
        console.log('op', operation !== '')
        if (operation !== '') {
            logica(operation) // 3
        }
    } 

    function logica(op) { 
        let i = 0;
        if (numbers.length > 1) { 
            const numPrev = numbers[i] // 1
            const numNext = numbers[i + 1] // 2
            setNumbers([resultado(op, numPrev, numNext)]) // 3
            setNumberConcat('')
        }
    }  

    function addOperation(op) { // +
        console.log('Operation', op)
        setOperation(op) // +
        if (numberConcat !== ''){
            numbers.push(parseFloat(numberConcat)) // [8]
        }
        setNumbers(numbers) 
        logica(op)
        setNumberConcat('')
    }

    function checkOperation() { // =
        if (numberConcat !== '') { 
            numbers.push(parseFloat(numberConcat))
            setNumbers(numbers) 
            logica(operation)
            setNumberConcat('')
        } 
    }

    function resultado(operation, numPrev, numNext) {
        if (numPrev !== undefined && numNext !== undefined) {
            console.log("[" + numPrev + ", "+numNext +']' ) 
            switch (operation) {
                case '+':
                    return soma(numPrev, numNext);
                case '-':
                    return subtracao(numPrev, numNext);
                case '*':
                    return multiplicacao(numPrev, numNext)
                case '/':
                    return dividir(numPrev, numNext);     
            }
        }
        return 0
    }

    

    function soma(numPrev, numNext) {
        const sum = numPrev + numNext;
        setResult(sum)
        return sum
    }
    function subtracao(numPrev, numNext) {
        const sum = numPrev - numNext;
        setResult(sum)
        return sum
    }
    function dividir(numPrev, numNext) {
        const sum = numPrev / numNext;
        setResult(sum)
        return sum
    }
    function multiplicacao(numPrev, numNext) {
        const sum = numPrev * numNext;
        setResult(sum)
        return sum
    }
    function limpar() {
        setResult(0)
        setNumbers([]) // reseta os numeros inseridos 
        setOperation('') 

    }

    return (

        <View style={styles.container}>
            <View style={styles.resultContainer} >
                <Text style={styles.resultText} >{result}</Text>
            </View>
            <TouchableOpacity style={styles.ButtonContainer} onPress={() => limpar()}>
                <Text style={styles.ButtonText}>CE/C</Text>
            </TouchableOpacity>
            <View style={styles.numberContainer}>
                <TouchableOpacity style={styles.cent2} onPress={() => addNumber(7)}>
                    <Text style={styles.ButtonTextNumber} >7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent2} onPress={() => addNumber(4)}>
                    <Text style={styles.ButtonTextNumber}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent2} onPress={() => addNumber(1)}>
                    <Text style={styles.ButtonTextNumber}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent2} onPress={() => addNumber(0)}>
                    <Text style={styles.ButtonTextNumber}>0</Text>
                </TouchableOpacity>
                <View style={styles.numberContainer2}>
                    <TouchableOpacity style={styles.cent3} onPress={() => addNumber(8)}>
                        <Text style={styles.ButtonTextNumber}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent3} onPress={() => addNumber(5)}>
                        <Text style={styles.ButtonTextNumber}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent3} onPress={() => addNumber(2)}>
                        <Text style={styles.ButtonTextNumber}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent3} onPress={() => addNumber('00')}>
                        <Text style={styles.ButtonTextNumber}>00</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.numberContainer3}>
                    <TouchableOpacity style={styles.cent4} onPress={() => addNumber(9)}>
                        <Text style={styles.ButtonTextNumber}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent4} onPress={() => addNumber(6)}>
                        <Text style={styles.ButtonTextNumber}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent4} onPress={() => addNumber(3)}>
                        <Text style={styles.ButtonTextNumber}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent4} onPress={() => addNumber('.')}>
                        <Text style={styles.ButtonTextNumber}>.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.numberContainer4}>
                    <TouchableOpacity style={styles.cent5}>
                        <Text style={styles.ButtonTextNumber}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent5}>
                        <Text style={styles.ButtonTextNumber} onPress={() => addOperation('*')}>x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent7} onPress={() => addOperation('+')}>
                        <Text style={styles.ButtonTextNumberMais}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.numberContainer5}>
                    <TouchableOpacity style={styles.cent6}>
                        <Text style={styles.ButtonTextNumber}> {'>'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent6} onPress={() => addOperation('/')}>
                        <Text style={styles.ButtonTextNumber}>÷</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent6} onPress={() => addOperation('-')}>
                        <Text style={styles.ButtonTextNumber}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cent6} onPress={() => checkOperation()}>
                        <Text style={styles.ButtonTextNumber}>=</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>






    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'


    },
    resultContainer: {
        width: 340,
        height: 80,
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
        textAlign: 'right'

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
        top: -143,
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
        top: -175,
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
        top: -208,
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
        top: -240,
        left: 280,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    cent7: {
        width: 60,
        height: 135,
        top: -208,
        left: 210,
        margin: 10,
        marginTop: 5,
        backgroundColor: '#808080',
        borderRadius: 10,

    },
    ButtonTextNumber: {
        color: 'white',
        fontSize: 18,
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