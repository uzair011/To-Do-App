import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startNewGoalHandler() {
    setModalIsVisible(true);
  }

  function endNewGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enterdGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterdGoalText, id: Math.random().toString() },
    ]);
    endNewGoalHandler();
  }

  function deleteItemHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add a new goal"
          color="#009489"
          onPress={startNewGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endNewGoalHandler}
        />
        <View style={styles.outerContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteItemHandler}
                  id={itemData.item.id}
                />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  outerContainer: {
    flex: 5,
  },
});
