import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyTextStyle}>Headline</Text>
      </View>
      <Text style={styles.dummyTextStyle}>Click the button below...</Text>
      <Button title="click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyTextStyle: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 12,
  },
});
