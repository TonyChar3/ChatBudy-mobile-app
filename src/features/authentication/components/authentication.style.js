import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";

/**
 * Login Screen
 */

// Background bubbles
export const LoginBubble1 = styled.View`
  position: absolute;
  top: -5%;
  left: -10%;
  width: 39%;
  height: 20%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const LoginBubble2 = styled.View`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 35px;
  height: 35px;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const LoginBubble3 = styled.View`
  position: absolute;
  bottom: 10%;
  right: -4%;
  width: 101px;
  height: 101px;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const LoginBubble4 = styled.View`
  position: absolute;
  bottom: 7%;
  left: 20%;
  width: 51px;
  height: 51px;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const LoginBubble5 = styled.View`
  position: absolute;
  bottom: 20%;
  right: 50%;
  width: 20px;
  height: 20px;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

// Layout
export const LoginFormWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginFormContainer = styled.View`
  width: 80%;
  height: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginInputContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 8px;
`;

export const ForgotPasswordLinkContainer = styled.View`
  width: 100%;
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const RegisterLinkContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

// Buttons
export const LoginButtons = styled(TouchableOpacity)`
  width: 30%;
  align-items: center;
  background-color: #6c2e9c;
  padding: 6px;
  margin: 10px;
  border-radius: 50px;
`;

/**
 * Forgot password Screen
 */

// Logo
export const ForgotPasswordLogo = styled.View`
  position: absolute;
  top: 5%;
  right: 5%;
`;

// Background Bubbles
export const ForgotPasswordBubble1 = styled.View`
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 35px;
  height: 35px;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const ForgotPasswordBubble2 = styled.View`
  position: absolute;
  bottom: 20%;
  left: 5%;
  width: 81px;
  height: 81px;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const ForgotPasswordBubble3 = styled.View`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 50px;
  height: 50px;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

// Layout
export const ForgotPasswordContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResetAdvertContainer = styled.View`
  width: 100%;
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Buttons
export const ForgotPasswordResetButton = styled(TouchableOpacity)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c2e9c;
  padding: 8px;
  margin: 10px;
  border-radius: 50px;
`;

/**
 * Register Screen
 */

// Background Bubbles
export const RegisterBubble1 = styled.View`
  position: absolute;
  top: -5%;
  right: -8%;
  width: 35%;
  height: 18%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const RegisterBubble2 = styled.View`
  position: absolute;
  top: 8%;
  left: 15%;
  width: 10%;
  height: 5%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const RegisterBubble3 = styled.View`
  position: absolute;
  bottom: 4%;
  right: 42%;
  width: 10%;
  height: 5%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const RegisterBubble4 = styled.View`
  position: absolute;
  bottom: 12%;
  right: 5%;
  width: 10%;
  height: 5%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const RegisterBubble5 = styled.View`
  position: absolute;
  bottom: -5%;
  left: -8%;
  width: 35%;
  height: 18%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

// Layout
export const RegisterWrapper = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const RegisterFormContainer = styled.View`
  width: 90%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterTitleWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

export const RegisterTitleContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NameEmailInputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  margin: 16px;
`;

export const PasswordUrlInputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 16px;
`;

export const PasswordProgressBarContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RegisterButtonsContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterReturnLinkContainer = styled.View`
  width: 100%;
  padding-top: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// Buttons
export const RegisterButton = styled(TouchableOpacity)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c2e9c;
  padding: 6px;
  margin: 6px;
  border-radius: 50px;
`;
// border-radius: 10%;

/**
 * Subscription Plan picker screen
 */

// Background bubbles
export const PlanPickerBubble1 = styled.View`
  position: absolute;
  top: -3%;
  left: -6%;
  width: 35%;
  height: 18%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const PlanPickerBubble2 = styled.View`
  position: absolute;
  top: 14%;
  right: 14%;
  width: 8%;
  height: 4%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const PlanPickerBubble3 = styled.View`
  position: absolute;
  bottom: 20%;
  left: 40%;
  width: 6%;
  height: 3%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const PlanPickerBubble4 = styled.View`
  position: absolute;
  bottom: 7%;
  left: 20%;
  width: 15%;
  height: 8%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

export const PlanPickerBubble5 = styled.View`
  position: absolute;
  bottom: 10%;
  right: -4%;
  width: 25%;
  height: 13%;
  background-color: #6c2e9c;
  border-radius: 100px;
`;

// Layout
export const PlanPickingWrapper = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlanPickingContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlanPickingTitleContainer = styled.View`
  width: 100%;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlanButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

// Buttons
export const PlanButton = styled(TouchableOpacity)`
  width: 100%;
  padding: 10px;
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-radius: 15px;
`;

export const PlanContinueButton = styled(TouchableOpacity)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c2e9c;
  padding: 6px;
  margin: 8px;
  border-radius: 50px;
`;

export const PlanButtonCircle = styled.View`
  width: 4%;
  height: ${Platform.OS === "android" ? "50%" : "65%"};
  border-radius: 100px;
`;
