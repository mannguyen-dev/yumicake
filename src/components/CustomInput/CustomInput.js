import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#e8e8e8",
    borderWidth: 0.5,
    borderRadius: 4,
    marginVertical: 8,
  },
  input: {},
});
