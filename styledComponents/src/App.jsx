import { ThemeProvider } from 'styled-components'
import Header from './Components/Header'
import { Container } from './Components/styles/Container.styled'
import content from './content'
import Card from './Components/Card'
import Footer from './Components/Footer'



function App() {
  const theme = {
   colors:{
     header:' rgb(179, 227, 246)',
     body:' #ade2f0',
     footer:'#00333',
    },
   mobile: '768px',
  }

  return (
    <>
    <ThemeProvider theme = {theme} >
    <Header/>
      <Container>
        {content.map((item,index)=>(
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App
