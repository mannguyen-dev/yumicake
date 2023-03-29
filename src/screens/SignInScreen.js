import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import logo from "../../assets/images/logo.jpg";
import React, { useState } from "react";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");

  const onSignPressed = () => {
    console.warn("Sign In");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password!");
  };
  const onSignInWithFacebook = () => {
    console.warn("Sign In With Facebook");
  };

  const onSignInWithGooglePressed = () => {
    console.warn("Sign In With Facebook");
  };

  const onSignInWithApplePressed = () => {
    console.warn("Sign In With Apple");
  };

  const onSignUpPressed = () => {
    console.warn("Sign Up");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton label="Sign In" onPress={onSignPressed} type="PRIMARY" />
        <CustomButton
          label="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="SECONDARY"
        />
        <CustomButton
          label="Sign In With Facebook"
          onPress={onSignInWithFacebook}
          bgColor="#e7eaf4"
          fgColor="#4765A9"
          icon="facebook"
        />
        <CustomButton
          label="Sign In With Google"
          onPress={onSignInWithGooglePressed}
          bgColor="#fae9ea"
          fgColor="#dd4d44"
          icon="google"
        />
        <CustomButton
          label="Sign In With Apple"
          onPress={onSignInWithApplePressed}
          bgColor="#e3e3e3"
          fgColor="#363636"
          icon="apple"
        />
        <CustomButton
          label="Don't Have An Account? Sign Up"
          onPress={onSignUpPressed}
          type="SECONDARY"
          fgColor="#3871F3"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "80%",
    maxWidth: 200,
    maxHeight: 200,
  },
});
