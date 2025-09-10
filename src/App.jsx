import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { useGlobal } from './context/Global'
import Article from './Component/Article'
import Signin from './Component/Signin'
import Signup from './Component/Signup'
import Showprofile from './Component/Showprofile'
import Setprofile from './Component/SetProfile'
import UserSpace from './Component/UserSpacedr'
import TreatmentDetail from './Component/TreatmentDetails'
import HistoryofPaitent from './Component/HistoryofPaitent'
import Newpaitentformdr from './Component/Newpaitentformdr'

function App() {

 const useglobal =useGlobal();
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      {!useglobal.check1 && !useglobal.check2 && !useglobal.check3 && !useglobal.check4 && !useglobal.check5 && !useglobal.check6 && !useglobal.check7 && !useglobal.check8 && !useglobal.check9?<Home/>:null}
      {useglobal.check7?<Article/>:null}
      {useglobal.check8?<HistoryofPaitent/>:null}
      {useglobal.check9?<TreatmentDetail/>:null}
      {useglobal.check5?<UserSpace />:null}
      {useglobal.check6?<Newpaitentformdr />:null}
      {useglobal.check1?<Showprofile name={useglobal.mainname} usrtype={useglobal.mainusrtype} />:null}
      {useglobal.check3?<Signup/>:null}
      {useglobal.check4?<Signin/>:null}
      {useglobal.check2?<Setprofile name={useglobal.mainname} usrtype={useglobal.mainusrtype}/>:null}

    </div>
  )
}

export default App
