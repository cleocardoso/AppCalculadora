import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {ButtonCalc} from './ButtonCalc'
import {ContainerCalc} from './ContainerCalc'
import { ItemCalc } from './ItemCalc';

export function Calc(){
    const [result, setResult] = useState(0); 
    const [numberConcat, setNumberConcat] = useState(''); // esse state vai "acumular" os numeros digitados
    const [numbers, setNumbers] = useState([]); 
    const [operation, setOperation] = useState(''); 
    const [parcial, setParcial] = useState('');
    const [isEquals, setEquals] = useState(false) 


    // 1 + 2 + 5 * 2
    function addNumber(number) { // 1, 2, 5, 2 // 
        console.log('Number', number)
        setNumberConcat(n => n + number)
        console.log('op', operation !== '')
        setParcialF(number)
        if (operation !== '') {
            logica(operation) // 3 
        }
    }

   
    function logica(op) {
        let i = 0; 
        if (numbers.length > 1) { 
            const numPrev = numbers[i] 
            const numNext = numbers[i + 1]
            setNumbers([resultado(op, numPrev, numNext)]) // 3
            setNumberConcat('')
        }
        
    }
    // funcao para concatenar o parcial
    function setParcialF(p) {
        let par = parcial + p
        setParcial(par)
    }

    //funcao para adicionar a operacao
    function addOperation(op) { // +
        console.log('Operation', op)
        setOperation(op) // +
        setParcialF(op)
        if (numberConcat !== '') {
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
        setEquals(true) 
        setParcial('') 
    }
    

    function resultado(operation, numPrev, numNext) {  
        if (numPrev !== undefined && numNext !== undefined) { 
            console.log("[" + numPrev + ", " + numNext + ']')
            switch (operation) {
                case '+':
                    return soma(numPrev, numNext);
                case '-':
                    return subtracao(numPrev, numNext);
                case '*':
                    return multiplicacao(numPrev, numNext)
                case '/':
                    return dividir(numPrev, numNext);
                case '%':
                    return porcentagem(numPrev, numNext);
                case '>':
                    return maior(numPrev, numNext);
            }
        }
        return 0
    }



    function soma(numPrev, numNext) {
        const sum = numPrev + numNext;
        setResult(sum)
        setNumberConcat('')
        return sum
    }
    function subtracao(numPrev, numNext) {
        const sum = numPrev - numNext;
        setResult(sum)
        setNumberConcat('')
        return sum
    }
    function dividir(numPrev, numNext) {
        const sum = numPrev / numNext;
        setResult(sum)
        setNumberConcat('')
        return sum
    }
    function multiplicacao(numPrev, numNext) {
        const sum = numPrev * numNext;
        setResult(sum)
        setNumberConcat('')
        return sum
    }
    function porcentagem(numPrev, numNext) {
        const sum = (numPrev / 100) * numNext;
        setResult(sum)
        setNumberConcat('')
        return sum
    }

    function maior(numPrev, numNext) {
        const sum = Math.max(numPrev, numNext);
        setResult(sum)
        setNumberConcat('')
        return sum
    }
    //funcao para limpar todos os states 
    function limpar() {
        setResult(0)
        setNumbers([]) // reseta os numeros inseridos 
        setOperation('')
        setNumberConcat('')
        setEquals(false)
        setParcial('')
    }
    
    return (

        <ContainerCalc styles={styles.container}>
            <ContainerCalc styles={styles.resultContainer}>
                <ItemCalc styles={styles.resultText} isEquals={isEquals} result={result} parcial={parcial} />
            </ContainerCalc>
            <ButtonCalc styleValue={styles.ButtonText} value={'CE/C'} styles={styles.ButtonContainer} onPress={() => limpar()} /> 
            <ContainerCalc styles={styles.numberContainer}>
                <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent2} value={7} onPress={() => addNumber(7)} />
                <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent2} value={4} onPress={() => addNumber(4)} />
                <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent2} value={1} onPress={() => addNumber(1)} />
                <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent2} value={0} onPress={() => addNumber(0)} />
                <ContainerCalc styles={styles.numberContainer2}>
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent3} value={8} onPress={() => addNumber(8)} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent3} value={5} onPress={() => addNumber(5)} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent3} value={2} onPress={() => addNumber(2)} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent3} value={'00'} onPress={() => addNumber('00')} />
                </ContainerCalc>
                <ContainerCalc styles={styles.numberContainer3}>
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent4} value={9} onPress={() => addNumber(9)} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent4} value={6} onPress={() => addNumber(6)} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent4} value={3} onPress={() => addNumber(3)} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent4} value={'.'} onPress={() => addNumber('.')} />
                </ContainerCalc>
                <ContainerCalc styles={styles.numberContainer4}>
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent5} value={'%'} onPress={() => addOperation('%')} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent5} value={'X'} onPress={() => addOperation('*')} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent7} value={'+'} onPress={() => addOperation('+')} />
                </ContainerCalc>
                <ContainerCalc styles={styles.numberContainer5}>
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent6} value={'>'} onPress={() => addOperation('>')} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent6} value={'/'} onPress={() => addOperation('/')} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent6} value={'-'} onPress={() => addOperation('-')} />
                    <ButtonCalc styleValue={styles.ButtonTextNumber} styles={styles.cent6} value={'='} onPress={() => checkOperation()} />
                </ContainerCalc>
            </ContainerCalc>
        </ContainerCalc>
    );

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