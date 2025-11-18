import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function CubeCalc() {
  const [calcData, setCalcData] = useState({ num: "20", result: null });

  const doCalc = () => {
    const num = parseFloat(calcData.num);

    if (isNaN(num)) {
      setCalcData({ ...calcData, result: "Invalid Number" });
      return;
    }

    const Cube = num * num* num;
    setCalcData({ ...calcData, result: `Result: ${Cube}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Cube Calculator App</Text>

      <TextInput
        value={calcData.num}
        keyboardType="numeric"
        placeholder="Enter Number"
        onChangeText={(data) => setCalcData({ ...calcData, num: data })}
        style={styles.input}
      />

      <Button title="Find Square" onPress={doCalc} />

      <Text style={styles.result}>{calcData.result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(200, 219, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  }
});
