import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

axios.defaults.baseURL = 'https://api.cryptonator.com';
export default function App() {
  // get data from API
  const fetchData = () => {
    // make the the end uri variables
    axios
      .get('/api/ticker/btc-usd')
      .then((response) => {
        console.log(response.data.ticker.price);
        // this is the data I need
        alert(response.data.ticker.price);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>What is the price of Bitcoin?</Text>
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
});
