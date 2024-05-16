import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { applicationTheme } from "./appTheme";
import { useTogglePasswordVisibility } from "./pwVisibility";
import CustomButton from "../Components/CustomButton";
import TextFields from "../Components/TextFields";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import LoginScreen from "./SignInScreen";
import { useUser } from "../UserContext";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const { user } = useUser();
  const { passwordVisibility, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const handleSavePress = () => {
    // Handle button press logic here
    navigation.navigate("HomepageScreen");
  };

  const handleCancelPress = () => {
    // Handle button press logic here
    navigation.navigate("HomepageScreen");
  };

  const handleLogoutPress = () => {
    // Handle logout logic here, e.g., clear user data, navigate to login screen
     navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flex: 1,
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <StatusBar barStyle="dark-content" />

        <View style={applicationTheme.ProfileHeader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: -300 }}
          >
            <Icon name="chevron-back-outline" size={24} color="#153D45" />
          </TouchableOpacity>

          <View style={applicationTheme.NavigationHeader}>
            <Text
              style={[
                applicationTheme.welcomeTextStyle,
                {
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 20,
                  color: "#153D45",
                  paddingBottom: 27,
                },
              ]}
            >
              Profile
            </Text>
          </View>

          <Image
            source={require("../assets/profile_photo.png")}
            style={{
              width: 108,
              height: 108,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              applicationTheme.welcomeTextStyle,
              {
                fontFamily: "Inter_600SemiBold",
                fontSize: 20,
                color: "#153D45",
                paddingTop: 21,
                paddingBottom: 50,
              },
            ]}
          >
            {user.name}
          </Text>
        </View>
        <View
          style={[
            applicationTheme.view,
            {
              paddingBottom: 50, // Adjust paddingBottom as needed
            },
          ]}
        >
          <TextFields textName="First Name" />
          <TextFields textName="Last Name" />
          <TextFields keyboardType="email-address" textName="E-mail" />
          <TextFields textName="Password" marginBottom={56} />
          <CustomButton onPress={handleSavePress} text="Save" />
          <CustomButton
            onPress={handleCancelPress}
            text="Cancel"
            backgroundColor="#F2F8F6"
            textColor="#153D45"
          />
        </View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity onPress={handleLogoutPress}>
            <Text style={{ fontSize: 16, color: "#153D45" }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;


