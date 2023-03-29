import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import FontAweSome from "react-native-vector-icons/FontAwesome";

const CustomButton = ({ label, onPress, type, bgColor, fgColor, icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      {icon ? (
        <FontAweSome
          color={fgColor}
          size={18}
          name={icon}
          style={styles.icon}
        />
      ) : (
        ""
      )}
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  container_PRIMARY: {
    backgroundColor: "#007185",
  },
  container_SECONDARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_SECONDARY: {
    color: "grey",
    fontWeight: "normal",
  },
  icon: {
    position: "absolute",
    left: 0,
    padding: 16,
  },
});
