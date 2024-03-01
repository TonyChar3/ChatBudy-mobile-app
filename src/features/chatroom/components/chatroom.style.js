import styled from "styled-components";
import { ImageBackground } from "react-native";

/**
 * Chat room page
 */
export const ChatRoomBackground = styled(ImageBackground).attrs({
  source: {
    uri: "https://ik.imagekit.io/bqofr3ncj/tr:w-800/ChatBudy.io_2024-01-10_15_24/Increase_Your_Sales_10_ixotpm.png?updatedAt=1704919570913",
  },
})`
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
