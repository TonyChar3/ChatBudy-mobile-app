import React from "react";
import {
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faComment } from "@fortawesome/pro-regular-svg-icons";
import { faPaperPlaneTop } from "@fortawesome/pro-light-svg-icons";

import {
  ChatRoomScreenContainer,
  ChatRoomNameContainer,
  ChatRoomInputContainer,
  ChatRoomChatContainer,
  ChatRoomBackground,
  ChatContainer,
} from "../components/chatroom.style";

import { EmptyVisitorMessageContainer } from "../../visitor/components/visitor-page.style";

// const chat_array = [
//   {
//     text: "Visitor chat",
//     sender_type: "visitor",
//   },
//   {
//     text: "Admin chatvfvfdvfdvfdvfdvdvdfvdfvfdvfdvdfvfdvfdvfdfdvdvdfvfdvdvfdvfewfewfwefewdedwedewdewd",
//     sender_type: "admin",
//   },
//   {
//     text: "Admin chat",
//     sender_type: "admin",
//   },
//   {
//     text: "Visitor chat",
//     sender_type: "visitor",
//   },
// ];

// const chat_array = null;
const chat_array = [];

export const ChatRoomScreen = ({ navigation, visitor_id }) => {
  const route = useRoute();
  const routeName = route.name;
  return (
    <>
      <SafeArea currentRoute={routeName}>
        <ChatRoomBackground>
          <ChatRoomScreenContainer>
            <ChatRoomNameContainer>
              <TouchableOpacity
                onPress={() => navigation.navigate("VisitorScreen")}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={25}
                  color={"#A881D4"}
                />
              </TouchableOpacity>
              <Text style={styles.chatName}>Visitor Name</Text>
            </ChatRoomNameContainer>
            {Array.isArray(chat_array) ? (
              chat_array.length ? (
                <ChatRoomChatContainer>
                  <FlatList
                    data={chat_array}
                    renderItem={({ item }) => (
                      <ChatContainer
                        style={
                          item.sender_type === "admin"
                            ? styles.adminChat
                            : styles.visitorChat
                        }
                      >
                        <Text style={styles.chat}>{item.text}</Text>
                      </ChatContainer>
                    )}
                  />
                </ChatRoomChatContainer>
              ) : (
                <EmptyVisitorMessageContainer>
                  <FontAwesomeIcon
                    icon={faComment}
                    size={60}
                    color={"#E6E6E6"}
                  />
                </EmptyVisitorMessageContainer>
              )
            ) : (
              <ActivityIndicator
                color={"#A881D4"}
                size={40}
                style={styles.loading}
              />
            )}
            <ChatRoomInputContainer>
              <TextInput
                style={styles.chatInput}
                placeholder="send a chat..."
              />
              <FontAwesomeIcon
                icon={faPaperPlaneTop}
                size={25}
                color={"#FFFFFF"}
                style={styles.sendIcon}
              />
            </ChatRoomInputContainer>
          </ChatRoomScreenContainer>
        </ChatRoomBackground>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  chatInput: {
    backgroundColor: "#FFFFFF",
    fontFamily: "FiraSans_400Regular",
    fontSize: 16,
    width: 280,
    padding: 10,
    borderRadius: 6,
  },
  adminChat: {
    alignSelf: "flex-end",
    backgroundColor: "#938C9E",
    borderBottomStartRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  visitorChat: {
    alignSelf: "flex-start",
    backgroundColor: "#B5A8CF",
    borderTopRightRadius: 6,
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
  },
  chat: {
    fontFamily: "FiraSans_400Regular",
    fontSize: 15,
    color: "#000000",
  },
  chatName: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 20,
    marginLeft: 8,
    color: "#A881D4",
  },
  sendIcon: {
    padding: 8,
  },
  noChatText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 20,
    margin: 8,
    color: "#A881D4",
  },
  loading: {
    marginBottom: "auto",
    marginTop: "auto",
  },
});
