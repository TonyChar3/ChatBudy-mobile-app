import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { VisitorScreen } from "../../features/visitor/screen/visitor.screen";
import { ChatRoomScreen } from "../../features/chatroom/screen/chat-room.screen";

const Stack = createStackNavigator();

export const VisitorNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="VisitorScreen" component={VisitorScreen} />
        <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
      </Stack.Navigator>
    </>
  );
};
