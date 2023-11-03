import logo from './logo.svg';
import './App.css';
import Quiz from './Components/Quiz'
import { Route, Routes } from 'react-router-dom';
import QuizAnswer from './Components/Quiz-answer';

function App() {
  return (
    <div className="App">
    <Quiz/>
    <Routes>
    <Route path='quizans' element={<QuizAnswer/>}/>
    </Routes>
    </div>
  );
}

export default App;
