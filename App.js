import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderSide from "./components/header/HeaderSide";
import Todolist from "./components/card/TodoList";
import ButtonArea from "./components/button/ButtonSave";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const newTodoList = todo.filter((item) => item.pressed === false);
    const length = newTodoList.length;
    setCounter(length);
  }, [todo]);

  const deleteHandler = (item) => {
    setTodo(todo.filter((todoItem) => todoItem !== item));
  };

  const renderList = ({ item }) => (
    <TouchableOpacity
      onPress={() => changeStyle(item.id)}
      onLongPress={() => deleteHandler(item)}
    >
      <Todolist list={item} press={item.pressed}></Todolist>
    </TouchableOpacity>
  );

  const changeStyle = (id) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, pressed: true };
      }
      return item;
    });
    setTodo(newTodo);
  };

  return (
    <View style={styles.view}>
      <HeaderSide counter={counter}></HeaderSide>
      <FlatList data={todo} renderItem={renderList}></FlatList>
      <ButtonArea setTodo={setTodo} todo={todo}></ButtonArea>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#4C68A3",
  },
});
