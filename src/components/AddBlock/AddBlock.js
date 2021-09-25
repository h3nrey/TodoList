import React, {useState} from 'react';
import {AddBlockStyle, Tittle, InputText, AddTaskButton} from './Style';
import { FlatList } from 'react-native-gesture-handler';

export default function AddBlock() {
    return(
        <AddBlockStyle>
            <Tittle>Adicione aqui uma Tarefa</Tittle>
            <InputText placeholder="Tarefa"></InputText>
            <AddTaskButton>Adicionar tarefa</AddTaskButton>
        </AddBlockStyle>
    )
}