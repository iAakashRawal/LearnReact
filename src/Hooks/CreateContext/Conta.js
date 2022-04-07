import React, { createContext } from 'react'
import Contb from './Contb'
const Student = createContext()
const Teacher = createContext()
const Friend = createContext()
 const ContA = () => {
  return (
      <>
        <Student.Provider value={"Aakash Rawal"}>
            <Teacher.Provider value={"Anil DOllor"}>
                <Friend.Provider value={"ROhit"}>
                    <Contb />
                </Friend.Provider>
            </Teacher.Provider>            
        </Student.Provider>
      </>
   
  )
}
export default ContA;
export {Student , Teacher , Friend}