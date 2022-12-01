import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import './Login.css'

function Login() {  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  
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

  const onFormSubmit=async(userData)=>{      
    try{
     const res= await axios.post("/login",{
        email,
        password
   });
   console.log(res)
   if(res.success==="true"){
     Navigate("/");
   }
  }
  catch(err){
      console.log("not posted")
    }
  }


  return (

    <>
      <div className="container mx-auto px-4 h-full con" >
        <div className="flex content-center items-center justify-center h-full cardi card">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6 bg-primary">
                <div className="mx-auto"style={{width: "200"}}>
                  <h3 className="text-blueGray-500  text-sm font-bold">
                    Log In
                  </h3>
                </div>
                
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={onFormSubmit}>
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
                     {/* {errors.email?.type==='required' && <p className='text-danger'>Password Required</p>} */}
                  </div>
                  <div className='me-4 ms-4'>
                  <button type='submit' className="submit btn btn-success w-50 mb-4" >Log In</button>
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

export default Login;


















// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// // import bg from './bg.png'
// import './Login.css'
// import './Signup'


// const Login = () => {

//   // const [email, setEmail] = useState("");
//   // const [username, setUsername] = useState("");
//   // const [password, setPassword] = useState("");
  
//   // const addItems = () => {
//   //   // setEmail([...email, {
      
//   //   // }]),
//   //   // setUsername([...username, {

//   //   // }]),
//   //   // setPassword([...password, {

//   //   // }])

//   //   // const credentials = [email, username, password];

//   // }

//   // for submission

//   const onFormSubmit=(userData)=>{      
//     console.log(userData.username)
//     console.log(userData.email)
//     console.log(userData.password)
//     const credentials = [userData.email, userData.username, userData.password];
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 h-full con" >
        
//         <div className="flex content-center items-center justify-center h-full cardi card ">
//           <div className="w-full lg:w-4/12 px-4 ">
//             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
//               <div className="rounded-t mb-0 px-6 py-6 bg-primary">
//                 <div className="mx-auto "style={{width: "200"}}>
//                   <h3 className="text-blueGray-500  text-sm font-bold">
//                     Login
//                   </h3>
//                 </div>
               
//                 <hr className="mt-6 border-b-1 border-blueGray-300" />
//               </div>
//               <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//                 <div className="text-blueGray-400 text-center mb-3 font-bold">
//                 </div>
//                 <form>
//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     </label>
//                     <input
//                       type="email"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Email"
//                     />
//                   </div>

//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     </label>
//                     <input
//                       type="password"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         id="customCheckLogin"
//                         type="checkbox"
//                         className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
//                       />
//                       <span className="ml-2 text-sm font-semibold text-blueGray-600">
//                         Remember me
//                       </span>
//                     </label>
//                   </div>

//                   <div className="text-center mt-6">
//                    <button
//                       className="m-3 btn btn-primary"
//                       type="submit"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="flex flex-wrap mt-6 relative">
//               <div className="w-1/2">
//                 <a
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   className="text-blueGray-200"
//                 >
//                   <small>Forgot password?</small>
//                 </a>
//               </div>
//               <div className="w-1/2 text-right">
//                 <Link to="/signup" className="text-blueGray-200">
//                  <small>Create new account</small>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;