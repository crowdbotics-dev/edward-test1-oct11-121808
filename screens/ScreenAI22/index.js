import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.logoText}>Create Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <View style={styles.hVeBllgC} />
        <TextInput style={styles.input} placeholder="Email" />
        <View style={styles.KVJpzZwN} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <View style={styles.XdjHGZSG} />
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI24");
      }}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10
  },
  button: {
    backgroundColor: "#1abc9c",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  hVeBllgC: {
    height: 10
  },
  KVJpzZwN: {
    height: 10
  },
  XdjHGZSG: {
    height: 20
  }
});
export default CreateAccountScreen;