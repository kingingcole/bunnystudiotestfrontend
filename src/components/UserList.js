import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const UserList = ({username}) => {
    return(
        <ListWrapper to={`/${username}`}>
            {username}
        </ListWrapper>
    )
};

const ListWrapper = styled(Link)`
    background: #efefef;
    padding: 10px;
    margin: 10px auto;
    max-width: 1000px;
    display: block;
    color: black;
    text-decoration: none;
`;

export default UserList