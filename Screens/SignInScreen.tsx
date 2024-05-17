import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Button, TextInput, Text, IconButton } from "react-native-paper";
import { applicationTheme } from "./appTheme"; // Import your theme styles
import { useTogglePasswordVisibility } from "./pwVisibility"; // Import password visibility toggle hook
import CustomButton from "../Components/CustomButton"; // Import custom button component
import { FIREBASE_AUTH, FIRESTORE_DB } from "../FirebaseConfig"; // Import Firebase authentication instance
import { signInWithEmailAndPassword } from "firebase/auth"; // Import sign-in function

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { AuthContext } from "../AuthContext";

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const { user, isLoggedIn } = useContext(AuthContext);
  const [error, setError] = useState(null); // State for error message
  const auth = FIREBASE_AUTH; // Access Firebase authentication instance
  const { passwordVisibility, handlePasswordVisibility } =
    useTogglePasswordVisibility(); // Password visibility toggle
  const handleSignInPress = async () => {
    setIsLoading(true); // Set loading indicator while signing in
    setError(null); // Clear any previous errors

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", response.user);
      const loggedUser = response.user;

      // if (!loggedUser.emailVerified) {
      //   alert("please verify your email before logging in.");
      // } else {
        //user is logged in and email is vertfied
        //check if user exists in firebase, if not, add them
        const userRef = doc(FIRESTORE_DB, "users", loggedUser.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            email: loggedUser.email,
            uid: loggedUser.uid,
            profileimage: null,
          });
        // }
        //redirect after everying is done
        props.navigation.navigate("OnboardFirstScreen"); // Navigate on successful login
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false); // Clear loading indicator after sign-in attempt
    }
  };
  return (
    <SafeAreaView style={applicationTheme.loginContent}>
      <StatusBar barStyle="dark-content" />

      <View style={applicationTheme.view}>
        <Text
          style={[
            applicationTheme.titleTextStyle,
            {
              fontFamily: "Inter_700Bold",
              fontSize: 36,
              paddingBottom: 56,
              paddingTop: 56,
            },
          ]}
        >
          Welcome Back!
        </Text>

        {/* Replace TextFields with your preferred input components */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="E-mail"
          style={applicationTheme.textInput} // Apply the textInput style
          underlineColor="transparent" // Set underline color to transparent
          activeUnderlineColor="#153D45"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={passwordVisibility}
          placeholder="Password"
          right={
            <IconButton
              icon={passwordVisibility ? "eye-off" : "eye"}
              onPress={handlePasswordVisibility}
            />
          } // Password visibility toggle
          style={applicationTheme.textInput}
          underlineColor="transparent" // Set underline color to transparent
          activeUnderlineColor="#153D45" // Color when focused
        />

        {isLoading ? (
          // Display loading indicator while signing in
          <View style={{ alignItems: "center" }}>
            <Text>Signing in...</Text>
          </View>
        ) : (
          <CustomButton onPress={handleSignInPress} text="Sign In" />
        )}

        {error && ( // Display error message if any
          <Text style={{ color: "red" }}>{error}</Text>
        )}

        {/* <Text
          style={[
            applicationTheme.welcomeTextStyle,
            {
              fontFamily: "Inter_600SemiBold",
              fontSize: 14,
              paddingTop: 20,
            },
          ]}
        >
          Forgot Password?
        </Text> */}
        <View style={applicationTheme.container}>
          <View style={applicationTheme.fotterTextAlign}>
            <Text style={applicationTheme.footerTextStyle}>New User? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUpScreen")}
            >
              <Text style={applicationTheme.signInTextStyle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
