// OnboardSecondScreen.js
import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { Text } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "../Components/CustomButton";
import { applicationTheme } from "./appTheme";
import ProfilePictureContext from "../PictureContext";

const OnboardSecondScreen = ({ navigation }: { navigation: any }) => {
  const { profilePicture, setProfilePicture } = useContext(
    ProfilePictureContext
  );

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const NextScreen = () => {
    navigation.navigate("OnboardThirdScreen");
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
            Upload a{"\n"}
            profile picture.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={applicationTheme.profileCircle}>
            <Pressable
              onPress={showImagePickerOptions}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={applicationTheme.verticalPlusCircle}>
            <Pressable
              onPress={showImagePickerOptions}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={applicationTheme.horizontalPlusCircle}>
            <Pressable
              onPress={showImagePickerOptions}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Image
            source={require("../assets/circle_rings.png")}
            style={{ width: 270, height: 270 }}
            resizeMode="contain"
          />
          {profilePicture && (
            <Image
              source={{ uri: profilePicture }}
              style={{
                width: 200,
                height: 200,
                position: "absolute",
                borderRadius: 135,
              }}
              resizeMode="cover"
            />
          )}
          <Pressable
            onPress={showImagePickerOptions}
            style={{ width: 270, height: 270, position: "absolute" }}
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
              marginBottom: 20,
            }}
          >
            <View style={styles.dots} />
            <View
              style={[styles.dots, { backgroundColor: "#153D45", width: 26 }]}
            />
            <View style={styles.dots} />
            <View style={styles.dots} />
          </View>
          <CustomButton onPress={NextScreen} text="Continue" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dots: {
    width: 10,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#BFDDE2",
    marginHorizontal: 2,
  },
});

export default OnboardSecondScreen;
