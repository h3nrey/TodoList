import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Container, Header, HeaderTittle, Main, AddTaskHolder, AddTaskTittle, AddTaskInput, AddTaskButton, TaskInputHolder, TaskContainer, TaskStyle, TaskTittle, TaskTextContainer, TaskText} from './../../styles'


export default function Home ({navigation}) {

  //--------------Add Task Arrays---------------//
  const [initialElements, changeEl]  = useState([
    // { id : "0", tittle : "Object 1"},
    // { id : "1", tittle : "Object 2"},
  ]);

  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(0);

  const addTask = () => {
    var newArray = [...initialElements , {id : idx, tittle: "Tarefa " + (idx+1) }];
    incr(idx + 1);
    setExampleState(newArray);
    changeEl(newArray);
    
  }

  let titulor = "tarefa" + exampleState.length;

  function Task({task}) {
    return(
      <TaskStyle onPress={() => {
        navigation.navigate({
          name: "Details",
          params: {post: task}
        })
      }}>
        <TaskTittle>{task}</TaskTittle>
        <TaskTextContainer>
          <TaskText>Texto...</TaskText>
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


        <AddTaskButton onPress={addTask}>+</AddTaskButton>
        <TaskContainer data={exampleState}
            renderItem= {(task) => 
            <Task task={task.item.tittle}/>
            // <>
            // <Text>{task.item.tittle}</Text>
            // <Text>{task.item.id}</Text>
            // </>
            }>
          
        </TaskContainer>
        
      </Main>
    </Container>
  );
}