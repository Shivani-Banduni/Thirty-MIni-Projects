import React from 'react';
import { Header } from '../styled/styles';
const Todo = () => {
    const[todo,setodo]=React.useState('')
    const[data,setdata]=React.useState([])

    function handlesubmit(el){
        el.preventDefault()
        setdata(cur=> { return [...cur, {title:todo, id:crypto.randomUUID()}]})
        console.log(data)
    }

    function handledelete(id){
        console.log(id,'id')
const filterdata=data.filter((e)=> e.id!==id)
setdata(filterdata)
    }


    const btn = {
        color:'white',
        marginbottom:'2%'
    }
    return (
        <>

<h2>Add your Todo here</h2>

        <Header>
               <form onSubmit={handlesubmit}>
            <input value={todo} placeholder='...Add Todoo' onChange={(e)=>setodo(e.target.value)}></input>
            <button style={btn}> Add Todo</button>
        </form>
        {data.map((e)=>{return <div key={e.id}><p>{e.title}</p> <button  onClick={()=>handledelete(e.id)}>DELETE</button></div>})}
        </Header>
        </>

    );
}

export default Todo;
