import styled from 'styled-components/native';

export const colors = ["rgb(98,0,238)", " #974DFF"]
export const Content= styled.View`
    @font-face {
        font-family: Roboto;
        src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    }
    font-family: Roboto, sans-serif;
    width: 90%;
    height: 100%;
    align-items: center;
    overflow: hidden;

`;

export const HeaderTittle = styled.Text`
   font-size: 4rem;
   font-weight: 700;
   color: rgb(98,0,238);
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    background-color: whitesmoke;
    /* border-radius: 1rem; */
`;

export const Container= styled.View`
    background-color:  rgb(98,0,238); 
    width: 100%;
    height: 100%;
    align-items: center;
    /* flex: 1; */
    @font-face {
        font-family: Roboto;
        src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    }
    overflow: hidden;
`;


export const Main = styled.View`
    margin-top: 8%;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
`;

/*---------------Add Task---------------*/ 

export const DefaultMessage = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    
`;

export const DefaultText = styled.Text`
    color: white;
    font-size: 30px;
`;

export const AddTaskHolder = styled.View`
    width: 100%;
    /* height: 30%; */
    height: 12rem;
    background-color: white;
    border-radius: 0.8rem;
    padding: 1.5rem;
    align-items: center;
`;

export const AddTaskTittle = styled.Text`
    font-size: 1.8rem;
    color: #974DFF;
    font-weight: 700;
`;

export const AddTaskInput = styled.TextInput`
    width: 100%;
    height: 100%;
    background-color: lightgray;
    border-radius: 0.25rem;
`;

export const TaskInputHolder = styled.View`
    margin-top: 5%;
    width: 100%;
    height: 40%;
    justify-content: center;
`;
// export const AddTaskButton = styled.TouchableOpacity`
//     margin-top: 5%;
//     width: 100%;
//     /* height: 3rem; */
//     height: 30%;
//     background-color:  rgb(98,0,238); 
//     border-radius: 0.5rem;
//     align-items: center;
//     justify-content: center;

//     color: #ffffff;
//     /* font-weight: 700; */
//     font-size: 1.5rem;
// `;

export const AddTaskButton = styled.TouchableOpacity`
    position: fixed;
    top: 90%;
    left: 80%;
    z-index: 22;
    width: 12%;
    height: 7%;
    background-color: #974DFF;
    color: white;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
`;


/*---------------Task---------------*/ 

export const TaskContainer = styled.FlatList`
    /* margin-top: 3rem; */
    width: 100%;
    height: 100%;
`;

export const TaskStyle = styled.TouchableOpacity`
    margin-bottom: 2rem;
    width:100% ;
    height: 7rem;
    background-color: white;
    border-radius: 0.8rem;
    align-items: center;
`;

export const TaskTittleContainer = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`;

export const TaskDeleteButton = styled.TouchableOpacity`
    display: inline;
    color: rgb(98,0,238);
    font-weight: 900;
    align-items: center;
`;

export const TaskTittle = styled.Text`
    display: inline;
    font-size: 1.5rem;
    font-weight: 700;
    
`;

export const TaskText = styled.Text`
    font-size: 1rem;
    color: gray;
`;

export const TaskTextContainer = styled.View`
    align-items: baseline;
    width: 100%;
    padding: 0 5%;
`;

/*---------------Task Details---------------*/ 

export const TaskDetailsContainer = styled.View`
    /* margin-top: 0%; */
    width: 100%;
    height: 75%;
    background-color: white;
    align-items: center;
`;

export const TaskDetailsTittle = styled.TextInput`
    padding-left: 20px;
    font-size: 40px;
    width: 100%;
    border-color: purple;
    border-width: 0px 0px 5px 0px;
`;

export const Divider = styled.View`
    width: 100%;
    background-color: purple;
    height: 5px;
`;
export const TaskDetaisInputText = styled.TextInput`
    height: 100%;
    width: 100%;
    padding: 20px;
    font-size: 20px;
`;

export const TaskDetailsButtonsContainer = styled.View`
    margin-top: 7%;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10%;
    justify-content: space-between;
`;

export const TaskDetailsEditButton = styled.TouchableOpacity`
    width: 60%;
    /* height: 100%; */
    background-color: #974DFF;
    border-radius: 8px;

    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
`;

export const TaskDetailsDeleteButton = styled.TouchableOpacity`
    /* margin-left: 10px; */
    width: 35%;
    /* height: 100%; */
    background-color: #E8272B;
    border-radius: 8px;

    color: white;
    font-weight: 700;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
`;