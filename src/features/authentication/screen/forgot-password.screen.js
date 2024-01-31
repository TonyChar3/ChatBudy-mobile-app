import React, { useState } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo } from "@fortawesome/pro-light-svg-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";

import {
  ForgotPasswordContainer,
  MessageContainer,
  ResetAdvertContainer,
  ForgotPasswordButtonContainer,
  ForgotPasswordResetButton,
  ForgotPasswordLogo,
  ForgotPasswordBubble1,
  ForgotPasswordBubble2,
  ForgotPasswordBubble3,
} from "../components/authentication.style";

export const ForgotPasswordScreen = ({ navigation }) => {
  const [user_email, setUserEmail] = useState("");

  return (
    <SafeArea>
      <ForgotPasswordBubble3 />
      <ForgotPasswordLogo>
        <Image
          source={{
            uri: "https://ik.imagekit.io/bqofr3ncj/tr:w-150/ChatBudy.io_2024-01-10_15_24/Increase_Your_Sales_5_wv9ifc.png?updatedAt=1704919570304",
          }}
          style={styles.passwordLogo}
        />
      </ForgotPasswordLogo>
      <ForgotPasswordContainer>
        <MessageContainer>
          <Text style={styles.title}>Enter your email</Text>
          <ResetAdvertContainer>
            <FontAwesomeIcon icon={faCircleInfo} size={12} color={"#E94E77"} />
            <Text style={styles.subtitle}>
              You should receive a password reset email shortly
            </Text>
          </ResetAdvertContainer>
        </MessageContainer>
        <TextInput
          label="Email"
          mode="outlined"
          outlineColor="#A881D4"
          activeOutlineColor="#A881D4"
          textColor="#000000"
          value={user_email}
          onChangeText={(val) => setUserEmail(val)}
          style={styles.emailInput}
        />
        <ForgotPasswordButtonContainer>
          <ForgotPasswordResetButton
            onPress={() => console.log("Reset email sent!")}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </ForgotPasswordResetButton>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.cancelButtonText}
          >
            Cancel
          </Text>
        </ForgotPasswordButtonContainer>
      </ForgotPasswordContainer>
      <ForgotPasswordBubble1 />
      <ForgotPasswordBubble2 />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 25,
    color: "#A881D4",
  },
  subtitle: {
    fontFamily: "FiraSans_400Regular",
    fontSize: 12,
    padding: 4,
    color: "#E94E77",
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontFamily: "FiraSans_700Bold",
    fontSize: 18,
  },
  cancelButtonText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 16,
    color: "#A881D4",
    textDecorationLine: "underline",
  },
  emailInput: {
    backgroundColor: "#FFFFFF",
    width: 300,
    margin: 6,
  },
  passwordLogo: {
    width: 150,
    height: 150,
  },
});
