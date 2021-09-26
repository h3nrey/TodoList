import React, {useState} from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {View, Text } from 'react-native';
import {Main, AddBlock, InputText, Tittle, AddTaskButton, PlaneList} from './Style';
import {TaskTittle, StyledView, StyledTextInput} from  '../Task/Style';

export default function MainFunction(rota) {

  const [initialElements, changeEl]  = useState([
    // { id : "0", tittle : "Object 1"},
    // { id : "1", tittle : "Object 2"},
  ]);

  const [exampleState, setExampleState] = useState(/*initialElements*/);
  const [idx, incr] = useState(0);

  const addElement = () => {
    var newArray = [...initialElements , {id : idx, tittle: "Tarefa " + (idx+1) }];
    incr(idx + 1);
    console.log(initialElements.length);
    setExampleState(newArray);
    changeEl(newArray);
  }

  const addTask = () => {
    Tasks.push({tittle: "azul"})
    window.alert(Tasks.length)

  }
    const Tasks = [
      {
        tittle: 'AAAAAAAAAAAAAAAAAAAAA',
        text: 'i love Babu, his is big and furry, who will dont love this guy?'
      }
    ]

    function Task({task, navigation, route}) {
      return(
      <View>
        <StyledView onPress={() => {
          alert(rota)
          navigation.navigate(rota)
        }}>
            <TaskTittle>{task.tittle}#</TaskTittle>
            <StyledTextInput placeholder="Texto da tarefa..."></StyledTextInput>
        </StyledView>
      </View>
      )
    }
    return(
        <Main>
          <AddBlock>
            <Tittle>Adicione aqui uma Tarefa</Tittle>
            <InputText placeholder="Tarefa"></InputText>
            <AddTaskButton onPress={addElement}>Adicionar tarefa</AddTaskButton>
          </AddBlock>
          <PlaneList
            data={exampleState}
            renderItem= {( {item}) => <Task task={item, rota} ></Task>
            }
          />
        </Main>
    )
}