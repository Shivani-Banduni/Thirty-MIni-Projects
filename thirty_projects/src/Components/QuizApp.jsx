import React, { useState } from 'react';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

function QuizApp() {
const [ques,setques]=useState(0)
const[score,setscore]=useState(0)
const[data,setdata]=useState('')

function handlechange(e){
setdata(e.target.value)

}

function handleclick(){
if(data==questions[ques].correct){
setscore(score+1)
console.log("data",data)
console.log(score,'score')
}
if(ques<questions.length-1){
setques(ques+1)
}
}
  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>{questions[ques].question}</div>
      <div style={style.options}>
      {questions[ques].options.map((option,index)=>(
      <div key={index}>
      <input type="radio" value={option} name="option" checked={data === option} onChange={handlechange}/><label>{option}</label>
      </div>))}
      </div>
      <button disabled={ques>2} style={style.button} id="submitBtn" onClick={handleclick}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}> Your Total Score is {score}/{questions.length}</div>
    </div>
  );
}

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<QuizApp />);

export default QuizApp;