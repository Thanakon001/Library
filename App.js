import { StyleSheet, Text, View } from "react-native";
import HeaderApp from "./ui/HeanderApp";
import BodyApp from "./ui/ฺBodyApp";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderApp />
      <BodyApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe",
  },
});
