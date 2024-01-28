import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
    const { isAuthenticated, setUser } = useContext(AuthContext);

    return (
        <SafeArea>
            <Text>Register screen</Text>
            <TouchableOpacity onPress={() => setUser(true)}>
                <Text>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text>Back to Login</Text>
            </TouchableOpacity>
        </SafeArea>
    );
};