import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios'

const AddTask = ({ id, updateTasks }) => { //id is user's id for making tasks

    const ENV = process.env.NODE_ENV;
    const PRODUCTION_URL = `https://bunny-todo-backend.herokuapp.com/api/tasks/`;
    const DEVELOPMENT_URL = `http://127.0.0.1:8000/api/tasks/`;
    let url = ENV === 'development' ? DEVELOPMENT_URL : PRODUCTION_URL;

    const [newTask, setNewTask] = useState('');

    const SubmitNewTask = (task, id) => {
        axios.post(url, {userId: id, description:task})
            .then(res => {
                console.log(res.data);
                updateTasks(res.data);
                setNewTask('')
            })
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (newTask.length > 0) SubmitNewTask(newTask, id)
    };

    return (
        <FormContainer onSubmit={e => handleSubmit(e)}>
            <Input value={newTask} placeholder={'Add new task...'} type={'text'} onChange={e => setNewTask(e.target.value)}/>
            <SubmitButton>Add Task</SubmitButton>
        </FormContainer>
    )
};

const FormContainer = styled.form`
    text-align: left;
    max-width: 1000px;
    margin: 20px auto;
    padding: 0
`;

const Input = styled.input`
    max-width: 400px;
    height: 30px;
    display: block;
    padding: 5px;
    border: 1px solid gray
`;


const SubmitButton = styled.button`
    border: 1px solid green;
    color: green;
    margin-top: 10px;
    padding: 6px 20px;
    background: transparent;
    &:hover{background: green; color: white}
    cursor: pointer;
`

export default AddTask