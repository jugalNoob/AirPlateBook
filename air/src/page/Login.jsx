import React,{useState,useContext} from 'react'
import "./style/login.css"
import { useHistory,NavLink } from 'react-router-dom';
import { UserContext } from '../App';

function Login() {

  const history=useHistory();
  const {state , dispatch}= useContext(UserContext);
      // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const errors = {};
  
      // if (!name) {
      //   errors.name = 'Name is required';
      // }else if(name.length<7){
      //   errors.name = 'add more word';
      // }
  
      if (!email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!password) {
        errors.password = 'Password is required';
      }else if(password.length<7){

        errors.password = 'enter more word';
      }
  
      return errors;
    };
  
    const handleSubmit =async (event) => {
      event.preventDefault();
  
      const errors = validate();
  
      if (Object.keys(errors).length === 0) {
        // Submit form
      } else {
        setErrors(errors);
      }

      console.log(errors)


      const users=await fetch("/Signin",{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
        },
        body:JSON.stringify({
  
        email,
        password,
        })
        })    
        const res=await users.json();

        if(users.status === 400 || !res){
          window.alert("please enter your Login")
    alert("please enter your Login")
    
      }else{
        // localStorage.setItem("usersdatatoken",res.result.token);
        dispatch({type:'user' , payload:true})
        alert("is complete")
        history.push("/")
      }

    };
  

  return (
    <div>
{/* start row class line  */}

<div className="image-add">


<div className="contaired glass">

<div className="create-from">

<h1>Sign in to our platform</h1>

<p>sing in and go upload</p>
</div>

<div className="form">


 <form onSubmit={handleSubmit}>
 <center>


      
  
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter a email" />
         <p>  {errors.email && <span>{errors.email}</span>}</p>
      
       <br />
    

      
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter a password" />
       <p> {errors.password && <span>{errors.password}</span>}</p> 
   

       <br />
      
       <button type="submit">Submit</button>
       </center>
     </form>
<div className="pag">


     <p>you have already account? <NavLink to="/">Home</NavLink></p>
     </div>
</div>



</div>
</div>

{/* last row class line start */}
    </div>
  )
}

export default Login