import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faComment } from "@fortawesome/pro-light-svg-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { VisitorChatCard } from "../components/visitor-chat-card.component";

import { EmptyVisitorMessageContainer } from "../../visitor/components/visitor-page.style";
import {
  InboxScreenContainer,
  InboxCardList,
} from "../components/inbox-chat.style";

const visitor_array = [
  {
    _id: 1,
    name: "Roger",
    email: "roger@email.comvfvfvfvvdvdvdf",
    browser: "Safari",
    country: "Canada",
    time: 0,
    visitor_mode: "live-chat",
    unread_chat_count: 0,
  },
  {
    _id: 2,
    name: "Roger",
    email: "roger@email.com",
    browser: "Safari",
    country: "Canada",
    time: 0,
    visitor_mode: "live-chat",
    unread_chat_count: 0,
  },
  {
    _id: 3,
    name: "Roger",
    email: "roger@email.com",
    browser: "Safari",
    country: "Canada",
    time: 0,
    visitor_mode: "live-chat",
    unread_chat_count: 0,
  },
  {
    _id: 4,
    name: "Roger",
    email: "roger@email.com",
    browser: "Safari",
    country: "Canada",
    time: 0,
    visitor_mode: "live-chat",
    unread_chat_count: 0,
  },
  {
    _id: 5,
    name: "Roger",
    email: "roger@email.com",
    browser: "Safari",
    country: "Canada",
    time: 0,
    visitor_mode: "live-chat",
    unread_chat_count: 0,
  },
  {
    _id: 6,
    name: "Roger",
    email: "roger@email.com",
    browser: "Safari",
    country: "Canada",
    time: 0,
    visitor_mode: "live-chat",
    unread_chat_count: 0,
  },
  {
    _id: 7,
    name: "Roger",
    email: "roger@email.com",
    browser: "Safari",
    country: "Canada",
    time: 0,
    visitor_mode: "live-chat",
    unread_chat_count: 0,
  },
];

// const visitor_array = [];
// const visitor_array = null;

export const InboxScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <InboxScreenContainer>
        {Array.isArray(visitor_array) ? (
          visitor_array.length ? (
            <InboxCardList
              data={visitor_array}
              renderItem={({ item }) => (
                <VisitorChatCard
                  navigation={navigation}
                  visitor_id={item._id}
                  visitor_email={item.email}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          ) : (
            <EmptyVisitorMessageContainer>
              <FontAwesomeIcon icon={faComment} size={60} color={"#A881D4"} />
              <Text style={styles.noChatText}>No chat started</Text>
            </EmptyVisitorMessageContainer>
          )
        ) : (
          <ActivityIndicator color={"#A881D4"} size={40} />
        )}
      </InboxScreenContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  noChatText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 20,
    margin: 8,
    color: "#A881D4",
  },
});
