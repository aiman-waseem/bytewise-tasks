// use npm run build then npm run start instead of npm run dev

import "../styles/global.css"
import Link from 'next/link'
import {useRouter} from 'next/router'

//to check current url path we will use useRouter

export default function App({Component,pageProps}) {
  const router = useRouter()
  return (
    <>
    <div>
      <h1 className="site-header"> Blog Site </h1>
   
        <nav className='header-nav' >
          <ul>
            <li>
         <Link className={router.pathname=='/'?"active" : "" } href='/' >Home</Link>
            </li>
            <li>
              <Link className={router.pathname=='/about'?"active" : "" }  href='/about'>About</Link>
            </li>
            <li>
              <Link className={router.pathname=='/Blog'? "active":""} href='/Blog'>Blog</Link>
            </li>
          </ul>

        </nav>
      
    </div>
        <h3> Header </h3>
        <Component {...pageProps}/>
        <h3> Footer </h3>
    </>
  )
}




