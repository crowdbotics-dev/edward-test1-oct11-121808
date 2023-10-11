import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const WeatherScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable><Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Weather</Text>
        <Text style={styles.description}>Weather keeps you informed about conditions including temperature, rain, snow, and wind. Check out the forecast by the hour for the next ten days. Use maps to help you explore weather patterns in your area. Stay notified about upcoming adverse conditions.</Text>
      </View>
      
        <Text style={styles.buttonText}>Start</Text>
      
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 30
  },
  image: {
    width: 240,
    height: 200,
    resizeMode: "contain",
    position: "relative",
    top: -180,
    left: 0,
    transform: [{
      rotate: "0deg"
    }]
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555'
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    top: 0,
    left: 0,
    textAlign: "right"
  }
});
export default WeatherScreen;