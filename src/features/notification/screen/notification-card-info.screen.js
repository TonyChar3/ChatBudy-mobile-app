import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faReply } from "@fortawesome/pro-regular-svg-icons";
import { SafeArea } from "../../../components/utility/safe-area.component";

import {
  NotificationInfoContainer,
  InfoContentContainer,
  InfoDateSenderContainer,
  InfoIconContainer,
} from "../components/notification.style";

export const NotificationCardInfo = ({ navigation }) => {
  const route = useRoute();

  const { notification } = route.params;
  const [sent_time, setTime] = useState("");

  const handleNotificationSentTime = (time_entered) => {
    const currentDate = new Date();
    const visitorCreatedAt = new Date(time_entered);

    visitorCreatedAt.toLocaleDateString() === currentDate.toLocaleDateString()
      ? setTime("today")
      : setTime(`${visitorCreatedAt.toLocaleDateString()}`);
  };

  useEffect(() => {
    handleNotificationSentTime(notification.createdAt);
  }, [notification]);

  return (
    <SafeArea>
      <NotificationInfoContainer>
        <InfoContentContainer>
          <Text style={styles.content}>{notification.content}</Text>
        </InfoContentContainer>
        <InfoDateSenderContainer>
          <Text style={styles.details}>from: {notification.sent_from}</Text>
          <Text style={styles.details}>sender: {sent_time}</Text>
        </InfoDateSenderContainer>
        <InfoIconContainer>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <FontAwesomeIcon icon={faXmark} size={25} color={"#E94E77"} />
          </TouchableOpacity>
          {notification.action && (
            <TouchableOpacity onPress={() => navigation.navigate("ChatRoom")}>
              <FontAwesomeIcon icon={faReply} size={25} color={"#4FAAD1"} />
            </TouchableOpacity>
          )}
        </InfoIconContainer>
      </NotificationInfoContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  content: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 25,
    color: "#A881D4",
  },
  details: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 15,
    color: "#C9C8C8",
    margin: 2,
  },
});
