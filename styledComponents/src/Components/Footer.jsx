
import React from 'react'
import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />

                <Flex>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore facere enim rerum, quae, placeat repellat modi, minus labore autem esse repellendus! Nemo, aliquid? Quia culpa illo hic exercitationem repellat?</li>
                        <li>+92-12345</li>
                        <li>abc@gmail.com</li>
                    </ul>
                    <ul>
                        <li>About</li>
                        <li>What we do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                    <SocialIcons/>
                </Flex>
                <p>&copy; 2023 websitename. All rights reserved</p>
            </Container>

        </StyledFooter>
    )
}

export default Footer
