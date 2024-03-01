import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPeople as faPeopleRegular,
  faBell as faBellRegular,
  faGears as faGearsRegular,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faPeople as faPeopleSolid,
  faBell as faBellSolid,
  faGears as faGearsSolid,
} from "@fortawesome/pro-solid-svg-icons";

import { SettingsScreenNavigator } from "./settings.navigator";
import { VisitorNavigator } from "./visitor.navigator";
import { NotificationNavigator } from "./notification.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Visitor: { active: faPeopleSolid, inactive: faPeopleRegular },
  Notification: { active: faBellSolid, inactive: faBellRegular },
  Settings: { active: faGearsSolid, inactive: faGearsRegular },
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size, color }) => {
    const iconName = focused
      ? TAB_ICON[route.name].active
      : TAB_ICON[route.name].inactive;
    const iconSize = route.name === "Notification" ? 33 : 28;
    return <FontAwesomeIcon icon={iconName} size={iconSize} color={color} />;
  },
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: "#6C2E9C",
  },
  tabBarActiveTintColor: "white",
});

export const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Visitor"
          component={VisitorNavigator}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationNavigator}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreenNavigator}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />
      </Tab.Navigator>
    </>
  );
};
