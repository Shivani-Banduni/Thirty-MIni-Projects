import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Quiz = () => {
const [q,setques]=React.useState(0)
const [marks,setmarks]=React.useState(0)

console.log(q)

const ques = [
    {
        question: 'Which is the hottest planet in our solar system?',
        answers: [
            { ans: 'Jupiter', isCorrect: false },
            { ans: 'Mars', isCorrect: true },
            { ans: 'Mercury', isCorrect: false },
            { ans: 'Saturn', isCorrect: false }
        ]
    },
    {
        question: 'Who is the ceo of Tesla',
        answers: [
            { ans: 'Mark Zukerberg', isCorrect: false },
            { ans: 'Tim Cook', isCorrect: true },
            { ans: 'Elon Mask', isCorrect: false },
            { ans: 'Naran Murty', isCorrect: false }
        ]
    },
    {
        question: 'Who is the Babu',
        answers: [
            { ans: 'Mahatma Gandhi', isCorrect: true },
            { ans: 'APJ Abdul Kalam', isCorrect: false },
            { ans: 'Sardar vahabhai Patel', isCorrect: false },
            { ans: 'Naran Murty', isCorrect: false }
        ]
    },
    {
        question: 'Which element has the highest melting point',
        answers: [
            { ans: 'Carbon', isCorrect: false },
            { ans: 'Aluminium', isCorrect: false },
            { ans: 'Helium', isCorrect: false },
            { ans: 'Tungsten', isCorrect: true }
        ]
    },
    // Add more question objects if needed
];

function handleclick(status){
console.log(status) 
if(status==true){
setmarks(marks+1)
}
}
// const handleNavigate =()=>{
//     setques(q+1);
//     if(q==3){
//         navigate("/quesans")
//     }
// }

    return (
        <Box className='quiz-mian-box'  
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          backgroundColor: 'lightgray',
          borderRadius: 8,
          maxWidth: '100%',
          margin: '0 auto',
          boxShadow: 2,
        }}
  >

 <div className='quiz-div1'> 
<div >
    <span>Question Number</span>  {q+1}/4
    <div>
    {<h4>{ques[q].question}</h4>}
    </div>
</div>




<div>
    {ques[q].answers.map((e)=>{return <div style={{display:'flex', flexDirection:'column', marginTop:'3vh'}}><Button onClick={()=>handleclick(e.isCorrect)} size='large' variant='contained'>{e.ans}</Button></div>})}
</div>
 </div>

 <div style={{display:'flex', gap:'6vh'}}>
     <Button  disabled={q<=0} onClick={()=>setques(q-1)} variant='contained'>Pre</Button>
     <Button  onClick={()=>setques(q+1)} variant='contained'>Next</Button>
{/* {q===3? <Link to='/quizans'></Link>:''} */}
 </div>
             
        </Box>
    );
}

export default Quiz;
