import logo from './logo.svg';
import './App.css';
import Quiz from './Components/Quiz'
import { Route, Routes } from 'react-router-dom';
import QuizAnswer from './Components/Quiz-answer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    
    {/* <Routes>
    <Route path='/' element={<Quiz/>}/ >
    <Route path='quizans' element={<QuizAnswer/>}/>
    </Routes> */}







    <Navbar/>
    </div>
  );
}

export default App;
