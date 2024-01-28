import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screen/settings.screen";
import { WidgetSettingsScreen} from "../../features/settings/screen/widget-settings.screen";
import { ChatRoomSettingsScreen } from "../../features/settings/screen/chatroom-settings.screen";
import { ProfileScreen } from "../../features/settings/screen/profile.screen";

const Stack = createStackNavigator();

export const SettingsScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="WidgetSettings" component={WidgetSettingsScreen} />
      <Stack.Screen name="ChatRoomSettings" component={ChatRoomSettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
