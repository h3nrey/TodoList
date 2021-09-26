import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import {Container, Header, Content} from '../../styles';
import HeaderTittle from '../../components/Tittle/Tittle';
import {Main, AddBlock, InputText, Tittle, AddTaskButton, PlaneList} from '../../components/Main/Style';
import {TaskTittle, StyledView, StyledTextInput} from  '../../components/Task/Style';

export default function Home ({navigation}) {

  //--------------Add Task Arrays---------------//
  const [initialElements, changeEl]  = useState([
    // { id : "0", tittle : "Object 1"},
    // { id : "1", tittle : "Object 2"},
  ]);

  const [exampleState, setExampleState] = useState(/*initialElements*/);
  const [idx, incr] = useState(0);

  const addTask = () => {
    var newArray = [...initialElements , {id : idx, tittle: "Tarefa " + (idx+1) }];
    incr(idx + 1);
    setExampleState(newArray);
    changeEl(newArray);
  }

    //--------------Task Component---------------//
    function Task({task, navigation, route}) {
      return(
      <View>
        <StyledView onPress={() => {
          alert("Details")
          navigation.navigate("Details")
        }}>
            <TaskTittle>{task.tittle}#</TaskTittle>
            <StyledTextInput placeholder="Texto da tarefa..."></StyledTextInput>
        </StyledView>
      </View>
      )
    }

  return (
    <Container>
      <Content>
        <Header>
          <HeaderTittle/>
        </Header>
      
      <Main>
          <AddBlock>
            <Tittle>Adicione aqui uma Tarefa</Tittle>
            <InputText placeholder="Tarefa"></InputText>
            <AddTaskButton onPress={addTask}>Adicionar tarefa</AddTaskButton>
          </AddBlock>
          <PlaneList
            data={exampleState}
            renderItem= {( {item}) => <Task task={item, "Details"} ></Task>
            }
          />
        </Main>
    </Content>
    
  </Container>
  );
}