import styled from "styled-components";
import { FlatList, Platform } from "react-native";
import { TouchableOpacity, ImageBackground } from "react-native";

/**
 *  Inbox page
 */
export const InboxScreenContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InboxCardList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  margin: 0 auto;
`;

/**
 * Inbox visitor chat cards
 */
export const InboxCardContainer = styled.View`
  width: 90%;
  padding: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #6c2e9c;
  margin: 16px;
  border-radius: 10px;
`;

export const InboxCardNameContainer = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const InboxCardIconContainer = styled.View`
  padding-right: 6px;
`;

export const InboxCardUnreadChatContainer = styled.View`
  position: absolute;
  width: ${Platform.OS === "android" ? "28px" : "22px"};
  top: 25%;
  left: 55%;
  background-color: #e94e77;
  padding: 2px;
  border-radius: 20px;
`;

/**
 * Chat room page
 */
export const ChatRoomBackground = styled(ImageBackground).attrs({
  source: {
    uri: "https://ik.imagekit.io/bqofr3ncj/tr:w-800/ChatBudy.io_2024-01-10_15_24/Increase_Your_Sales_10_ixotpm.png?updatedAt=1704919570913",
  },
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ChatRoomScreenContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatRoomNameContainer = styled.View`
  width: 90%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #6c2e9c;
`;

export const ChatRoomInputContainer = styled.View`
  width: 90%;
  position: absolute;
  bottom: 20;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a881d4;
  border-radius: 10px;
`;

export const ChatRoomChatContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`;

export const ChatContainer = styled.View`
  max-width: 38%;
  padding: 8px;
  margin: 10px;
`;
