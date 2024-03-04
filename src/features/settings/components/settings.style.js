import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

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
 * User profile screen
 */
// Layout
export const ReturnDeleteButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
`;

export const ProfileInfoWrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileInfoContainer = styled.View`
  width: 80%;
  padding: 16px;
  border: 1px solid #6c2e9c;
  border-radius: 10px;
`;

export const ProfileEditButton = styled(TouchableOpacity)`
  margin: 8px auto;
  width: 30%;
  align-items: center;
  background-color: #6c2e9c;
  padding: 6px;
  border-radius: 50px;
`;

export const ProfileVerifyEmailButtonContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
`;

export const ProfileSubscriptionButtonContainer = styled.View`
  width: 90%;
  padding: 16px;
`;

export const SaveCancelButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 6px;
`;

// Button
export const ProfileSubscriptionButton = styled(TouchableOpacity)`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border: 1px solid #a881d4;
  border-radius: 10px;
`;

export const SaveButton = styled(TouchableOpacity)`
  width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  background-color: #50c878;
`;

export const CancelButton = styled(TouchableOpacity)`
  width: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  background-color: #e94e77;
`;

export const ProfileDeleteButton = styled(TouchableOpacity)`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  background-color: #a881d4;
`;

export const ProfileReturnButton = styled(TouchableOpacity)`
  padding: 6px;
`;

export const ProfileEmailVerifyButton = styled(TouchableOpacity)`
  width: 50%;
  display: flex;
  justify-center: center;
  align-items: center;
  padding: 6px;
  border: 1px solid;
  border-radius: 10px;
`;

export const ProfileInfoInput = styled(TextInput)`
  padding: 0px;
  margin: 8px;
`;

/**
 * Customization Sections screen ( Chatroom & Widget )
 */
// Layout
export const ReturnDrawerButtonWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ReturnDrawerButtonContainer = styled.View`
  width: 57%;
  margin: 8px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CustomizationSectionWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomizationSectionContainer = styled.View`
  width: 90%;
  height: 80%;
  margin: 8px;
  border-radius: 15px;
  background-color: #c9c8c8;
  opacity: 0.6;
`;

export const CustomizationSectionDrawer = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000000;
`;

// Button
export const CustomDrawerButton = styled(TouchableOpacity)`
  padding: 16px;
  border: 2px solid;
  border-radius: 100px;
`;

/**
 * Chatroom settings screen
 */

/**
 * Widget settings screen
 */
