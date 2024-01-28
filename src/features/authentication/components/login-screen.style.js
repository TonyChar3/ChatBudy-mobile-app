import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

/**
 * Background bubbles
 */
export const Bubble1 = styled.View`
    position: absolute;
    top: -2%;
    left: -10%;
    width: 40%;
    height: 20%;
    background-color: #6C2E9C;
    border-radius: 100%;
`;

export const Bubble2 = styled.View`
    position: absolute;
    top: 10%;
    right: 10%;
    width: 35px;
    height: 35px;
    background-color: #6C2E9C;
    border-radius: 100%;
`;

export const Bubble3 = styled.View`
    position: absolute;
    bottom: 10%;
    right: -4%;
    width: 101px;
    height: 101px;
    background-color: #6C2E9C;
    border-radius: 100%;
`;

export const Bubble4 = styled.View`
    position: absolute;
    bottom: 7%;
    left: 20%;
    width: 51px;
    height: 51px;
    background-color: #6C2E9C;
    border-radius: 100%;
`;

export const Bubble5 = styled.View`
    position: absolute;
    bottom: 20%;
    right: 50%;
    width: 20px;
    height: 20px;
    background-color: #6C2E9C;
    border-radius: 100%;
`;

/**
 * Layout
 */
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
    margin-top: 8;
`;

export const ForgotPasswordLinkContainer = styled.View`
    width: 100%;
    margin-top: 10;
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
    margin: 2%;
`;

/**
 * Typography
 */

export const WelcomeTitle = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading };
`;

/**
 * Buttons
 */
export const LoginButtons = styled(TouchableOpacity)`
    background-color: #6C2E9C;
    margin: 4%;
    padding: 2%;
    border-radius: 15%;
`;