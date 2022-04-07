import React from 'react'
import '../../App.css'
import { Student ,Teacher , Friend} from './Conta'
const Contd = () => {
  return (
    <Student.Consumer>
        {
            (fname) => {
                return <>
                <Teacher.Consumer>
                    {
                        (tname)=>{
                            return <>
                                <Friend.Consumer>
                                    {
                                        (ffname)=>{
                                            return <>
                                                < h1 className="mName">{ffname} is my Freind</h1>
                                            </>
                                        }
                                    }
                                </Friend.Consumer>
                                < h1 className="mName">My Teaher Name Is {tname}</h1>
                            </>
                        }
                    }
                </Teacher.Consumer>
                    < h1 className="mName">My Name Is {fname}</h1>
                </>
            }
        }
    </Student.Consumer >
  )
}

export default Contd