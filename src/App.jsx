import { useContext, useEffect, useState } from 'react'

import './App.css'
import CarouselEffect from './components/Carousel/CarouselEffect'
import Category from './components/Category/Category'
import { DataContext } from './components/DataProvider/DataProvider'

import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Landing from './pages/Landing/Landing'
import Routing from './Router'
import { Type } from './utility/action.type'
import { auth } from './utility/firebase'

function App() {
  const [{user},dispatch] = useContext(DataContext)
  useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
if (authUser) {
    console.log(authUser);
   dispatch({
     type: Type.SET_USER,
    user: authUser,
 });
   } else {
  dispatch({ type: Type.SET_USER, user: null });
      }
   });
  }, []);
  

  return (
    <>

      <Routing/>
    </>
  )
}

export default App
