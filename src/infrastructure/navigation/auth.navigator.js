import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RegisterScreen } from "../../features/authentication/screen/register.screen";
import { LoginScreen } from "../../features/authentication/screen/login.screen";
import { SubscriptionPickScreen } from "../../features/authentication/screen/subscription-pick.screen";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Subscription-Pick"
        component={SubscriptionPickScreen}
      />
    </Stack.Navigator>
  );
};
