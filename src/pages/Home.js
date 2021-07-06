import React, { useDebugValue, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MyInput } from '../components/MyInput';

const [result,setResult] = useState('');
const [number,setNumber] = useState('');




export function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText} value={result} onChangeText={(e) => setResult(e)} >0</Text>
            </View>
            <TouchableOpacity style={styles.ButtonContainer}>
                <Text style={styles.ButtonText}>CE/C</Text>
            </TouchableOpacity>
            <View style={styles.numberContainer}>
                <TouchableOpacity style={styles.cent2}>
                    <Text style={styles.ButtonTextNumber} >7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent2}>
                    <Text style={styles.ButtonTextNumber}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent2}>
                    <Text style={styles.ButtonTextNumber}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent2}>
                    <Text style={styles.ButtonTextNumber}>0</Text>
                </TouchableOpacity>
             <View style={styles.numberContainer2}>
                <TouchableOpacity style={styles.cent3}>
                    <Text style={styles.ButtonTextNumber}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent3}>
                    <Text style={styles.ButtonTextNumber}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent3}>
                    <Text style={styles.ButtonTextNumber}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent3}>
                    <Text style={styles.ButtonTextNumber}>00</Text>
                </TouchableOpacity>
             </View> 
             <View style={styles.numberContainer3}>
                <TouchableOpacity style={styles.cent4}>
                    <Text style={styles.ButtonTextNumber}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent4}>
                    <Text style={styles.ButtonTextNumber}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent4}>
                    <Text style={styles.ButtonTextNumber}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent4}>
                    <Text style={styles.ButtonTextNumber}>.</Text>
                </TouchableOpacity>
             </View> 
             <View style={styles.numberContainer4}>
                <TouchableOpacity style={styles.cent5}>
                    <Text style={styles.ButtonTextNumber}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent5}>
                    <Text style={styles.ButtonTextNumber}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent7}>
                    <Text style={styles.ButtonTextNumberMais}>+</Text>
                </TouchableOpacity>
                
             </View> 
             <View style={styles.numberContainer5}>
                <TouchableOpacity style={styles.cent6}>
                    <Text style={styles.ButtonTextNumber}> {'>'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent6}>
                    <Text style={styles.ButtonTextNumber}>÷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent6}>
                    <Text style={styles.ButtonTextNumber}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cent6}>
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