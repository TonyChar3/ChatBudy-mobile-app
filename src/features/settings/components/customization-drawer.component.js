import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/pro-regular-svg-icons";
import { CustomizationSectionDrawer } from "./settings.style";

export const CustomizationDrawer = ({ isVisible }) => {
  const [visible, setVisible] = useState(false);
  const [open_drawer, setOpenDrawer] = useState("");

  const ToggleSectionDrawer = (section_name) => {
    if (section_name === open_drawer) {
      setOpenDrawer("");
    } else {
      setOpenDrawer(section_name);
    }
  };

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);
  return (
    <>
      <View style={visible ? styles.visibleWrapper : styles.hidden}>
        <View style={styles.visibleContainer}>
          <View style={styles.customizationDrawer}>
            <Text style={styles.drawerText}>Position</Text>
            <TouchableOpacity onPress={() => ToggleSectionDrawer("position")}>
              <FontAwesomeIcon
                icon={open_drawer === "position" ? faChevronDown : faChevronUp}
                size={25}
                color={"#A881D4"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.customizationDrawer}>
            <Text style={styles.drawerText}>Shape</Text>
            <TouchableOpacity onPress={() => ToggleSectionDrawer("shape")}>
              <FontAwesomeIcon
                icon={open_drawer === "shape" ? faChevronDown : faChevronUp}
                size={25}
                color={"#A881D4"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.customizationDrawer}>
            <Text style={styles.drawerText}>Color</Text>
            <TouchableOpacity onPress={() => ToggleSectionDrawer("color")}>
              <FontAwesomeIcon
                icon={open_drawer === "color" ? faChevronDown : faChevronUp}
                size={25}
                color={"#A881D4"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  visibleWrapper: {
    flex: 1,
    padding: 16,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 12,
  },
  visibleContainer: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  customizationDrawer: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    margin: 8,
    borderWidth: 3,
    borderColor: "#A881D4",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  hidden: {
    display: "none",
  },
  drawerText: {
    fontFamily: "FiraSans_700Bold",
    fontSize: 20,
    color: "#A881D4",
  },
});
