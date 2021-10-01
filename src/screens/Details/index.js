import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container, Divider, TaskDetailsTittle, TaskDetailsContainer,TaskDetailsEditButton, TaskDetailsDeleteButton, TaskDetailsButtonsContainer, TaskDetaisInputText} from './../../styles'
import { Creators as TaskActions } from "../../store/ducks/tasks";


const Details = ({route, navigation}) => {
  const { itemId, itemT, itemD } = route.params;
  const [taskTitle, setTaskTitle] = useState(itemT);
  const [taskDescription, setTaskDescription] = useState(itemD);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(TaskActions.updateTask(itemId, taskTitle, taskDescription));
    setTaskTitle("");
    setTaskDescription("");
    // Keyboard.dismiss();
    navigation.navigate("Home");
  }

  function handleDeleteTask(id) {
    dispatch(TaskActions.removeTasks(id));
    dispatch(TaskActions.verifyTask());
    setTaskTitle("");
    setTaskDescription("");
    navigation.navigate("Home");
  }

  return (
    <Container>
    {/* <Main> */}
      <TaskDetailsContainer>
        <TaskDetailsTittle 
        numberOfLines={10} 
        placeholder="Tarefa"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}/>
        <Divider />
        <TaskDetaisInputText 
        multiline 
        numberOfLines={20} 
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
        />
      </TaskDetailsContainer>
      <TaskDetailsButtonsContainer>

      <TaskDetailsEditButton
        onPress={() => {
          handleAddTask();
        }}>Salvar
      </TaskDetailsEditButton>

      <TaskDetailsDeleteButton 
        onPress={() => {
          handleDeleteTask(itemId);
        }}>Deletar</TaskDetailsDeleteButton>
      </TaskDetailsButtonsContainer>
    {/* </Main> */}
  </Container>
  );
}

export default Details;