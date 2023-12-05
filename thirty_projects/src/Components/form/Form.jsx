import React from 'react';
import './form.css'
const Form = () => {
const [values,setvalues]=React.useState({
    firstname:'',
    lastname:'',
    email:''
})
const[data,setdata]=React.useState([])
const[status,setstatus]=React.useState(false)

const handlechange=(e)=>{
setvalues({...values, [e.target.name]:e.target.value})
// console.log(values)
}

function handleclick(e){
e.preventDefault()
if(values.firstname!=='' && values.lastname!=='' && values.email!==''){
setdata([...data,values])
console.log(data)
setstatus(true)
setvalues({ firstname: '', lastname: '', email: '' }); // Clear form fields after submission

console.log('jksdjkhjkhdkjhakjdh')
}
else{
    alert('fill details')
}
}




    return (
        <div className='outer-div'>

            <div className='form'>
            {status ?            <div className='success'> <b >Thanks for your Registration</b></div>:null}
            <h2>Registration Form</h2>
<input type='text'  onChange={handlechange}  name='firstname' value={values.firstname} placeholder='Ener your firstname' required></input><br/>  
<input  type='text' onChange={handlechange} name='lastname' value={values.lastname} placeholder='Ener your Lastname' required></input><br/>
<input  type='email'  onChange={handlechange} name='email' value={values.email} placeholder='Ener your Email' required></input><br/>
<button type='submit' onClick={handleclick}>Register</button>
            </div>
        </div>
    );
}

export default Form;
