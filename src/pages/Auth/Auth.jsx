import React, { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LayOut from '../../components/LayOut/LayOut'
import classes from "./SignUp.module.css";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../utility/firebase"
import { DataContext } from '../../components/DataProvider/DataProvider';
import { Type } from '../../utility/action.type';
import { ClipLoader } from 'react-spinners';

function Auth() {

  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState({
    signIn:false,
    signUp:false
  })

  console.log(email,password)
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user)
  const navigate = useNavigate()
  const authHandler = async(e)=>{
    e.preventDefault()
    
    if(e.target.name == "signin"){
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth,email,password).then((userinfo)=>{
        console.log(userinfo)
        dispatch({
          type:Type.SET_USER,
          user:userinfo.user
        })
        setLoading({ ...loading, signIn: false });
        navigate("/")
      }).catch((error)=>{
        setError(error.message)
        setLoading({ ...loading, signIn: false });
        console.log(error)
      })
    }else{
      setLoading({ ...loading, signIn: true });
      createUserWithEmailAndPassword(auth,email,password)
      .then((userinfo)=>{
        console.log(userinfo)
        dispatch({
          type:Type.SET_USER,
          user:userinfo.user
        })
        setLoading({ ...loading, signIn: false });
        navigate("/")
      }).catch((error)=>{
        setError(error.message)
        setLoading({ ...loading, signIn: false });
        console.log(error)
      })
    }
  }
  
  return (
    <>
      <section className={classes.login}>
        <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      
      {/* forem */}
      <div className={classes.login__container}>
      <h1>Sign In</h1>
      <form action="">
        
        <div >
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
        </div> 

        <div>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
        </div>
        <button name='signin' type='submit' onClick={authHandler} className={classes.login__signInButton}>{loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}</button>
      </form>

       <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

         <button type="submit" onClick={authHandler} name="signup" 
          className={classes.login__registerButton}
        >
           {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {
          error && <small style={{"paddingTop":"5px", "color":"red"}}>
            {error}
          </small>
        }
      </div>
      </section>
    </>
  )
}

export default Auth