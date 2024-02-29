import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRightFromBracket } from "@fortawesome/pro-regular-svg-icons";

import { AuthContext } from "../../services/authentication/authentication.context";

export const DisconnectButton = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <>
      <TouchableOpacity onPress={() => setUser(false)}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </TouchableOpacity>
    </>
  );
};
