
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'
import React from 'react'


function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src= './images/logo.svg' alt=''/>
                    <Button> Try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the community Your Fans will love</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum placeat deleniti aut commodi delectus libero, tempora rem iste amet aliquam. Quod at, quasi nam inventore quidem recusandae assumenda quibusdam.
                        </p>
                        <Button bg='#ff0099' color='white'>Get Started For Free</Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg'></Image>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header
