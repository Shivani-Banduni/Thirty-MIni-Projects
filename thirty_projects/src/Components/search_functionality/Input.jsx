import React from 'react';
import mockdata from '../MOCK_DATA.json'
import './Input.css'
const Input = () => {
    const[data,setdata]=React.useState('')
    const[Newdata,setnewdata]=React.useState([])

const handlesearch=()=>{
    const capitalizedData = data.charAt(0).toUpperCase() + data.slice(1); // Capitalize the first letter
    console.log(capitalizedData); // Log the capitalized string
const newdata=mockdata.filter((e)=> e.first_name == capitalizedData)
setnewdata(newdata)
}



    return (
        <>
     <div className='input_main'>

        <input placeholder='SEARCH...' onChange={(e)=>setdata(e.target.value)} />
        <button  onClick={handlesearch}>Click</button>
        </div>

<div className='lower-div'>

{data ?  Newdata.map((e,id)=>{return <div className='single_div' key={e.id}> <p>{e.first_name}</p>     <p>{e.last_name}</p></div> })
:
mockdata.map((e,id)=>{return <div key={e.id}> <p>{e.first_name}</p></div> })}
</div>
        </>

    );
}

export default Input;
