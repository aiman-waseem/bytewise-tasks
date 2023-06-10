
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NewBook } from './pages/NewBook';
import { Book } from './pages/Book';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <>
       <nav>
        <ul>
          <li> <Link to="/" >Home</Link> </li>
          <li> <Link to="/books" >Books</Link> </li>
          
        </ul>
       </nav>
       <Routes>
        <Route path="/" element={ <Home/> } ></Route>
        <Route path='/books'>
          <Route index element={<BookList/>}></Route>
           <Route path=':id' element={<Book/>}></Route>
           <Route path='new' element={<NewBook/>}></Route>
        </Route>
        {/* <Route  path="/books" element={ <BookList/> }  ></Route>
        <Route path="/books/:id" element={ <Book/>} ></Route>
        <Route path="/books/new" element={ <NewBook/>} ></Route> */}
        <Route path="*" element={<NotFound/>}></Route>
       </Routes>
       
    </>
  )
}

export default App
