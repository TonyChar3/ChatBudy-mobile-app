import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faInbox as faInboxRegular, faPeople as faPeopleRegular, faBell as faBellRegular, faGears as faGearsRegular } from "@fortawesome/pro-regular-svg-icons";
import { faInbox as faInboxSolid, faPeople as faPeopleSolid, faBell as faBellSolid, faGears as faGearsSolid } from "@fortawesome/pro-solid-svg-icons";

import { InboxNavigator } from "./inbox.navigator";
import { SettingsScreenNavigator } from "./settings.navigator";
import { VisitorScreen } from "../../features/visitor/screen/visitor.screen";
import { NotificationScreen } from "../../features/notification/screen/notification.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Visitor: { active: faPeopleSolid, inactive: faPeopleRegular},
    Inbox: {active: faInboxSolid, inactive: faInboxRegular},
    Notification: {active: faBellSolid, inactive: faBellRegular},
    Settings: {active: faGearsSolid, inactive: faGearsRegular}
};

const createScreenOptions = ({ route }) => ({ 
    tabBarIcon: ({ focused, size, color }) => { const iconName = focused ? TAB_ICON[route.name].active : TAB_ICON[route.name].inactive
        return <FontAwesomeIcon icon={iconName} size={size} color={color} />
    },
    tabBarStyle: { 
        borderTopWidth: 0,
        backgroundColor: '#6C2E9C'
    },
    tabBarActiveTintColor: "white"
});

export const AppNavigator = () => {
    return (
        <>
            <Tab.Navigator 
            screenOptions={createScreenOptions}>
                <Tab.Screen name="Visitor" component={VisitorScreen} options={{ headerShown: false, tabBarShowLabel: false }}/>
                <Tab.Screen name="Inbox" component={InboxNavigator} options={{ headerShown: false, tabBarShowLabel: false }}/>
                <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false, tabBarShowLabel: false }}/>
                <Tab.Screen name="Settings" component={SettingsScreenNavigator} options={{ headerShown: false, tabBarShowLabel: false }}/>
            </Tab.Navigator>  
        </>
    );
};