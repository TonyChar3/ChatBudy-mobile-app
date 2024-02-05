import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faVolume,
  faBell,
  faVolumeSlash,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/pro-regular-svg-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { NotificationCard } from "../components/notification-card.component";

import {
  NotificationScreenContainer,
  NotificationScreenTopContainer,
  NotificationClearButton,
  EmptyNotificationContainer,
  NotificationIconsWrapper,
  NotificationsCardsContainer,
} from "../components/notification.style";

// const notification_array = [
//   {
//     _id: 0,
//     sent_from: "Admin",
//     title: "New Visitor",
//     content: "visitor01 is visiting",
//     read: false,
//     createdAt: "2024-02-05T20:49:18.716+00:00",
//     action: "2ddb04a6b2",
//   },
//   {
//     _id: 1,
//     sent_from: "Admin",
//     title: "New Visitor",
//     content: "visitor02 is visiting",
//     read: false,
//     createdAt: "2024-02-05T20:49:18.716+00:00",
//   },
//   {
//     _id: 2,
//     sent_from: "Admin",
//     title: "New Visitor",
//     content: "visitor03 is visiting",
//     read: false,
//     createdAt: "2024-02-05T20:49:18.716+00:00",
//   },
//   {
//     _id: 3,
//     sent_from: "Admin",
//     title: "New Visitor",
//     content: "visitor04 is visiting",
//     read: false,
//     createdAt: "2024-02-05T20:49:18.716+00:00",
//   },
//   {
//     _id: 4,
//     sent_from: "Visitor 01",
//     title: "New Visitor",
//     content: "visitor04 is visiting",
//     read: false,
//     createdAt: "2024-02-05T20:49:18.716+00:00",
//   },
//   {
//     _id: 5,
//     sent_from: "Visitor 01",
//     title: "New Visitor",
//     content: "visitor04 is visiting",
//     read: false,
//     createdAt: "2024-02-05T20:49:18.716+00:00",
//   },
// ];
const notification_array = [];
// const notification_array = null;

export const NotificationScreen = ({ navigation }) => {
  const [open_clear_button, setOpenClearButton] = useState(false);
  const [open_notif_group, setOpen] = useState({});
  const [unread_group_notif, setUnreadNotif] = useState([]);
  const [mute, setMute] = useState(false);

  let groupedNotificationsArray;

  const handleNotifGroupClick = (notif_group_id) => {
    setOpen((prev) => ({
      ...prev,
      [notif_group_id]: !prev[notif_group_id],
    }));
  };

  if (Array.isArray(notification_array)) {
    groupedNotificationsArray = notification_array.reduce(
      (groups, notification) => {
        let key = notification.sent_from;
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(notification);
        return groups;
      },
      {},
    );
  }

  useEffect(() => {
    if (groupedNotificationsArray) {
      let data_array = [];
      Object.keys(groupedNotificationsArray).forEach((key) => {
        let acc = 0;
        groupedNotificationsArray[key].forEach((notif) => {
          acc += 1;
        });
        data_array.push(acc);
      });
      setUnreadNotif(data_array);
    }
  }, []);

  return (
    <SafeArea>
      <NotificationScreenContainer>
        <NotificationScreenTopContainer>
          <NotificationIconsWrapper>
            <TouchableOpacity onPress={() => setMute(!mute)}>
              <FontAwesomeIcon
                icon={mute ? faVolumeSlash : faVolume}
                size={20}
                color={"#A881D4"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOpenClearButton(!open_clear_button)}
            >
              <FontAwesomeIcon
                icon={open_clear_button ? faXmark : faBell}
                size={25}
                color={"#A881D4"}
              />
            </TouchableOpacity>
          </NotificationIconsWrapper>
          <NotificationClearButton
            style={
              open_clear_button
                ? styles.openClearButton
                : styles.closeClearButton
            }
            onPress={() => console.log("Clear notification")}
          >
            <Text style={styles.clearButton}>Clear</Text>
          </NotificationClearButton>
        </NotificationScreenTopContainer>
        {Array.isArray(notification_array) ? (
          notification_array.length ? (
            <NotificationsCardsContainer>
              {Object.keys(groupedNotificationsArray).map((key) => (
                <NotificationCard
                  key={key}
                  group_name={key}
                  open_group={open_notif_group}
                  group_array={groupedNotificationsArray}
                  NotifGroupClick={handleNotifGroupClick}
                  navigation={navigation}
                />
              ))}
            </NotificationsCardsContainer>
          ) : (
            <EmptyNotificationContainer>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size={40}
                color={"#A881D4"}
              />
              <Text style={styles.emptyNotification}>No notification</Text>
            </EmptyNotificationContainer>
          )
        ) : (
          <ActivityIndicator color={"#A881D4"} size={40} />
        )}
      </NotificationScreenContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  emptyNotification: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 18,
    padding: 8,
    color: "#A881D4",
  },
  clearButton: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 15,
    color: "#FFFFFF",
  },
  openClearButton: {
    right: 0,
    margin: 8,
  },
  closeClearButton: {
    left: -60,
    opacity: 0,
    margin: 0,
  },
});
