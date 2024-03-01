import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Modal, Portal } from "react-native-paper";

export const AlertModal = ({ visible, setVisible, mode }) => {
  const [modal_mode, setMode] = useState("");
  useEffect(() => {
    setMode(mode);
  }, [mode]);
  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          style={styles.modalContainer}
          contentContainerStyle={styles.modal}
        >
          {modal_mode === "profile_delete" ? (
            <>
              <View style={styles.modalContentContainer}>
                <Text style={styles.modalText}>Are you sure ?</Text>
                <Text style={styles.modalText}>
                  Your account will forever be deleted
                </Text>
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity>
                    <Text style={styles.yesText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Text style={styles.noText}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <>
              <View style={styles.modalContentContainer}>
                <TextInput
                  label="Email"
                  mode="outlined"
                  outlineColor="#A881D4"
                  activeOutlineColor="#A881D4"
                  textColor="#000000"
                  style={styles.modalUpdateInput}
                />
                <TextInput
                  label="Password"
                  mode="outlined"
                  outlineColor="#A881D4"
                  activeOutlineColor="#A881D4"
                  textColor="#000000"
                  style={styles.modalUpdateInput}
                />
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity>
                    <Text style={styles.saveText}>Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Modal>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContentContainer: {
    padding: 8,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonContainer: {
    width: 200,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  modalUpdateInput: {
    width: 300,
    margin: 8,
    backgroundColor: "#FFFFFF",
  },
  modalText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 16,
    color: "#6C2E9C",
  },
  yesText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 17,
    color: "#50C878",
  },
  noText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 17,
    color: "#E94E77",
  },
  saveText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 17,
    color: "#A881D4",
  },
  cancelText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 17,
    color: "#E94E77",
  },
});
