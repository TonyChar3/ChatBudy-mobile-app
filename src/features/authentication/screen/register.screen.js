import React, { useContext, useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { TextInput, ProgressBar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  calculatePasswordStrength,
  passwordStrengthSpanMessage,
} from "../../../utils/calculations";

import { AuthContext } from "../../../services/authentication/authentication.context";

import {
  RegisterWrapper,
  RegisterFormContainer,
  NameEmailInputContainer,
  PasswordUrlInputContainer,
  PasswordProgressBarContainer,
  RegisterButtonsContainer,
  RegisterButton,
  RegisterTitleWrapper,
  RegisterTitleContainer,
  RegisterReturnLinkContainer,
} from "../components/authentication.style";

// RegisterBubble1,
// RegisterBubble2,
// RegisterBubble3,
// RegisterBubble4,
// RegisterBubble5,

export const RegisterScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);

  const [user_email, setUserEmail] = useState("");
  const [business_name, setBusinessName] = useState("");
  const [website_url, setWebsiteUrl] = useState("");

  const [user_password, setUserPassword] = useState("");
  const [show_password, setShowPassword] = useState(false);
  const [show_progress_bar, setShowProgressBar] = useState(false);
  const [progress_bar_message, setProgressBarMessage] = useState("");
  const [password_strength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const strength = calculatePasswordStrength(user_password);
    const progress_bar_msg = passwordStrengthSpanMessage(strength);

    setPasswordStrength(strength);
    setProgressBarMessage(progress_bar_msg);
  }, [user_password]);

  return (
    <SafeArea>
      {/* <RegisterBubble1 />
      <RegisterBubble2 /> */}
      <RegisterWrapper>
        <RegisterFormContainer>
          <NameEmailInputContainer>
            <RegisterTitleWrapper>
              <RegisterTitleContainer>
                <Text style={styles.title}>Start for</Text>
                <Text style={styles.free_style}>FREE</Text>
              </RegisterTitleContainer>
              <Text style={styles.subtitle}>register a new account</Text>
            </RegisterTitleWrapper>
            <TextInput
              label="Business Name"
              mode="outlined"
              outlineColor="#A881D4"
              activeOutlineColor="#A881D4"
              textColor="#000000"
              value={user_email}
              onChangeText={(val) => setBusinessName(val)}
              style={{ backgroundColor: "#FFFFFF" }}
            />
            <TextInput
              label="Email"
              mode="outlined"
              outlineColor="#A881D4"
              activeOutlineColor="#A881D4"
              textColor="#000000"
              value={user_email}
              onChangeText={(val) => setUserEmail(val)}
              style={{ backgroundColor: "#FFFFFF" }}
            />
          </NameEmailInputContainer>
          <PasswordUrlInputContainer>
            <TextInput
              label="Password"
              mode="outlined"
              onFocus={() => setShowProgressBar(true)}
              onBlur={() => setShowProgressBar(false)}
              outlineColor="#A881D4"
              activeOutlineColor="#A881D4"
              textColor="#000000"
              secureTextEntry={show_password ? false : true}
              value={user_password}
              autoCapitalize="none"
              onChangeText={(val) => setUserPassword(val)}
              right={
                <TextInput.Icon
                  icon={show_password ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(!show_password)}
                  color="#000000"
                />
              }
              style={{ backgroundColor: "#FFFFFF" }}
            />
            <PasswordProgressBarContainer
              style={show_progress_bar ? { marginTop: 2 } : { height: 0 }}
            >
              <ProgressBar
                progress={password_strength}
                color={progress_bar_message.bg_color}
                style={
                  show_progress_bar
                    ? { width: 300, marginTop: 5 }
                    : { height: 0 }
                }
              />
              <Text
                style={{
                  color: `${progress_bar_message.text_color}`,
                  marginLeft: 5,
                }}
              >
                {progress_bar_message.msg}
              </Text>
            </PasswordProgressBarContainer>
            <TextInput
              label="Website URL"
              mode="outlined"
              outlineColor="#A881D4"
              activeOutlineColor="#A881D4"
              textColor="#000000"
              value={user_email}
              onChangeText={(val) => setWebsiteUrl(val)}
              style={{ backgroundColor: "#FFFFFF" }}
            />
            <RegisterButtonsContainer>
              <RegisterButton
                onPress={() => navigation.navigate("Subscription-Pick")}
              >
                <Text style={styles.connectButton}>Connect</Text>
              </RegisterButton>
              <RegisterReturnLinkContainer>
                <Text style={styles.CalltoActionText}>already signed-in ?</Text>
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={styles.LoginButton}
                >
                  Back to Login
                </Text>
              </RegisterReturnLinkContainer>
            </RegisterButtonsContainer>
          </PasswordUrlInputContainer>
        </RegisterFormContainer>
      </RegisterWrapper>
      {/* <RegisterBubble3 />
      <RegisterBubble4 />
      <RegisterBubble5 /> */}
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 25,
    marginRight: 8,
    color: "#A881D4",
  },
  free_style: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 28,
    textDecorationLine: "underline",
    color: "#6C2E9C",
  },
  subtitle: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 13,
    color: "#A881D4",
  },
  connectButton: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 18,
    color: "#FFFFFF",
  },
  LoginButton: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 15,
    color: "#A881D4",
    marginLeft: 5,
  },
  CalltoActionText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 13,
    color: "#000000",
  },
});
