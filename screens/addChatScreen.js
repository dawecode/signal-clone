import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

export default function addChatScreen({ navigation }) {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="back" />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
