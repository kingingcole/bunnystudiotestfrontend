import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            <Container>
                {props.children}
            </Container>
        </>
    )
};

const Container = styled.div`
    background: #fff;
    margin: auto;
    padding: 10px;
    max-width: 1200px;
`;

export default Layout