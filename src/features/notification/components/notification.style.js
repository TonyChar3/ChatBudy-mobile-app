import styled from "styled-components";
import { TouchableOpacity, FlatList } from "react-native";

/**
 * Notification screen
 */
export const NotificationScreenContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationScreenTopContainer = styled.View`
  width: 100%;
  height: 7%;
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid #a881d4;
`;

export const NotificationsCardsContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  border: 1px solid black;
`;

export const NotificationCardList = styled(FlatList)`
  width: 100%;
`;

export const NotificationClearButton = styled(TouchableOpacity)`
  position: absolute;
  padding: 8px;
  border-radius: 100px;
  background-color: #6c2e9c;
`;

export const EmptyNotificationContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotificationIconsWrapper = styled.View`
  width: 52%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/**
 * Notification Card
 */
export const NotificationCardContainer = styled.View`
  margin: 8px auto;
  padding: 16px;
  width: 90%;
  border-radius: 8px;
  background-color: #e6e6e6;
`;

export const NotificationGroupCardContainer = styled(TouchableOpacity)`
  padding: 8px;
  margin: 12px auto;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a881d4;
  border-radius: 8px;
`;

export const NotificationNameIconContainer = styled.View`
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NotificationCardOpenIcon = styled(TouchableOpacity)``;

/**
 * Notification Card Info screen
 */
export const NotificationInfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContentContainer = styled.View`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
`;

export const InfoDateSenderContainer = styled.View`
  width: 100%;
  padding: 26px;
  display: flex;
  justify-content: flex-start;
`;

export const InfoIconContainer = styled.View`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
