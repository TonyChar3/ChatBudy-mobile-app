import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronsRight } from "@fortawesome/pro-solid-svg-icons";

import {
  NotificationCardContainer,
  NotificationCardList,
  NotificationNameIconContainer,
  NotificationCardOpenIcon,
  NotificationGroupCardContainer,
} from "./notification.style";

export const NotificationCard = ({
  group_name,
  open_group,
  group_array,
  NotifGroupClick,
  navigation,
}) => {
  const [icon_rotate, setIconRotate] = useState(false);

  return (
    <NotificationCardContainer style={icon_rotate ? styles.openGroup : null}>
      <NotificationNameIconContainer>
        <Text style={styles.groupName}>{group_name}</Text>
        <NotificationCardOpenIcon
          onPress={() => {
            NotifGroupClick(group_name);
            setIconRotate(!icon_rotate);
          }}
          style={icon_rotate ? styles.rotateIcon : null}
        >
          <FontAwesomeIcon icon={faChevronsRight} size={20} color={"#A881D4"} />
        </NotificationCardOpenIcon>
      </NotificationNameIconContainer>
      {Object.keys(open_group) && open_group[group_name] && (
        <NotificationCardList
          data={group_array[group_name]}
          renderItem={({ item }) => (
            <NotificationGroupCardContainer
              onPress={() =>
                navigation.navigate("NotificationInfo", { notification: item })
              }
            >
              <Text style={styles.notificationTitle}>{item.title}</Text>
            </NotificationGroupCardContainer>
          )}
        />
      )}
    </NotificationCardContainer>
  );
};

const styles = StyleSheet.create({
  rotateIcon: {
    transform: [{ rotate: "90deg" }],
  },
  openGroup: {
    backgroundColor: "white",
  },
  groupName: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 20,
    color: "#A881D4",
  },
  notificationTitle: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
