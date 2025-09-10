import { createContext, useContext } from 'react';
import { useState } from 'react';
const GlobalContext =createContext(null);
export const useGlobal =()=>useContext(GlobalContext);
export const GlobalProvider=(props)=>{
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////GLOBAL VARIABLE/////////////////////////////////////////////////////////////////

  const [mainname ,setmainname]=useState('hanuman123');
  const [mainusrtype,setmainusrtype]=useState('paitent')
  const [check1,setcheck1]=useState(false)
  const [check2,setcheck2]=useState(false)
  const [check3,setcheck3]=useState(false)
  const [check4,setcheck4]=useState(false)
  const [check5,setcheck5]=useState(false)
  const [check6,setcheck6]=useState(false) 
  const [check7,setcheck7]=useState(false)
  const [check8,setcheck8]=useState(false)
  const [check9,setcheck9]=useState(false)



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  return <GlobalContext.Provider value={{check9,setcheck9,check8,setcheck8,check7,setcheck7,check1,check2,check3,check4,check5,check6,setcheck1,setcheck2,setcheck3,setcheck4,setcheck5,mainname,mainusrtype,setmainname,setmainusrtype,setcheck6}}>{props.children}</GlobalContext.Provider>
}