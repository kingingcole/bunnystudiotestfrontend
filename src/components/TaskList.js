import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const TaskList = ({task}) => {
    return (
        <ListWrapper>
            {task}
        </ListWrapper>
    )
};

const ListWrapper = styled.p`
    background: #efefef;
    padding: 10px;
    margin: 10px auto;
    max-width: 1000px;
    display: block;
    color: black;
    text-decoration: none;
`;

export default TaskList