import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components";

import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";

import { AuthContext } from "../../services/authentication/authentication.context";

const NavContainer = styled.View`
    width: 5em,
    position: absolute,
    bottom: 5%,
    left: auto,
    right: auto
`;

export const Navigation = () => {

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <NavigationContainer>
           {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};