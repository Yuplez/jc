import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";

import { useNavigation } from "@react-navigation/native";
// const auth = getAuth();


const LoginScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    auth
      .createUserWithEmailAndPassword(email.trim(), password.trim())
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setErrorMessage(errorMessage);
        if (
          errorMessage ==
          "The email address is already in use by another account."
        ) {
          navigation.push("PasswordScreen");
        }
      });


  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{
          width: "100%",
          height: Dimensions.get("window").height,
          alignItems: "center",
          justifyContent:"center"
        }}
      >
       

        

        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text>{errorMessage}</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: "#50867a", fontWeight: "700" }}>Sign up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};



export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#dadada",
    width: "80%",
    borderRadius: 30,
    marginBottom: 10,
    padding: 15,
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
    color: "#000000",
    fontWeight: "700",
    // marginLeft:10
  },
  button: {
    borderWidth: 1,
    borderColor: "#339d48",
    padding: 10,
    width: "30%",
    margin: 5,
    color: "black",
    // textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    marginTop: 10,
    color: "red",
  },
});
