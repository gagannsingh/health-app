// import React from "react";
// import {
// 	View,
// 	Image,
// 	SafeAreaView,
// 	TouchableOpacity,
// 	StatusBar,
// } from "react-native";
// import {Button, TextInput, Text} from "react-native-paper";
// import {applicationTheme} from "./appTheme";
// import {useTogglePasswordVisibility} from "./pwVisibility";
// import CustomButton from "../Components/CustomButton";
// import TextFields from "../Components/TextFields";
// import { FIREBASE_AUTH } from "../FirebaseConfig";

// interface LoginScreenProps {
// 	navigation: any;
// }

// const LoginScreen = (props: LoginScreenProps) => {
// 	const resetPw = () => props.navigation.navigate("PwResetScreen");
// 	const login = () => props.navigation.navigate("BtDeviceScreen");
// 	const register = () => props.navigation.navigate("SignUpScreen");
// 	const auth = FIREBASE_AUTH;

// 	const {passwordVisibility, handlePasswordVisibility} =
// 		useTogglePasswordVisibility();

// 	const handleSignInPress = () => {
// 		// Handle button press logic here
// 		props.navigation.navigate("OnboardFirstScreen");
// 	};

// 	return (
// 		<SafeAreaView style={applicationTheme.loginContent}>
// 			<StatusBar barStyle="dark-content" />

// 			<View style={applicationTheme.view}>
// 				<Text
// 					style={[
// 						applicationTheme.titleTextStyle,
// 						{
// 							fontFamily: "Inter_700Bold",
// 							fontSize: 36,
// 							paddingBottom: 56,
// 							paddingTop: 56,
// 						},
// 					]}
// 				>
// 					Welcome!
// 				</Text>
// 				<TextFields keyboardType="email-address" textName="E-mail" />
// 				<TextFields textName="Password" marginBottom={56} />

// 				<CustomButton onPress={handleSignInPress} text="Sign In" />
// 				{/* <Text
// 					style={[
// 						applicationTheme.titleTextStyle,
// 						{
// 							fontFamily: "Inter_600SemiBold",
// 							fontSize: 16,
// 						},
// 					]}
// 				>
// 					E-mail
// 				</Text>

// 				<Image
// 					source={require("../assets/rectangle.png")}
// 					style={{
// 						width: 387,
// 						height: 3,
// 						borderRadius: 90,
// 					}}
// 				/> */}
// 				{/* <Text
// 					style={[
// 						applicationTheme.titleTextStyle,
// 						{
// 							fontFamily: "Inter_600SemiBold",
// 							fontSize: 16,
// 							paddingTop: 34,
// 						},
// 					]}
// 				>
// 					Password
// 				</Text>
// 				<TextInput
// 					style={applicationTheme.input}
// 					underlineColor="transparent"
// 					selectionColor={"black"}
// 					activeUnderlineColor="transparent"
// 				></TextInput>

// 				<Image
// 					source={require("../assets/rectangle.png")}
// 					style={{
// 						width: 350,
// 						height: 3,
// 						borderRadius: 90,
// 						marginBottom: 56,
// 					}}
// 				/> */}

// 				{/* <TextFields /> */}

// 				<Text
// 					style={[
// 						applicationTheme.welcomeTextStyle,
// 						{
// 							fontFamily: "Inter_600SemiBold",
// 							fontSize: 14,
// 							paddingTop: 20,
// 						},
// 					]}
// 				>
// 					Forgot password?
// 				</Text>
// 				<View style={applicationTheme.container}>
// 					<View style={applicationTheme.fotterTextAlign}>
// 						<Text style={applicationTheme.footerTextStyle}>
// 							New User?{" "}
// 						</Text>
// 						<TouchableOpacity
// 							onPress={() =>
// 								props.navigation.navigate("SignUpScreen")
// 							}
// 						>
// 							<Text style={applicationTheme.signInTextStyle}>
// 								Sign Up
// 							</Text>
// 						</TouchableOpacity>
// 					</View>
// 				</View>
// 			</View>

// 			{/* <View style={applicationTheme.view}>
//                 <Card style={applicationTheme.cardStyle}>
//                     <Card.Title title="Logfin" titleStyle={applicationTheme.cardTitleStyle}></Card.Title>
//                     <Card.Content>

//                             <TextInput label="Email" keyboardType="email-address"></TextInput>
//                             <TextInput label="Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>

//                             <Button onPress={resetPw} style={{marginBottom: 35}}>Forgot email/password</Button>

//                             <View style={{display: "flex", flexDirection: "row"}}>
//                                 <Text style={{marginTop: 10}}>Don't have an account yet?</Text>
//                                 <Button onPress={register} style={{padding: 0, borderRadius: 0}}>Sign Up</Button>
//                             </View>
//                             <Button onPress={login} mode="contained" style={applicationTheme.buttonStyle}>Login</Button>

//                     </Card.Content>
//                 </Card>
//             </View> */}
// 		</SafeAreaView>
// 	);
// };

// export default LoginScreen;

// //NEW CODE
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
// 	TouchableOpacity,
// } from "react-native";
// import { TextInput, Button } from "react-native-paper";
// import { applicationTheme } from "./appTheme";
// import { FIREBASE_AUTH } from "../FirebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";

// interface LoginScreenProps {
// 	navigation: any;
// }

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// 	const [error, setError] = useState(null);
// 	const auth = FIREBASE_AUTH

//   const handleSignInPress = async () => {
//     try {
// 		const response = await signInWithEmailAndPassword(auth, email, password);
// 		console.log(response);
//       navigation.navigate("OnboardFirstScreen");
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   return (
//     <SafeAreaView style={applicationTheme.loginContent}>
//       <StatusBar barStyle="dark-content" />
//       <View style={applicationTheme.view}>
//         <Text
//           style={[
//             applicationTheme.titleTextStyle,
//             {
//               fontFamily: "Inter_700Bold",
//               fontSize: 36,
//               paddingBottom: 56,
//               paddingTop: 56,
//             },
//           ]}
//         >
//           Welcome!
//         </Text>
//         <TextInput
//           label="E-mail"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           style={applicationTheme.input}
//         />
//         <TextInput
//           label="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={applicationTheme.input}
//         />
//         {error && <Text style={{ color: "red" }}>{error}</Text>}
//         <Button
//           mode="contained"
//           onPress={handleSignInPress}
//           style={applicationTheme.buttonStyle}
//         >
//           Sign In
//         </Button>
//         <TouchableOpacity onPress={() => navigation.navigate("PwResetScreen")}>
//           <Text
//             style={[
//               applicationTheme.welcomeTextStyle,
//               { fontFamily: "Inter_600SemiBold", fontSize: 14, paddingTop: 20 },
//             ]}
//           >
//             Forgot password?
//           </Text>
//         </TouchableOpacity>
//         <View style={applicationTheme.container}>
//           <View style={applicationTheme.fotterTextAlign}>
//             <Text style={applicationTheme.footerTextStyle}>New User? </Text>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("SignUpScreen")}
//             >
//               <Text style={applicationTheme.signInTextStyle}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Image,
//   SafeAreaView,
//   TouchableOpacity,
//   StatusBar,
// } from "react-native";
// import { Button, TextInput, Text } from "react-native-paper";
// import { applicationTheme } from "./appTheme";
// import { useTogglePasswordVisibility } from "./pwVisibility";
// import CustomButton from "../Components/CustomButton";
// import TextFields from "../Components/TextFields"; // Assuming TextFields manages its own state
// import { FIREBASE_AUTH } from "../FirebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";

// interface LoginScreenProps {
//   navigation: any;
// }

// const LoginScreen = (props: LoginScreenProps) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false); // State for loading indicator
//   const [error, setError] = useState(null); // State for error message
//   const auth = FIREBASE_AUTH;
//   const { passwordVisibility, handlePasswordVisibility } =
//     useTogglePasswordVisibility();

//   const handleSignInPress = async () => {
//     setIsLoading(true); // Set loading indicator while signing in
//     setError(null); // Clear any previous errors

//     try {
//     const response = await signInWithEmailAndPassword(auth, email, password);

//     console.log("User signed in:", response.user);
//       props.navigation.navigate("OnboardFirstScreen"); // Navigate on successful login
//     } catch (error: any) {
//       console.error("Login Error:", error);
//       setError(error.message); // Set error message for display
//     } finally {
//       setIsLoading(false); // Clear loading indicator after sign-in attempt
//     }
//   };

//   return (
//     <SafeAreaView style={applicationTheme.loginContent}>
//       <StatusBar barStyle="dark-content" />

//       <View style={applicationTheme.view}>
//         <Text
//           style={[
//             applicationTheme.titleTextStyle,
//             {
//               fontFamily: "Inter_700Bold",
//               fontSize: 36,
//               paddingBottom: 56,
//               paddingTop: 56,
//             },
//           ]}
//         >
//           Welcome!
//         </Text>
//         <TextFields
//           keyboardType="email-address"
//           textName="E-mail"
//         />
//         <TextFields
//           textName="Password"
//           marginBottom={56}
//         />

//         {isLoading ? (
//           // Display loading indicator while signing in
//           <View style={{ alignItems: "center" }}>
//             <Text>Signing in...</Text>
//           </View>
//         ) : (
//           <CustomButton onPress={handleSignInPress} text="Sign In" />
//         )}

//         {error && ( // Display error message if any
//           <Text style={{ color: "red" }}>{error}</Text>
//         )}

//         <Text
//           style={[
//             applicationTheme.welcomeTextStyle,
//             {
//               fontFamily: "Inter_600SemiBold",
//               fontSize: 14,
//               paddingTop: 20,
//             },
//           ]}
//         >
//           Forgot password?
//         </Text>
//         <View style={applicationTheme.container}>
//           <View style={applicationTheme.fotterTextAlign}>
//             <Text style={applicationTheme.footerTextStyle}>New User? </Text>
//             <TouchableOpacity
//               onPress={() => props.navigation.navigate("SignUpScreen")}
//             >
//               <Text style={applicationTheme.signInTextStyle}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;






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

          {/* Go back button added here */}
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{
              padding: 12,
              backgroundColor: "#f0f0f0",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 14, color: "#000" }}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

