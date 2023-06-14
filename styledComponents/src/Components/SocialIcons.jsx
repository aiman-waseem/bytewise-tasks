import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

function SocialIcons() {
    return (
        <div>
            <li>
                <a href="https://twitter.com"> <FaTwitter/> </a>
            </li>
            <li>
                <a href="https://facebook.com"> <FaFacebook/> </a>
            </li>
            <li>
                <a href="https://linkedin.com"> <FaLinkedin/> </a>
            </li>

        </div>
    )
}

export default SocialIcons
