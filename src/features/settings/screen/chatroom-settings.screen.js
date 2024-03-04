import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
  faChevronLeft,
  faPaintbrushPencil,
  faXmark,
} from "@fortawesome/pro-regular-svg-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { CustomizationDrawer } from "../components/customization-drawer.component";
import {
  CustomizationSectionContainer,
  CustomizationSectionWrapper,
  ReturnDrawerButtonContainer,
  ReturnDrawerButtonWrapper,
  CustomDrawerButton,
} from "../components/settings.style";

export const ChatRoomSettingsScreen = ({ navigation }) => {
  const [open_drawer, setOpenDrawer] = useState(false);
  return (
    <SafeArea>
      <CustomizationSectionWrapper>
        <ReturnDrawerButtonWrapper>
          <ReturnDrawerButtonContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size={30}
                color={"#a881d4"}
              />
            </TouchableOpacity>
            <CustomDrawerButton
              onPress={() => setOpenDrawer(!open_drawer)}
              style={open_drawer ? styles.drawerClose : styles.drawerOpen}
            >
              <FontAwesomeIcon
                icon={open_drawer ? faXmark : faPaintbrushPencil}
                size={25}
                color={open_drawer ? "#E94E77" : "#a881d4"}
              />
            </CustomDrawerButton>
          </ReturnDrawerButtonContainer>
        </ReturnDrawerButtonWrapper>
        <CustomizationSectionContainer>
          <CustomizationDrawer isVisible={open_drawer} />
        </CustomizationSectionContainer>
      </CustomizationSectionWrapper>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  drawerClose: {
    borderColor: "#E94E77",
  },
  drawerOpen: {
    borderColor: "#A881D4",
  },
});
