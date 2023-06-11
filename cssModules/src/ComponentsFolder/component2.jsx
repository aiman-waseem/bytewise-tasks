import React from 'react'
import style2 from './componnet2.module.css'
import style1 from './component1.module.css'

function Component2() {
    return (
        <>
        <div className={style1.card}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere autem voluptatibus quidem, consequatur consectetur nulla, officiis dolor alias asperiores magnam voluptate quas sapiente, iusto doloribus molestias sint totam optio?
            
        </div>
        <button type="button" className={style2.btn}>Second componnet button</button>
        </>
    )
}

export default Component2
