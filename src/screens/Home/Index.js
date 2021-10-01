import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultMessage, DefaultText, Container, Main, AddTaskButton, TaskDeleteButton, TaskTittleContainer, TaskContainer, TaskStyle, TaskTittle, TaskTextContainer, TaskText} from './../../styles'
import { useSelector, useDispatch } from "react-redux";
import { Creators as TaskActions } from "../../store/ducks/tasks";
export default function Home ({navigation}) {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    state.tasks.data;
    console.log(state.tasks.data);
  }), ([]);

  //--------------Add Task---------------//
  function handleEditTask(item) {
    navigation.navigate("Details", {
      itemId: item.id,
      itemT: item.title,
      itemD: item.description,
    });
  }

  //--------------Add Task---------------//
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  function handleAddTask() {
    dispatch(TaskActions.addTasks(taskTitle, taskDescription));
    setTaskTitle("Tarefa");
    setTaskDescription("");
    //Keyboard.dismiss();
    // navigation.navigate("Home");
  }

  //--------------Delete Task---------------//
  function handleDeleteTask(id) {
    dispatch(TaskActions.removeTasks(id));
    dispatch(TaskActions.verifyTask());
    setTaskTitle("");
    setTaskDescription("");
    navigation.navigate("Home");
  }

  const DefaultItemInList = () => {
    return (
      <DefaultMessage>
        <DefaultText>Sem tarefas :/ </DefaultText>
      </DefaultMessage>
    )
  }

  function Task({item}) {
    // if(item.title == undefined || item.title == null) {
    //   item.tittle = item.id;
    // }
    return(
      <TaskStyle onPress={() => handleEditTask(item)}>
        <TaskTittleContainer>
        <TaskTittle>{item.title} </TaskTittle>
        <TaskDeleteButton onPress={() => {
          dispatch(TaskActions.removeTasks(item.id)) &&
              dispatch(TaskActions.verifyTask())}}
        >X</TaskDeleteButton>
        </TaskTittleContainer>
        <TaskTextContainer>
          <TaskText>{item.description}</TaskText>
        </TaskTextContainer>
      </TaskStyle>
    )
  }

  return (
    <Container>
      <Main>
        {/* <AddTaskHolder>
          <AddTaskTittle>Adicionar tarefa</AddTaskTittle>
          <TaskInputHolder>
            <AddTaskInput placeholder="Insira seu texto aqui"/>
          </TaskInputHolder>
          <AddTaskButton onPress={addTask}>Adicionar tarefa</AddTaskButton>
        </AddTaskHolder> */}


        <TaskContainer 
          data={state.tasks.data}
          renderItem={Task}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={DefaultItemInList}
        />/
        <AddTaskButton onPress={handleAddTask}>+</AddTaskButton>
        
      </Main>
    </Container>
  );
}