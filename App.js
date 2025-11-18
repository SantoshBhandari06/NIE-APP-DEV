import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [calcData, setCalcData] = useState({num:20.0, result:null});
  const doCalc = () => {
    if(isNaN(calcData.num)){
      setCalcData({...calcData, result : 'Invalid Number'})
      return;
    }

    const num = calcData.num;
    const sqr = num*num;
    setCalcData({...calcData, result:`Result:${sqr}`})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Square Calculator App</Text>
      <TextInput value ={calcData.num} keyboardType='numeric'
        placeholder='Enter Number'
        onChangeText={(data)=>setCalcData({...calcData, num: data})}/>
      <Button title='Find Square' onPress={doCalc}/>
      <Text>{calcData.result}</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(200, 219, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
