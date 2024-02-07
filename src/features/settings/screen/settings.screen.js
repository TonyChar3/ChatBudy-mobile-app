import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faRightFromBracket,
  faUser,
  faPaintBrush,
  faMessageCaptions,
} from "@fortawesome/pro-regular-svg-icons";

import { AuthContext } from "../../../services/authentication/authentication.context";

import {
  SettingsScreenContainer,
  SettingsSectionCardContainer,
  SettingsSectionDivider,
  SettingsCardIconTitleContainer,
  SectionCardTitleContainer,
} from "../components/settings.style";

export const SettingsScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);
  return (
    <SafeArea>
      <SettingsScreenContainer>
        <SettingsSectionDivider />

        <SettingsSectionCardContainer
          onPress={() => navigation.navigate("Profile")}
        >
          <SettingsCardIconTitleContainer>
            <FontAwesomeIcon icon={faUser} size={20} color={"#A881D4"} />
            <SectionCardTitleContainer>
              <Text style={styles.sectionTitle}>Account</Text>
            </SectionCardTitleContainer>
          </SettingsCardIconTitleContainer>
        </SettingsSectionCardContainer>

        <SettingsSectionDivider />

        <SettingsSectionCardContainer
          onPress={() => navigation.navigate("WidgetSettings")}
        >
          <SettingsCardIconTitleContainer>
            <FontAwesomeIcon icon={faPaintBrush} size={20} color={"#A881D4"} />
            <SectionCardTitleContainer>
              <Text style={styles.sectionTitle}>Widget Settings</Text>
            </SectionCardTitleContainer>
          </SettingsCardIconTitleContainer>
        </SettingsSectionCardContainer>

        <SettingsSectionDivider />

        <SettingsSectionCardContainer
          onPress={() => navigation.navigate("ChatRoomSettings")}
        >
          <SettingsCardIconTitleContainer>
            <FontAwesomeIcon
              icon={faMessageCaptions}
              size={20}
              color={"#A881D4"}
            />
            <SectionCardTitleContainer>
              <Text style={styles.sectionTitle}>Chatroom Settings</Text>
            </SectionCardTitleContainer>
          </SettingsCardIconTitleContainer>
        </SettingsSectionCardContainer>

        <SettingsSectionDivider />

        <SettingsSectionCardContainer onPress={() => setUser(false)}>
          <SettingsCardIconTitleContainer>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size={20}
              color={"#E94E77"}
            />
            <SectionCardTitleContainer>
              <Text style={styles.disconnectText}>Disconnect</Text>
            </SectionCardTitleContainer>
          </SettingsCardIconTitleContainer>
        </SettingsSectionCardContainer>

        <SettingsSectionDivider />
      </SettingsScreenContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 18,
    color: "#A881D4",
  },
  disconnectText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 18,
    color: "#E94E77",
  },
});
