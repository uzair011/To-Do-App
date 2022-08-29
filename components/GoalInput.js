import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterdGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(etnterdText) {
    setEnteredGoalText(etnterdText);
  }

  function addGoalHandler2() {
    props.onAddGoal(enterdGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals"
          onChangeText={goalInputHandler}
          value={enterdGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#8C0118"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler2}
              color={"#D2F000"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
    padding: 16,
    backgroundColor: "#4D5D53",
  },
  textInput: {
    borderColor: "#8DE8E8",
    backgroundColor: "#8DE8E8",
    borderWidth: 1,
    width: "100%",
    padding: 16,
    borderRadius: 6,
    color: "#660080",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
