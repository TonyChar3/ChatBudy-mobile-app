import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  faInfoCircle,
  faXmark,
  faLeafMaple,
  faCircleUser,
  faComment,
  faDeleteLeft,
} from "@fortawesome/pro-regular-svg-icons";

import {
  VisitorCardContainer,
  VisitorCardActionContainer,
  VisitorCardInfoContainer,
  VisitorNameContainer,
  VisitorTimeEnteredContainer,
  VisitorCardDivider,
  VisitorCardActionButtonContainer,
} from "./visitor-page.style";

export const VisitorCard = ({ visitor, navigation }) => {
  const isNameTruncated = visitor.email.length > 18;
  const [show_full_name, setShowFullName] = useState(false);
  const [open_actions, setOpenActions] = useState(false);
  const [open_info, setOpenInfo] = useState(false);
  return (
    <>
      <VisitorCardContainer>
        <VisitorNameContainer
          style={
            show_full_name && isNameTruncated
              ? styles.seeFullName
              : { width: 150 }
          }
          onPress={() => {
            isNameTruncated ? setShowFullName(!show_full_name) : null;
          }}
        >
          {show_full_name && isNameTruncated && (
            <FontAwesomeIcon
              icon={faXmark}
              onPres={() => setShowFullName(false)}
              style={{ marginLeft: 16 }}
              size={20}
              color={"#A881D4"}
            />
          )}
          <Text
            numberOfLines={show_full_name ? undefined : 1}
            style={styles.visitorName}
          >
            {visitor.email || visitor._id}
          </Text>
        </VisitorNameContainer>
        {open_info && (
          <VisitorCardInfoContainer>
            <FontAwesomeIcon
              icon={faCircleUser}
              style={styles.Icons}
              size={20}
            />
            <FontAwesomeIcon
              icon={faLeafMaple}
              style={styles.Icons}
              size={20}
            />
          </VisitorCardInfoContainer>
        )}
        <VisitorTimeEnteredContainer
          style={
            open_info || open_actions || show_full_name
              ? { height: 0, width: 0 }
              : {}
          }
        >
          <Text style={styles.cardTimeEntered}>12\23\2009</Text>
        </VisitorTimeEnteredContainer>
        {open_actions && (
          <VisitorCardActionContainer>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faDeleteLeft}
                style={styles.Icons}
                color={"#E94E77"}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChatRoom");
                setOpenActions(false);
              }}
            >
              <FontAwesomeIcon
                icon={faComment}
                style={styles.Icons}
                size={25}
              />
            </TouchableOpacity>
          </VisitorCardActionContainer>
        )}
        <VisitorCardActionButtonContainer>
          <TouchableOpacity
            onPress={() => {
              setOpenInfo((open_info) => !open_info);
              setOpenActions(false);
            }}
            style={
              open_actions ? { width: 0, height: 0, overflow: "hidden" } : {}
            }
          >
            <FontAwesomeIcon
              icon={open_info ? faXmark : faInfoCircle}
              size={20}
              color={"#8C8C8C"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOpenActions((open_actions) => !open_actions);
              setOpenInfo(false);
            }}
          >
            <FontAwesomeIcon
              icon={open_actions ? faXmark : faEllipsisV}
              size={20}
              style={open_actions ? { height: 0 } : {}}
              color={"#8C8C8C"}
            />
          </TouchableOpacity>
        </VisitorCardActionButtonContainer>
      </VisitorCardContainer>
      <VisitorCardDivider />
    </>
  );
};

const styles = StyleSheet.create({
  seeFullName: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    left: 0,
    right: 0,
    width: 340,
    backgroundColor: "#FFFFFF",
    zIndex: 999,
  },
  visitorName: {
    fontFamily: "FiraSans_700Bold",
    color: "#A881D4",
    fontSize: 16,
  },
  cardTimeEntered: {
    fontFamily: "FiraSans_700Bold",
    color: "#A881D4",
    fontSize: 14,
  },
  Icons: {
    fontFamily: "FiraSans_700Bold",
    color: "#A881D4",
    fontSize: 16,
  },
  actionIcons: {},
});
