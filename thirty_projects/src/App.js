import logo from './logo.svg';
import './App.css';
import Quiz from './Components/Quiz'
import { Route, Routes } from 'react-router-dom';
import QuizAnswer from './Components/Quiz-answer';
import Navbar from './Components/Navbar/Navbar';
import QuizApp from './Components/QuizApp';
import Input from './Components/search_functionality/Input';
import Form from './Components/form/Form';
import Nav from './Components/Auth/Nav';
import Todo from './Components/Todo/Todo';
function App() {
  return (
    <div className="App">
    
    {/* <Routes>
    <Route path='/' element={<Quiz/>}/ >
    <Route path='quizans' element={<QuizAnswer/>}/>
    </Routes> */}







    {/* <Navbar/>
<QuizApp/> */}
    



    {/* <Input/> */}


    {/* <Form/> */}

    {/* <Nav/> */}

    <Todo/>
    </div>
  );
}

export default App;
