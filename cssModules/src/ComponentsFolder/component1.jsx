import React from 'react'
import style2 from './componnet2.module.css'
import style1 from './component1.module.css'

function Component1() {
    return (
        <>
        <div className={style1.comp1div}>
            This is Componnet 1 div
        </div>
        <div className={style2.card}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere autem voluptatibus quidem, consequatur consectetur nulla, officiis dolor alias asperiores magnam voluptate quas sapiente, iusto doloribus molestias sint totam optio?
            
        </div>
        <button type="button" className={style2.btn}>First componnet button</button>

        </>
    )
}

export default Component1
