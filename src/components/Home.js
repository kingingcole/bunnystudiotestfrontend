import React, {useEffect, useState} from 'react'
import Layout from './layout'
import styled from 'styled-components'
import axios from 'axios'
import UserList from './UserList'

const Home = () => {

    const ENV = process.env.NODE_ENV;
    const PRODUCTION_URL = 'https://bunny-todo-backend.herokuapp.com/api/users/';
    const DEVELOPMENT_URL = 'http://127.0.0.1:8000/api/users/';

    const [users, setUsers] = useState([]);
    useEffect(() => {
        let url = ENV === 'development' ? DEVELOPMENT_URL : PRODUCTION_URL;
        axios.get(url)
            .then(res => {
                console.log(res);
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Layout>
            {!users.length && <p>Loading users...</p>}
            {users && users.map(user => <UserList key={user.id} username={user.username} />)}
        </Layout>
    )
};

export default Home