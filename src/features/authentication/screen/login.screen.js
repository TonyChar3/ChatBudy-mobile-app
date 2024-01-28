import React, { useContext, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthContext } from "../../../services/authentication/authentication.context";

import { 
  Bubble1, 
  Bubble2, 
  Bubble3, 
  Bubble4, 
  Bubble5, 
  LoginFormWrapper, 
  LoginFormContainer,
  TitleContainer, 
  LoginInputContainer,
  WelcomeTitle,
  ForgotPasswordLinkContainer,
  LoginButtons,
  RegisterLinkContainer
} from "../components/login-screen.style";

export const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);

  const [see_password, setSeePassword] = useState(false);
  const [user_password, setUserPassword] = useState("");
  const [user_email, setUserEmail] = useState("");

  return (
    <SafeArea>
      <Bubble1 />
      <Bubble2 />
      <LoginFormWrapper>
        <LoginFormContainer>
          <TitleContainer>
            <WelcomeTitle style={styles.welcomeTitle}>
              Welcome!
            </WelcomeTitle>
            <WelcomeTitle style={styles.welcomeSubtitle}>
              Connect to continue
            </WelcomeTitle>
          </TitleContainer>
          <LoginInputContainer>
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
          </LoginInputContainer>
          <LoginInputContainer>
            <TextInput
              label="Password"
              mode="outlined"
              outlineColor="#A881D4"
              activeOutlineColor="#A881D4"
              textColor="#000000"
              secureTextEntry={see_password ? false : true}
              value={user_password}
              autoCapitalize="none"
              onChangeText={(val) => setUserPassword(val)}
              right={
                <TextInput.Icon
                  icon={see_password ? "eye" : "eye-off"}
                  onPress={() => setSeePassword(!see_password)}
                  color="#000000"
                />
              }
              style={{ backgroundColor: "#FFFFFF" }}
            />
          </LoginInputContainer>
          <ForgotPasswordLinkContainer>
            <Text onPress={() => navigation.navigate("Forgot-Password")} style={styles.forgotPasswordText}>
              Forgot password ?
            </Text>
          </ForgotPasswordLinkContainer>
          <LoginButtons onPress={() => setUser(true)}>
            <Text style={styles.connectText}>Connect</Text>
          </LoginButtons>
          <RegisterLinkContainer>
            <Text style={styles.noAccountText}>
              No account yet ?
            </Text>
            <Text 
            onPress={() => navigation.navigate("Register")} 
            style={styles.registerText}
            >
              Register here
            </Text>
          </RegisterLinkContainer>
        </LoginFormContainer>
      </LoginFormWrapper>
      <Bubble3 />
      <Bubble4 />
      <Bubble5 />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  welcomeTitle: { 
    fontSize: 40, 
    color: '#A881D4', 
    fontWeight: 700 
  },
  welcomeSubtitle: { 
    fontSize: 13, 
    color: '#A881D4', 
    fontWeight: 400 
  },
  forgotPasswordText: { 
    fontSize: 13, 
    color: '#A881D4', 
    fontWeight: 400 
  },
  noAccountText: { 
    fontSize: 13, 
    paddingRight: 5, 
    fontWeight: 600 
  },
  registerText: { 
    textDecorationLine: 'underline', 
    color: '#A881D4' 
  },
  connectText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 600
  }
})
