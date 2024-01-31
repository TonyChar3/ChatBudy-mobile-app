import React, { useContext, useState } from "react";
import { Text, StyleSheet } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthContext } from "../../../services/authentication/authentication.context";

import {
  PlanPickingWrapper,
  PlanPickingContainer,
  PlanPickingTitleContainer,
  PlanButtonContainer,
  PlanButton,
  PlanContinueButton,
  PlanButtonCircle,
  PlanPickerBubble1,
  PlanPickerBubble2,
  PlanPickerBubble3,
  PlanPickerBubble4,
  PlanPickerBubble5,
} from "../components/authentication.style";

export const SubscriptionPickScreen = () => {
  const { setUser } = useContext(AuthContext);

  const [plan_picked, setPlanPicked] = useState("");

  return (
    <SafeArea>
      <PlanPickerBubble1 />
      <PlanPickerBubble2 />
      <PlanPickingWrapper>
        <PlanPickingContainer>
          <PlanPickingTitleContainer>
            <Text style={styles.title}>Choose your plan</Text>
            <Text style={styles.subtitle}>
              * No card required for the free plan
            </Text>
          </PlanPickingTitleContainer>
          <PlanButtonContainer>
            <PlanButton
              onPress={() => setPlanPicked("standard")}
              style={{
                borderColor: `${plan_picked === "standard" ? "#6C2E9C" : plan_picked.length <= 0 ? "#6C2E9C" : "#EFECEC"}`,
              }}
            >
              <Text
                style={
                  plan_picked === "standard"
                    ? styles.buttonText
                    : plan_picked <= 0
                      ? styles.buttonText
                      : { color: "#EFECEC" }
                }
              >
                Standard
              </Text>
              <Text
                style={
                  plan_picked === "standard"
                    ? styles.buttonText
                    : plan_picked <= 0
                      ? styles.buttonText
                      : { color: "#EFECEC" }
                }
              >
                * FREE
              </Text>
              <PlanButtonCircle
                style={{
                  backgroundColor: `${plan_picked === "standard" ? "#50C878" : plan_picked.length <= 0 ? "#EFECEC" : "#EFECEC"}`,
                }}
              />
            </PlanButton>
            <PlanButton
              onPress={() => setPlanPicked("plus")}
              style={{
                borderColor: `${plan_picked === "plus" ? "#6C2E9C" : plan_picked.length <= 0 ? "#6C2E9C" : "#EFECEC"}`,
              }}
            >
              <Text
                style={
                  plan_picked === "plus"
                    ? styles.buttonText
                    : plan_picked <= 0
                      ? styles.buttonText
                      : { color: "#EFECEC" }
                }
              >
                Plus +
              </Text>
              <Text
                style={
                  plan_picked === "plus"
                    ? styles.buttonText
                    : plan_picked <= 0
                      ? styles.buttonText
                      : { color: "#EFECEC" }
                }
              >
                15$ /month
              </Text>
              <PlanButtonCircle
                style={{
                  backgroundColor: `${plan_picked === "plus" ? "#50C878" : plan_picked.length <= 0 ? "#EFECEC" : "#EFECEC"}`,
                }}
              />
            </PlanButton>
          </PlanButtonContainer>
          <PlanContinueButton onPress={() => setUser(true)}>
            <Text style={styles.nextButtonText}>Next</Text>
          </PlanContinueButton>
        </PlanPickingContainer>
      </PlanPickingWrapper>
      <PlanPickerBubble3 />
      <PlanPickerBubble4 />
      <PlanPickerBubble5 />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 30,
    color: "#A881D4",
  },
  subtitle: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 16,
    color: "#A881D4",
    marginTop: 6,
  },
  buttonText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 18,
    color: "#A881D4",
    textAlign: "center",
  },
  nextButtonText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 19,
    color: "#FFFFFF",
  },
});
