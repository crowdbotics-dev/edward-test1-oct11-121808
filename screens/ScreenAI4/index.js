import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please create an account to continue. This way you'll be able to stay notified about upcoming weather conditions.</Text>
      </View>
      <View style={styles.swipeContainer}>
        <Text style={styles.swipeText}>Swipe to continue</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    position: "relative",
    left: NaN,
    top: 90
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: 300,
    left: 100,
    top: 200,
    transform: [{
      rotate: "0deg"
    }]
  },
  swipeContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center"
  },
  swipeText: {
    fontSize: 16,
    color: "#888"
  }
});
export default ScreenComponent;