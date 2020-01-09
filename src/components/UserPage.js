import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Layout from './layout'
import axios from "axios";
import TaskList from './TaskList'
import AddTask from './AddTask'


const UserPage = (props) => {
    let {username} = props.match.params;

    const ENV = process.env.NODE_ENV;
    const PRODUCTION_URL = `https://bunny-todo-backend.herokuapp.com/api/users/${username}/`;
    const DEVELOPMENT_URL = `http://127.0.0.1:8000/api/users/${username}/`;
    let url = ENV === 'development' ? DEVELOPMENT_URL : PRODUCTION_URL;


    const [user, setUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setUser(res.data);
                setTasks(res.data.tasks);
            })
            .catch(err => console.log(err))
    }, []);


    const updateTasks = newTask => {
        setTasks([...tasks, newTask])
    };

    const updateUsername = username => {
        axios.put(url, {username})
            .then(res => {
                setUser(res.data);
                props.history.push('/')
            })
    };

    const deleteUser = username => {
        axios.delete(url, {username})
            .then(props.history.push('/'))
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newUsername);
        updateUsername(newUsername)
    };

    const handleDelete = (username) => {
        let confirm = window.confirm('Are you sure?');
        if (confirm === true) deleteUser(username)
    };

    console.log(tasks)

    return (
        <Layout>
            {!user && <p>Loading user...</p>}
            {user && <h3 style={{fontWeight: 'normal'}}>Tasks set by <strong>{user.username}</strong></h3>}
            {user &&
            <ButtonContainers>
                <EditButton onClick={() => setShowForm(true)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(user.username)}>Delete User</DeleteButton>
            </ButtonContainers>}
            {showForm &&
            <Form onSubmit={e => handleSubmit(e)}>
                <Input type={'text'} onChange={e => setNewUsername(e.target.value)}/>
                <Button>Submit</Button>
            </Form>}
            {tasks && tasks.map(task => <TaskList key={task.id} task={task.description}/>)}
            {user && <AddTask id={user.id} updateTasks={updateTasks}/>}
        </Layout>
    )
};

const ButtonContainers = styled.div`
    display: flex;
    max-width: 220px;
    margin: 10px auto;
    justify-content: space-around
`;

const Button = styled.button`
    background: transparent;
    padding: 6px 20px;
    cursor: pointer;
    border: 1px solid green;
    color: green;
    &:hover{background: green; color: white}
`;

const DeleteButton = styled(Button)`
    border: 1px solid red;
    color: red;
    &:hover{background: red; color: white}
`

const EditButton = styled(Button)`
    border: 1px solid green;
    color: green;
    &:hover{background: green; color: white}
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  width: 70%; 
`;

const Form = styled.form`
    display: flex;
    max-width: 400px;
    margin: 10px auto;
    justify-content: space-around
`

export default UserPage