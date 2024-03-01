import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faChevronLeft } from "@fortawesome/pro-regular-svg-icons";
import { faUserMinus } from "@fortawesome/pro-solid-svg-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  ProfileInfoContainer,
  ProfileInfoWrapper,
  ReturnDeleteButtonContainer,
  ProfileDeleteButton,
  ProfileInfoInput,
  ProfileEditButton,
  SaveButton,
  CancelButton,
  ProfileEmailVerifyButton,
  ProfileVerifyEmailButtonContainer,
  ProfileReturnButton,
  ProfileSubscriptionButton,
  ProfileSubscriptionButtonContainer,
  SaveCancelButtonContainer,
} from "../components/settings.style";
import { AlertModal } from "../../../components/utility/alert-model.component";
import { DialogModal } from "../../../components/utility/dialog-action-modal.component";
import { TouchableOpacity } from "react-native-gesture-handler";

const email_verified = false;
const plan_subscription = "subscription";

export const ProfileScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const [profile_edit_mode, setProfileEditMode] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [dialogText, setDialogText] = useState("");

  return (
    <>
      <PaperProvider>
        <SafeArea>
          <DialogModal
            visible={isDialogVisible}
            setVisible={setDialogVisible}
            alert_message={dialogText}
          />
          <AlertModal
            visible={isModalVisible}
            setVisible={setModalVisible}
            mode={modalMode}
          />
          <ReturnDeleteButtonContainer>
            <ProfileReturnButton
              onPress={() => navigation.navigate("Settings")}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                color={"#6C2E9C"}
                size={25}
              />
            </ProfileReturnButton>
            <ProfileDeleteButton
              onPress={() => {
                setModalMode("profile_delete");
                setModalVisible(true);
              }}
            >
              <FontAwesomeIcon icon={faUserMinus} color={"#6C2E9C"} size={25} />
            </ProfileDeleteButton>
          </ReturnDeleteButtonContainer>
          <ProfileInfoWrapper>
            <ProfileInfoContainer>
              <ProfileInfoInput
                label="your email"
                mode="outlined"
                outlineColor="#A881D4"
                activeOutlineColor="#A881D4"
                textColor="#000000"
                style={{ backgroundColor: "#FFFFFF" }}
                disabled={profile_edit_mode ? false : true}
              />
              <ProfileInfoInput
                label="your password"
                mode="outlined"
                outlineColor="#A881D4"
                activeOutlineColor="#A881D4"
                textColor="#000000"
                style={{ backgroundColor: "#FFFFFF" }}
                disabled={profile_edit_mode ? false : true}
              />
              {profile_edit_mode ? (
                <>
                  <SaveCancelButtonContainer>
                    <SaveButton>
                      <Text style={styles.editButton}>Save</Text>
                    </SaveButton>
                    <CancelButton onPress={() => setProfileEditMode(false)}>
                      <Text style={styles.editButton}>Cancel</Text>
                    </CancelButton>
                  </SaveCancelButtonContainer>
                </>
              ) : (
                <>
                  <ProfileEditButton onPress={() => setProfileEditMode(true)}>
                    <Text style={styles.editButton}>Edit</Text>
                  </ProfileEditButton>
                  <TouchableOpacity
                    onPress={() => {
                      setModalMode("update_password");
                      setModalVisible(true);
                    }}
                  >
                    <Text style={styles.updatePassword}>Update password ?</Text>
                  </TouchableOpacity>

                  <ProfileVerifyEmailButtonContainer>
                    {email_verified ? (
                      <>
                        <Text style={styles.emailVerifiedText}>Verified</Text>
                      </>
                    ) : (
                      <>
                        <ProfileEmailVerifyButton
                          style={styles.buttonNotVerified}
                          onPress={() => {
                            setDialogVisible(true);
                            setDialogText("Email sent!");
                          }}
                        >
                          <Text style={styles.emailNotVerifiedText}>
                            Verify email x
                          </Text>
                        </ProfileEmailVerifyButton>
                      </>
                    )}
                  </ProfileVerifyEmailButtonContainer>
                </>
              )}
            </ProfileInfoContainer>
            <ProfileSubscriptionButtonContainer>
              {plan_subscription === "plus" ? (
                <>
                  <ProfileSubscriptionButton>
                    <Text style={styles.subscriptionButton}>
                      Manage subscription
                    </Text>
                  </ProfileSubscriptionButton>
                </>
              ) : (
                <>
                  <ProfileSubscriptionButton>
                    <Text style={styles.subscriptionButton}>
                      Update to plus +
                    </Text>
                  </ProfileSubscriptionButton>
                </>
              )}
            </ProfileSubscriptionButtonContainer>
          </ProfileInfoWrapper>
        </SafeArea>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  updatePassword: {
    width: 130,
    fontFamily: "FiraSans_400Regular",
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#A881D4",
    margin: 8,
    marginEnd: "auto",
    marginStart: "auto",
  },
  editButton: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  emailNotVerifiedText: {
    fontFamily: "FiraSans_400Regular",
    fontSize: 16,
    color: "#E94E77",
  },
  emailVerifiedText: {
    fontFamily: "FiraSans_400Regular",
    fontSize: 16,
    color: "#50C878",
  },
  buttonNotVerified: {
    borderColor: "#E94E77",
    color: "#E94E77",
  },
  subscriptionButton: {
    fontFamily: "FiraSans_400Regular",
    fontSize: 16,
    color: "#A881D4",
  },
});
