import React, { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import { Text } from "react-native-paper";
import { applicationTheme } from "./appTheme";
import CustomButton from "../Components/CustomButton";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import { useUser } from "../UserContext";
import ProfilePictureContext from "../PictureContext";
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const { user, setUser } = useUser();
  const [newName, setNewName] = useState("");
  const { profilePicture, setProfilePicture } = useContext(
    ProfilePictureContext
  );

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setProfilePicture(result.assets[0].uri);
    }
  };

  const showImagePickerOptions = () => {
    Alert.alert("Upload a Profile Photo", "Choose an option", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Choose from Library",
        onPress: pickImage,
      },
    ]);
  };

    const handleChangeName = () => {
      setUser({ ...user, name: newName });
      setNewName(""); // Clear input field after changing name
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
            style={{ marginLeft: -330 }}
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

          <TouchableOpacity onPress={showImagePickerOptions}>
            <Image
              source={
                profilePicture
                  ? { uri: profilePicture }
                  : require("../assets/profile_photo.png")
              }
              style={{
                width: 108,
                height: 108,
                resizeMode: "cover",
                borderRadius: 54, // Make the image circular
              }}
            />
          </TouchableOpacity>
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
          <TextInput
            style={{ marginTop: 10, fontSize: 18 }}
            placeholder="Enter new name"
            value={newName}
            onChangeText={setNewName}
          />
        </View>
        <View
          style={[
            applicationTheme.view,
            {
              paddingBottom: 50, // Adjust paddingBottom as needed
            },
          ]}
        >
          {/* Add your text fields and buttons here */}
          <CustomButton onPress={handleChangeName} text="Save" />
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
