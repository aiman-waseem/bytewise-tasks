import React from 'react'
import { color, motion } from 'framer-motion'
import styled from 'styled-components'
import img1 from '../images/img1.png'


const Image = styled.img`
   position: absolute;
   bottom: 20px;
   left: 400px;
    max-width: 250px;
    max-height: 250px;
    border-radius: 10px;

`
const ColumnRight = styled.div`
    display: flex;
   position: relative;
   align-items: center;
   justify-content: center;
`
const ColumnLeft = styled.div`
    
`
const Button = styled(motion.button)`
    padding: 1rem 2rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    background: white;
`


function Hello() {
    const fadeLeft = {
        hidden : {opacity:0, x:-100},
        visible: {opacity:1, x:0}
    }

    
    return (
        <div className='Container'>
            <ColumnLeft>
            <motion.h1
              initial= {{opacity:0}}
              animate = {{opacity:1}}
              transition={{duration:2}}
            >
                
                HELLO WORLD!!!
            </motion.h1>
            <motion.p
              variants={fadeLeft}
              initial='hidden'
              animate = 'visible'
              transition={{duration:1}}

              style={{fontSize:'2rem'}}
            >
                Journey To unknown
            </motion.p>
            
            </ColumnLeft>
              
           <ColumnRight>
           <Image src={img1} alt='img1' 
             whileTap={{scale:0.8}}
             drag = {true}
             dragConstraints = {{left:50, right:0, top:0, bottom:50}}
             initial = {{opacity:0, x: 100}}
             animate = {{opacity:1, x:0, transition: {duration:1}}}
           />
            
           </ColumnRight>
           <Button
              whileHover={{scale: 1.05}}
              whileTap={{
                scale: 0.95,
                backgroundColor: '#67F6E7',
                border: 'none',
                color: '#000',
              }}
              initial = {{opacity : 0}}
              animate = {{opacity:1, transition:{duration:1.5}}}
           >Button</Button>

            </div>

       
    )
}

export default Hello
