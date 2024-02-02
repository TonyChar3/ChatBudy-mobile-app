import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { faPeople } from "@fortawesome/pro-light-svg-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";

import {
  VisitorScreenContainer,
  EmptyVisitorMessageContainer,
} from "../components/visitor-page.style";
import { VisitorCard } from "../components/visitor-card.component";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

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

export const VisitorScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <VisitorScreenContainer>
        {Array.isArray(visitor_array) ? (
          visitor_array.length ? (
            <FlatList
              data={visitor_array}
              renderItem={({ item }) => (
                <VisitorCard visitor={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item._id}
            />
          ) : (
            <EmptyVisitorMessageContainer>
              <FontAwesomeIcon icon={faPeople} size={60} color={"#A881D4"} />
              <Text style={styles.noVisitorText}>No visitor</Text>
            </EmptyVisitorMessageContainer>
          )
        ) : (
          <ActivityIndicator color={"#A881D4"} size={40} />
        )}
      </VisitorScreenContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  noVisitorText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 20,
    padding: 8,
    color: "#A881D4",
  },
});
