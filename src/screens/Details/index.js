import React, {UseSate} from 'react';
import {Container, Header, HeaderTittle, Main, TaskContainer, TaskStyle, TaskTittle, TaskDetailsContainer,TaskDetailsEditButton, TaskDetailsDeleteButton, TaskDetailsButtonsContainer, TaskDetaisInputText} from './../../styles'

const Details = ({route}) => {
  const [value, onChangeText] = React.useState("babu");

  return (
    <Container>
    <Main>
      <TaskDetailsContainer>
        <TaskTittle>{route.params.post}</TaskTittle>
        <TaskDetaisInputText multiline numberOfLines={20} onChangeText={text => onChangeText(text)}
        value={value}/>
      </TaskDetailsContainer>
      <TaskDetailsButtonsContainer>

      <TaskDetailsEditButton>Editar</TaskDetailsEditButton>
        <TaskDetailsDeleteButton>Deletar</TaskDetailsDeleteButton>
      </TaskDetailsButtonsContainer>
    </Main>
  </Container>
  );
}

export default Details;