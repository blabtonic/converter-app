import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';

axios.defaults.baseURL = 'https://api.cryptonator.com';
export default function App() {
  // onPress function that shows the data when pressed
  const showData = () => {
    axios
      .get('/api/ticker/btc-usd')
      .then((response) => {
        alert(`Currently $${response.data.ticker.price.substring(0, 8)} USD`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedCrypto, setSelectedCrypto] = useState('btc');

  return (
    <View style={styles.container}>
      <Picker
        dropdownIconColor="#008787"
        selectedValue={selectedCrypto}
        onValueChange={(itemValue) => setSelectedCrypto(itemValue)}
        mode="dropdown"
        style={{ height: 30, width: 120 }}
      >
        <Picker.Item label="BTC" value="btc" />
        <Picker.Item label="ETH" value="eth" />
        <Picker.Item label="SUSHI" value="sushi" />
        <Picker.Item label="CRV" value="crv" />
      </Picker>
      <Text>What is the price of {selectedCrypto}</Text>
      <TouchableOpacity onPress={showData}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#43C6AC', '#191654']}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Press Here</Text>
        </LinearGradient>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 24,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 17,
    color: '#ffefd5',
  },
});
