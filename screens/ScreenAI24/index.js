import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const Screen = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const location = "New York, NY";
  const weatherImage = {
    uri: "https://tinyurl.com/42evm3m3"
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{location}</Text>
          <Image source={{
          uri: "https://tinyurl.com/3z8z7z5w"
        }} style={styles.editIcon} />
        </View>
        <Image source={weatherImage} style={styles.weatherImage} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  date: {
    fontSize: 18,
    fontWeight: "bold"
  },
  time: {
    fontSize: 18
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  location: {
    fontSize: 24,
    marginRight: 10
  },
  editIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  weatherImage: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  }
});
export default Screen;