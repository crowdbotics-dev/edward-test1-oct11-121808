import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const WeatherScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
      </View>
      <View style={styles.content}>
        Weather
        
          Weather keeps you informed about conditions including temperature,
          rain, snow, and wind. Check out the forecast by the hour for the next
          ten days. Use maps to help you explore weather patterns in your area.
          Stay notified about upcoming adverse conditions.
        
        
          <Text style={styles.buttonText}>Start</Text>
        
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    alignItems: "center",
    marginBottom: 30
  },
  image: {},
  content: {},
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default WeatherScreen;