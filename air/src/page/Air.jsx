import React,{useState , useEffect} from 'react'
import { ethers } from "ethers";
import abi from "./Abi.json"
import "./style/air.css"

import {useHistory} from "react-router-dom"
function Air() {



  const history=useHistory();

  
  const [userData , setUserData]=useState()


  const callAbout=async()=>{

    try {
      const res=await fetch("/Cont",{
method:"GET",
headers:{
  Accept:"application/json",
  "Content-Type": "application/json",
},
credentials:"include"

      })

      const data=await res.json()
      console.log(data)
      setUserData(data)
      if(!res.status===200){
        const error=new Error(res.error)
        throw error;
      }
      

    } catch (error) {

      console.log(error)
      history.push("/login")
     
      
    }

  }
  useEffect(()=>{
    callAbout()
  },[])




  const [state , setState]=useState({
    provider:null,
    signer:null,
    address:null
})


const contractAddress="0x8B6cbF8CF957576a74C5cFe576c3e8feAdB461b7";


//address
const [Addresss, setAddresss]=useState();

useEffect(()=>{
const Checker=async()=>{
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const account=await provider.send("eth_requestAccounts", []);
  const signer=provider.getSigner()
  const address = await signer.getAddress()
  // console.log("this is account " + account)
  // console.log("this is signer " + signer.toString())
  // console.log(address)
  setAddresss(address)
  setState({provider , signer , address})   


}

Checker()
},[])

const [bal , setBal]=useState()
useEffect(()=>{
const All=async()=>{
const {provider ,  address}=state;
const balance=await provider.getBalance(address)
const balaether=ethers.utils.formatEther(balance, "ether")

// console.log(balaether)
setBal(balaether)
}
All()

},[state])


const [getter, setGetter] = useState('');
const [price, setPrice] = useState();
const [name, setName] = useState('');
const [country, setCountry] = useState('');
const [gender, setGender] = useState('');

const buyTicket = async () => {
  const { signer } = state;
  const contractss = new ethers.Contract(contractAddress, abi, signer);


  const tx = await contractss.BuyAirPlanTicket(getter, price, name, country, gender, {
    value: ethers.utils.parseEther("0.00000000000000001")
  });

  console.log(tx)
};


const PayBal=async()=>{

  const {provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi , provider)
}

const [ticketss,setTickets]=useState()


const [check , setCheck]=useState()

const showTicket=async()=>{

  const {provider}=state;
  const contractss=new ethers.Contract(contractAddress, abi , provider)

  const tickets=await contractss.Ticket(ticketss)

  console.log(tickets)

  setCheck(tickets)
}


const checkBala=async()=>{

  const {provider}=state;

  const contractss=new ethers.Contract(contractAddress, abi , provider)

  const checkBalas=await contractss.contractBalance()
  console.log(checkBalas.toString())
}

checkBala()





const getTicket=async()=>{

  const {provider}=state;

  const contractss=new ethers.Contract(contractAddress, abi , provider)

  const tickid=await contractss.getTicketCount()
  console.log(tickid.toString())

 
}
getTicket()

const [ref, setRef]=useState()
const refundticket=async()=>{
  const {signer}=state;
  const contractss=new ethers.Contract(contractAddress, abi , signer)

  const tx = await contractss.refundPayment(ref, {
    value: ethers.utils.parseEther("0.00000000000000001")
  });

  console.log(tx)
}


  return (
    <div>


<div className="background-Air">


    <div className="address">
    <h1>{Addresss ? Addresss :"not connect"}</h1><br />
 
    </div>

<div className="balance">
<h1>{bal ? bal :" this is your money"}</h1>
</div>


<div className="addinformation">
<center>




<p>    Address:</p>
    
        <input type="text" value={getter} onChange={(e) => setGetter(e.target.value)} />

    <br />

      <p> Price:</p>
       
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

      <br />

   <p> Name:</p>
       
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
   
      <br />
 <p>    Country:</p>
    
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />

      <br />
    <p>      Gender:</p>
  
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
    
      <br />
      
            <button onClick={buyTicket}>Buy Ticket</button>
  
</center>
</div>

<div className="information-tickShow">

<center>


<input type="text" name="" id="" onChange={(e)=>setTickets(e.target.value)}  placeholder='EnterTicketNumber'
/>
<button onClick={showTicket}>showTicket</button>

{check && ( // only render ticket info if check is defined
      <>
        <h1>name: {check.name}</h1>
        <br />
        <h1>country: {check.country}</h1>
        <br />
        <h6>address: {check.owner}</h6>
        <h1>gender: {check.gender}</h1>
      </>
    )}


</center>
</div>

<div className="refundTicket">

<center>


  <input type="text" name="" id="" onChange={(e)=>setRef(e.target.value)} placeholder='enter a number' />

  <button onClick={refundticket}>refunds</button>
  </center>
</div>



<button onClick={PayBal}>payBal</button>



     
</div>
    </div>
  )
}

export default Air