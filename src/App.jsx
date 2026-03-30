
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Count from './Components/Count'
import Navber from './Components/Navber'


const getData = async () => {
  const res  = await fetch("/data.json")
  return res.json()
}

function App() {
  const dataPromise = getData()
  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <Count></Count>
    <Suspense fallback={<div className='text-center text-3xl font-bold'>Loading...</div>}>
     <Cart dataPromise={dataPromise}></Cart>
    </Suspense>
   
    </>
  )
}

export default App
