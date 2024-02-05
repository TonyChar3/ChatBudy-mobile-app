import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native";

import { NotificationScreen } from "../../features/notification/screen/notification.screen";
import { NotificationCardInfo } from "../../features/notification/screen/notification-card-info.screen";

const Stack = createStackNavigator();

export const NotificationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="NotificationInfo" component={NotificationCardInfo} />
    </Stack.Navigator>
  );
};
