import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faComment, faXmark } from "@fortawesome/pro-regular-svg-icons";

import { VisitorCardDivider } from "../../visitor/components/visitor-page.style";
import {
  InboxCardContainer,
  InboxCardNameContainer,
  InboxCardIconContainer,
  InboxCardUnreadChatContainer,
} from "./inbox-chat.style";

export const VisitorChatCard = ({ navigation, visitor_id, visitor_email }) => {
  const isNameTruncated = visitor_email.length > 18;
  const [show_full_name, setShowFullName] = useState(false);

  return (
    <>
      <InboxCardContainer>
        <InboxCardNameContainer
          style={
            show_full_name && isNameTruncated
              ? styles.seeName
              : styles.nameContainerClosed
          }
          onPress={() => {
            isNameTruncated ? setShowFullName(!show_full_name) : null;
          }}
        >
          {show_full_name && isNameTruncated && (
            <FontAwesomeIcon
              icon={faXmark}
              onPress={() => setShowFullName(false)}
              size={20}
              color={"#A881D4"}
            />
          )}
          <Text
            numberOfLines={show_full_name ? undefined : 1}
            style={styles.visitorName}
          >
            {visitor_email || visitor_id}
          </Text>
        </InboxCardNameContainer>
        <InboxCardUnreadChatContainer
          style={show_full_name ? styles.hide : null}
        >
          <Text style={styles.unreadChat}>0</Text>
        </InboxCardUnreadChatContainer>
        <InboxCardIconContainer style={show_full_name ? styles.hide : null}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatRoom")}
            style={show_full_name ? styles.hide : null}
          >
            <FontAwesomeIcon
              icon={faComment}
              color={show_full_name ? "transparent" : "#A881D4"}
              size={22}
            />
          </TouchableOpacity>
        </InboxCardIconContainer>
      </InboxCardContainer>
      <VisitorCardDivider />
    </>
  );
};

const styles = StyleSheet.create({
  visitorName: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 16,
    color: "#A881D4",
  },
  unreadChat: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  seeName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    width: 280,
    zIndex: 99,
  },
  nameContainerClosed: {
    width: 140,
  },
  hide: {
    width: 0,
    opacity: 0,
  },
});
