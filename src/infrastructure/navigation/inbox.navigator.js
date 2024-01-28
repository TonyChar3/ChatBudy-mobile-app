import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { InboxScreen } from "../../features/inbox/screen/inbox.screen";
import { ChatRoomScreen } from "../../features/inbox/screen/chat-room.screen";

const Stack = createStackNavigator();

export const InboxNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Inbox" component={InboxScreen} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
    </Stack.Navigator>
  );
};
