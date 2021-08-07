import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

axios.defaults.baseURL = 'https://api.cryptonator.com';
export default function App() {
  // get data from API /* NOT NEEDED KEEPING FOR REFERENCE */
  const fetchData = () => {
    // make the the end uri variables
    // let cryptoName = 'ren';
    axios
      .get('/api/ticker/btc-usd')
      .then((response) => {
        // this is the data I need
        //alert(response.data.ticker.price);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  // acts as a componentWillMount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>What is the price of Bitcoin?</Text>
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
