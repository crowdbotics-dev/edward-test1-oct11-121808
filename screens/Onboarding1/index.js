import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, View } from "react-native";

const OnboardingScreen1 = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.logoContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.logo} />
        </View>
        <Text style={styles.title}>Weather</Text>
        <Text style={styles.description}>
          Keeps you informed about conditions including temperature, rain, snow,
          and wind. Check out the forecast by the hour for the next ten days.
          Use maps to help you explore weather patterns in your area.
        </Text>
      </View>
      <View style={styles.swipeContainer}>
        <Text style={styles.swipeText}>Swipe to continue</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    position: "absolute",
    top: 0
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20
  },
  description: {
    fontSize: 18,
    textAlign: "center"
  },
  swipeContainer: {
    marginBottom: 20
  },
  swipeText: {
    fontSize: 16,
    color: "#aaa"
  }
});
export default OnboardingScreen1;