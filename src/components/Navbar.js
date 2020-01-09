import React from 'react'
import styled from 'styled-components'


const Navbar = () => {
    return (
        <NavContainer>
            <div>
                <Heading>Bunny Note</Heading>
            </div>
        </NavContainer>
    )
};

const NavContainer = styled.nav`
    width: 100%;
    height: 7vh;
    background: #00baba;
`;

const Heading = styled.h2`
    margin: auto
`

export default Navbar