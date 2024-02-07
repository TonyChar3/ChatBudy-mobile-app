import styled from "styled-components";
import { TouchableOpacity } from "react-native";

/**
 * Settings screen
 */
export const SettingsScreenContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SettingsSectionCardContainer = styled(TouchableOpacity)`
  width: 80%;
  padding: 8px;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: start;
  border: 1px solid #a881d4;
  border-radius: 10px;
`;

export const SettingsCardIconTitleContainer = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SectionCardTitleContainer = styled.View`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingsSectionDivider = styled.View`
  width: 30%;
  height: 2px;
  background-color: #a881d4;
  border-radius: 100px;
`;

/**
 * Chatroom settings screen
 */

/**
 * User profile screen
 */

/**
 * Widget settings screen
 */
