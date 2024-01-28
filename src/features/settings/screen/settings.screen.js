import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRightFromBracket } from "@fortawesome/pro-regular-svg-icons";

import { AuthContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);
  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("WidgetSettings")}>
        <Text>Widget Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ChatRoomSettings")}>
        <Text>Chatroom Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUser(false)}>
        <Text>
          Disconnect
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Text>
      </TouchableOpacity>
    </SafeArea>
  );
};
