import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Layout = (props) => {
    return (
        <Container>
            <Navbar />
            {props.children}
        </Container>
    )
};

const Container = styled.div`
    background: #fff;
    margin: auto
`;

export default Layout