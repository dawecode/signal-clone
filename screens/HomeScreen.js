import { auth } from "../firebase";
import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
