import React, {useEffect, useState} from 'react'
import Layout from './layout'
import styled from 'styled-components'
import axios from 'axios'

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://bunny-todo-backend.herokuapp.com/api/users/')
            .then(res => {
                console.log(res);
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Layout>
            <p>Home page</p>
            {}
            {users && users.map(user => <p key={user.id}>{user.username}</p>)}
        </Layout>
    )
};

export default Home