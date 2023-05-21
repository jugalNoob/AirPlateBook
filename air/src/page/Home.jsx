import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import "./style/home.css"
import { UserContext } from '../App';
import air from "./style/img/_imagine_prompt__airplane__5_futuristic__1_blackli-removebg-preview.png"
function Home() {

  const {state , dispatch}= useContext(UserContext);

  const Render=()=>{

    if(state){

      return(

<>

 <NavLink to="/">home</NavLink>
<br />
<br />
<NavLink to="/air">air</NavLink>
<br />
<br />

<NavLink to="/logout">logout</NavLink>

{/* //Logout line last row class */}

</>

      )
    }else{

      return(
<>
<NavLink to="/">home</NavLink>
<br />
<br />
<NavLink to="/air">air</NavLink>
<br />
<br />
<NavLink to="/form">form</NavLink>
<br />
<br />
<NavLink to="/login">login</NavLink>
<br />
<br />

</>

      )
    }

  }

  return (
    <div>

<div className="all-background">


<div className="background">

<div className="all-show">


<div className="first-row">


<div className="fa">
<i class="fa-duotone fa-plane fa-spin fa-spin-reverse"></i>
</div>

<div className="heaf-one">
<h1>airplaneWeb3</h1>
</div>

<div className="nav">
<Render/>
{/* <NavLink to="/">
    home
</NavLink>

<br />
<NavLink to="/air">
    air
</NavLink>

<br />
<NavLink to="/form">
  form
</NavLink>

<br />
<NavLink to="/login">
  login
</NavLink> */}
</div>

</div>


<div className="second-row">


<div className="two-head">
<h1>airplane ticket book in </h1>

<h2> use blockChain</h2>

<h3> with web3 era</h3>
</div>

<div className="image">
<img src={air} alt="" />
</div>
</div>

</div>

</div>

</div>

{/* <NavLink to="/">
    home
</NavLink>

<br />
<NavLink to="/air">
    air
</NavLink>

<br />
<NavLink to="/form">
    fomr
</NavLink>

<br />
<NavLink to="/login">
  login
</NavLink> */}

    </div>
  )
}

export default Home