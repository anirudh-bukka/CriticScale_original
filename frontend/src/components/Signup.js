import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'

function Signup() {

  const{register,handleSubmit,formState:{errors}}=useForm();
  
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  
  // const addItems = () => {
  //   // setEmail([...email, {
      
  //   // }]),
  //   // setUsername([...username, {

  //   // }]),
  //   // setPassword([...password, {

  //   // }])

  //   // const credentials = [email, username, password];

  // }

  // for submission

  const onFormSubmit=async()=>{      
    try{
      await axios.post("/register",{
        name,
        email,
        password
   })
  }
  catch(err){
      console.log("not posted")
    }
  }
  


  return (

    <>
      <div className="container mx-auto px-4 h-full con" >
        <div className="flex content-center items-center justify-center h-full cardi card ">
          <div className="w-full lg:w-4/12 px-4 ">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6 bg-primary">
                <div className="mx-auto "style={{width: "200"}}>
                  <h3 className="text-blueGray-500  text-sm font-bold">
                    Sign Up
                  </h3>
                </div>
                
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                  <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      UserName: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                     <input type="text" 
                      id='un'  
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                      onChange={(e)=>{
                      setname(e.target.value)}}/>
                  {errors.username?.type==='required' && <p className='text-danger'>* Username Required</p>}
                  {errors.username?.type==='minLength' && <p className='text-danger'>min-4 characters Required</p>}
                  </div>
                    <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                     <input type="email" 
                      id='email'
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                     onChange={(e)=>{
                      setEmail(e.target.value)}}/>
                     {errors.email?.type==='required' && <p className='text-danger'>Email Required</p>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                     <input type="password" 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      id='password'
                      onChange={(e)=>{
                        setPassword(e.target.value)}}/>
                     {errors.email?.type==='required' && <p className='text-danger'>Password Required</p>}
                  </div>
                  <div className='me-4 ms-4'>
                  <button type='submit' className="submit btn btn-success w-50 mb-4" >sign up</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup