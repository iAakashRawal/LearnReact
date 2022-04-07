import React , {useState} from "react";
import "../App.css"
/* <<-------------------------------------------------------------------------------->> */

//Onchange Event
const Mapp = () => {
  const [d1, d2] = useState("");
  const och = (e) => {
    let a = d2(e.target.value);
  };
  return (
    <> 
      <h1>Write something Here</h1>
      <input
        className="myinput"
        placeholder="UserName"
        onChange={och}
        value={d1}
      ></input>
      <p className="myName">{d1}</p>
    </>
  )
};



/* <<-------------------------------------------------------------------------------->> */
/* 
//with Define Function
const App =() =>{
  const [nname,vname] = useState("rohit");
  
  const restn = () =>{
    vname("Akash");
  }
  console.log(nname);
  return <>
    <p>{nname}</p>
    
    <button className="myBtn" onClick={restn}>submit</button>
  </>
} */

/* <<-------------------------------------------------------------------------------->> */

/* 
//With calling Function.

const App =() =>{
  const [nname,vname] = useState("rohit");
  console.log(nname);
  return <>
      <p>{nname}</p>
      
      <button className="myBtn" onClick={() => vname("Akash")}>submit</button>
  </>
} */

/* <<-------------------------------------------------------------------------------->> */

/* 
//useState With Object
const App =() =>{
  const [nname,vname] = useState({
    "name" : "Akash",
    "city" : "Neemuch",
    "add" : "Kanka",
  });
  
  const restn = () =>{
    vname({
      "name" : "Rohit",
      "city" : "Neemuch",
      "add" : "Sarwniya",
    });
  }
  console.log(nname);
  return <>
    <p>{nname.name}</p>
    <p>{nname.city}</p>
    <p>{nname.add}</p>
    <button className="myBtn" onClick={restn}>submit</button>
  </>
} */

/* <<------------------------------/----\--------------------------------------------->> */
/* <<-----------------------------/-/--\-\------------------------------------------->> */
/* <<-----------------------------------\-\------------------------------------------->> */
/* <<------------------------------------\-\------------------------------------------->> */
/* <<-------------------------------------\-\------------------------------------------>> */

// class App extends React.Component{
//   constructor(dtl){
//     super(dtl);
//     this.state =
// [
//   {
//     name : "akash",
//     sem : "3rd Sem",
//     from : "kanka",
//     city : "Nmh"
//   },
//   {
//     name : "rohit",
//     sem : "4th Sem",
//     from : "sm",
//     city : "Nmh"
//   },
//   {
//     name : "yogesh",
//     sem : "1st Sem",
//     from : "B9ta",
//     city : "Nmh"
//   },
// ];

// console.log(this.state);
// console.log(this.state[0]);
//     {
//       name : "Akash",
//       sem : "3rd Sem",
//       from : "kanka",
//       city : "",
//     }
//   }
//   render(){

//     const  cities=  "Neemuch";
//     return <>
//       <div>
//         <p className="myName">Student name {this.state.name} ,And My city {this.state.city}</p>
//         <button className="myBtn" onClick={() => this.setState({city:cities}) } /* value={this.state[1].name} */>submit</button>
//       </div>
//     </>
//   }
// }

/* 
//Auto increment
const App = () =>{
  const [digit,newDigit] = useState(0)
  const setvalue =() =>{
    newDigit(digit + 2)
  }
  return <>
  <div>
    <p className="myName">Count = {digit}</p>
    <button className="myBtn" onClick={setvalue}>Add</button>
  </div>
   
  </>
}
 */

/* 
//var mName = "AaKash"
const App = () => {
  const [mName,newName] = useState("My Company");

  const changeName= () =>{
    newName('Dollor Infotech Pvt Ltd');
  }
  return <>
      <button className="myBtn" onClick={changeName}>Company Name</button>
      <p className="myName">{mName}</p>
  </>
} */

/* 
//My detail
const App = () => {
  const [myNames,changeData] = useState({
    "mname" : "Akash",
    "from" : "Kanka",
    "class" : "Mca 3r Sem",
    "Working" : "Dollor INfotech PVT. LTD."
  });
  const cd =()=>{
    var ddtt = changeData({
                  "mname" : "rOHIT",
                  "from" : "sm",
                  "class" : "Mca 3r Sem",
                  "Working" : "Dollor INfotech "
                })
   for(const prop in ddtt){
     console.log(prop)
   }
  }
  return <>
   <p className="myName"> My Name Is {myNames.mname},<br/>
    I am From : {myNames.from},<br/>
    I am Studing on : {myNames.class},<br/>
    Currently I am working on : {myNames.Working}</p>
  <button className="myBtn" onClick={cd}>Next data</button>
  
  </>
}
 */

/* 
var name = "Akash";
const App = () => {

  const [u_name,uname] = useState("User");
  // const userName =() => {
  //   uname('Akash');
  //   alert();
  // }
return <>
    <input className="myName" placeholder="Usename" />
    <p className="myName">{name}</p>
    <p className="myName">Your userName is {u_name}</p>
    
    <button className="myBtn" onClick={() => uname("somu") }>submit</button>
  </>
} */

export default Mapp;
