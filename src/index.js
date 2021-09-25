import React from 'react';
import { Text, View, FlatList} from 'react-native';
import {Container, Header, Content} from './styles';
import Tittle from './components/Tittle/Tittle';
import MainFunction from './components/Main/Main';


export default function Index() {
  return (
    <Container>
      <Content>
        <Header>
          <Tittle></Tittle>
        </Header>

        <MainFunction></MainFunction>
      </Content>
      
    </Container>
  );
}
