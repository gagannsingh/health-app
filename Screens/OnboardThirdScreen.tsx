import React from "react";
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Alert,
  StyleSheet,
} from "react-native";
import {Button, Card, TextInput, Text} from "react-native-paper";
import {CheckBox} from "react-native-elements";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import {transparent} from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import CustomButton from "../Components/CustomButton";
import HealthKit from "../HealthKit";

const OnboardThirdScreen = ({navigation}: {navigation: any}) => {
	const [isChecked, setIsChecked] = React.useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const connectToHealth = async () => {
		if (!isChecked) {
			Alert.alert("Please check the checkbox to continue.");
			return;
		}

		try {
			// Request permissions to read and write health data
			await HealthKit.initialize();
			const heartRateData = await HealthKit.getHeartRate();
			// console.log("Heart Rate Data:", heartRateData);
			navigation.navigate("OnboardFourthScreen");
		} catch (error) {
			console.error("Error initializing HealthKit:", error);
			Alert.alert("Error connecting to Apple Health. Please try again.");
		}
	};

	const NextScreen = () => {
		if (isChecked) {
			navigation.navigate("OnboardFourthScreen");
		} else {
			alert("Please check the checkbox to continue.");
		}
	};
	return (
    <SafeAreaView style={[applicationTheme.loginContent, { flex: 1 }]}>
      <StatusBar barStyle="dark-content" />

      <View style={{ flex: 1 }}>
        <View style={applicationTheme.onboardHeader}>
          <Text
            style={[
              applicationTheme.welcomeTextStyle,
              {
                fontFamily: "Rubik_700Bold",
                fontSize: 32,
                color: "#153D45",
                paddingBottom: 84,
              },
            ]}
          >
            Sync health data{"\n"}
            to MindScape.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={applicationTheme.healthConnectImage}
            source={require("../assets/health_connect.png")}
          />
          <Text
            style={[
              applicationTheme.welcomeTextStyle,
              {
                paddingTop: 69,
                width: "80%",
                fontFamily: "Inter_600SemiBold",
                fontSize: 15,
              },
            ]}
          >
            To provide you with a comprehensive health monitoring experience,
            MindScape requests access to your Apple Health data. This allows us
            to gather vital information like your daily steps, heart rate, sleep
            analysis, and more, ensuring personalized insights and
            recommendations for your well-being.{" "}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingTop: 55,
          }}
        >
          <CheckBox
            title="I agree to connect my Apple Health information to MindScape"
            checked={isChecked}
            onPress={handleCheckboxChange}
            checkedColor="#153D45" // Color when checked
            uncheckedColor="#CCCCCC" // Color when unchecked
            containerStyle={styles.transparentBackground}
            textStyle={[styles.textStyle, { color: '#000' }]} // Changed font color to white
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                width: 10,
                height: 8,
                borderRadius: 5,
                backgroundColor: "#BFDDE2",
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                width: 10,
                height: 8,
                borderRadius: 5,
                backgroundColor: "#BFDDE2",
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                width: 26,
                height: 8,
                borderRadius: 5,
                backgroundColor: "#153D45",
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                width: 10,
                height: 8,
                borderRadius: 5,
                backgroundColor: "#BFDDE2",
                marginHorizontal: 2,
              }}
            />
          </View>

          {/* <CustomButton onPress={NextScreen} text="Connect to Health" /> */}
          <CustomButton onPress={connectToHealth} text="Connect to Health" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    backgroundColor: "transparent", // Ensures the parent container is also transparent
  },
  transparentBackground: {
    backgroundColor: "transparent", // Makes the CheckBox background transparent
    borderWidth: 0, // Removes the border if any
  },
  textStyle: {
    textAlign: 'center'
  },
});


export default OnboardThirdScreen;
