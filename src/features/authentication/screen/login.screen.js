import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
    const { setUser } = useContext(AuthContext);
    return ( 
        <SafeArea>
            <Text>Login screen</Text>
            <TouchableOpacity onPress={() => setUser(true)}>
                <Text>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text>Register</Text>
            </TouchableOpacity>
        </SafeArea>
    );
};