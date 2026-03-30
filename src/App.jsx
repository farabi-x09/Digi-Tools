
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Count from './Components/Count'
import Navber from './Components/Navber'
import ShowCart from './Components/ShowCart'
import CartItems from './Components/CartItems'


const getData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

function App() {
  const dataPromise = getData()
  const [activeTab, setActiveTab] = useState("model");
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);
  // console.log(activeTab);
  return (
    <>
      <Navber cartItems={cartItems}></Navber>
      <Banner></Banner>
      <Count></Count>


      <Cart dataPromise={dataPromise} cartItems={cartItems} setActiveTab={setActiveTab}></Cart>


      <Suspense fallback={<div className=' mt-20 text-center text-3xl font-bold'>Loading...</div>}>
        {activeTab === 'model' && <CartItems cartItems={cartItems} setCartItems={setCartItems} dataPromise={dataPromise}></CartItems>}
      </Suspense>


      {activeTab === 'cart' && <ShowCart cartItems={cartItems} setCartItems={setCartItems}></ShowCart>}

    </>
  )
}

export default App
