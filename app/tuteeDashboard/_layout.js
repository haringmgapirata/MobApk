import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="Dashboard" options={{headerShown: false}}/>
    </Tabs>
  );
}

