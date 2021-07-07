import React, { useDebugValue, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { MyInput } from '../components/MyInput';


export function Home() {

    const [result,setResult] = useState('');
    const [numbers,setNumbers] = useState([]);
    


    function addNumber (number) {
        setNumbers(numbers => [...numbers, number])
    }
    
    function resultado(soma) {
        setResult(soma) // insere o valor da soma
        setNumbers([]) // reseta os numeros inseridos
       
    }
    console.log(resultado)
    function soma() {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++){
            sum += parseInt(numbers[i])
        }
        return sum;
    } 
    function subtracao() {
        let subtrair = 0;
        for (let i = 0; i < numbers.length; i++){
            subtrair -= parseInt(numbers[i])
        }
        return subtrair;
    }
    function dividir() {
        let div = 0;
        for (let i = 0; i < numbers.length; i++){
            div /= parseInt(numbers[i])
        }
        return div;
    }
    function multiplicacao() {
        let mult = 0;
        for (let i = 0; i < numbers.length; i++){
            mult *= parseInt(numbers[i])
        }
        return mult;
    }
    function limpar(){
        
    }

    return (

        <View style={styles.container}>
            <View style={styles.resultContainer} >
                <Text style={styles.resultText} >0</Text>
            </View>
            <TouchableOpacity style={styles.ButtonContainer}onPress={() => limpar()}>
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
                <TouchableOpacity style={styles.cent3}onPress={() => addNumber(8)}>
                    <Text style={styles.ButtonTextNumber}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent3}onPress={() => addNumber(5)}>
                    <Text style={styles.ButtonTextNumber}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent3}onPress={() => addNumber(2)}>
                    <Text style={styles.ButtonTextNumber}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent3}onPress={() => addNumber('00')}>
                    <Text style={styles.ButtonTextNumber}>00</Text>
                </TouchableOpacity>
             </View> 
             <View style={styles.numberContainer3}>
                <TouchableOpacity style={styles.cent4}onPress={() => addNumber(9)}>
                    <Text style={styles.ButtonTextNumber}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent4}onPress={() => addNumber(6)}>
                    <Text style={styles.ButtonTextNumber}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent4}onPress={() => addNumber(3)}>
                    <Text style={styles.ButtonTextNumber}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent4}onPress={() => addNumber('.')}>
                    <Text style={styles.ButtonTextNumber}>.</Text>
                </TouchableOpacity>
             </View> 
             <View style={styles.numberContainer4}>
                <TouchableOpacity style={styles.cent5}>
                    <Text style={styles.ButtonTextNumber}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent5}>
                    <Text style={styles.ButtonTextNumber}onPress={() => multiplicacao()}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent7}onPress={() => soma()}>
                    <Text style={styles.ButtonTextNumberMais}>+</Text>
                </TouchableOpacity>
             </View> 
             <View style={styles.numberContainer5}>
                <TouchableOpacity style={styles.cent6}>
                    <Text style={styles.ButtonTextNumber}> {'>'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent6}onPress={() => dividir()}>
                    <Text style={styles.ButtonTextNumber}>÷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent6}onPress={() => subtracao()}>
                    <Text style={styles.ButtonTextNumber}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent6}onPress={() => resultado()}>
                    <Text style={styles.ButtonTextNumber}>=</Text>
                    
                </TouchableOpacity>
             </View> 
        </View>
    </View>
        


         
        

            );
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000000'
        
        
    },
    resultContainer:{
        width:340,
        height:80,
        marginTop:30,
        left: 10,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        
        
    },
    resultText:{
        top:1,
        color:'black',
        fontSize:35,
        fontWeight:'bold',
        padding:20,
        textAlign:'right'
        
    },
    ButtonContainer:{
        width:90,
        height:80,
        marginTop: 30,
        left: 260,
        backgroundColor:'#FF8C00',
        borderRadius:10,
        justifyContent:'center'
        
    },
    ButtonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        padding:20,
        textAlign:'center'
        
    },
    numberContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        
    },
    cent2:{
        width:60,
        height:60,
        top:24,
        left:2,
        margin:10,
        marginTop:5,
        backgroundColor:'#808080',
        borderRadius:10,
        
    },
    numberContainer2:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center'
    },
    cent3:{
        width:60,
        height:60,
        top:-143,
        left:70,
        margin:10,
        marginTop:5,
        backgroundColor:'#808080',
        borderRadius:10,
        
    },
    numberContainer3:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center'
    },
    cent4:{
        width:60,
        height:60,
        top:-175,
        left:140,
        margin:10,
        marginTop:5,
        backgroundColor:'#808080',
        borderRadius:10,
        
    },
    numberContainer4:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center'
    },
    cent5:{
        width:60,
        height:60,
        top:-208,
        left:210,
        margin:10,
        marginTop:5,
        backgroundColor:'#808080',
        borderRadius:10,
        
    },
    numberContainer5:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',

    },
    cent6:{
        width:60,
        height:60,
        top:-240,
        left:280,
        margin:10,
        marginTop:5,
        backgroundColor:'#808080',
        borderRadius:10,
        
    },
    cent7:{
        width:60,
        height:135,
        top:-208,
        left:210,
        margin:10,
        marginTop:5,
        backgroundColor:'#808080',
        borderRadius:10,
        
    },
    ButtonTextNumber:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        padding:20,
        textAlign:'center'
        
    },
    ButtonTextNumberMais:{
        top:30,
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        padding:20,
        textAlign:'center'
        
    },
    
       
      
   
   

});