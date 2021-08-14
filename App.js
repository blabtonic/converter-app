import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { Appbar } from 'react-native-paper';

axios.defaults.baseURL = 'https://api.cryptonator.com';
export default function App() {
  const [selectedCrypto, setSelectedCrypto] = useState('btc');
  const [selectedFiat, setSelectedFiat] = useState('usd');

  // onPress function that shows the data when pressed
  const showData = () => {
    axios
      .get(`/api/ticker/${selectedCrypto}-${selectedFiat}`)
      .then((response) => {
        alert(`Currently ${response.data.ticker.price}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Appbar style={styles.barStyle}>
        <Appbar.Content title="Crypto Converter" />
      </Appbar>
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
        <Picker.Item label="ALGO" value="algo" />
      </Picker>
      <Picker
        dropdownIconColor="#d70087"
        selectedValue={selectedFiat}
        onValueChange={(itemValue) => setSelectedFiat(itemValue)}
        mode="dropdown"
        style={{ height: 30, width: 120 }}
      >
        <Picker.Item label="USD" value="usd" />
        <Picker.Item label="JPY" value="jpy" />
        <Picker.Item label="CAD" value="cad" />
        <Picker.Item label="EUR" value="eur" />
        <Picker.Item label="GBP" value="gbp" />
      </Picker>

      <Text>
        What is the price of {selectedCrypto} to the price of {selectedFiat}
      </Text>
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
  barStyle: {
    position: 'absolute',
    backgroundColor: '#1E90FF',
    left: 0,
    right: 0,
    top: 30,
  },
});
