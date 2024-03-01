import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Dialog, Portal } from "react-native-paper";

export const DialogModal = ({ visible, setVisible, alert_message }) => {
  return (
    <>
      <Portal>
        <Dialog visible={visible}>
          <Dialog.Content>
            <Text style={styles.alertText}>{alert_message}</Text>
            <View style={styles.dialogButtonContainer}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.okButton}>Ok</Text>
              </TouchableOpacity>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  dialogButtonContainer: {
    width: 280,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "center",
  },
  okButton: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 16,
    color: "#6C2E9C",
  },
  alertText: {
    fontFamily: "FiraSans_400Regular",
    fontSize: 16,
    color: "#6C2E9C",
  },
});
