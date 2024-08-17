// // import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// // class Reactstate extends React.Component{
// // constructor(){
// //     super();
    
// //     this.state={Mywebsite:"welcome to my page",Mycontent:"hellooo"}
// // }
// //     changevalue=()=>{
// //     this.setState({Mywebsite:"This is my website"})
// //     }
// //     render(){
// //     return<div><h1>{this.state.Mywebsite}</h1>
// //     <button type="button" onclick={this.changevalue}>change the value</button>
// //     </div>
// //     }
// // }
// //     ReactDOM.render(<Reactstate />,document.getElementById('root'));
    
// // class Reacteventhandling extends React.Component{
// //     constructor(){
// //     super();
// //     this.state ={content:"Welcome to my website",website:"helooo"}
// // }

// //    changedvalue=()=>{
// //     this.setState({content:"Say hello to my page"});
// //     }
// //     render(){
// //     return<div>
// //         <h1>{this.state.content}</h1>
// //     <button onClick={this.changedvalue}>Click here</button>
// //     </div>;
// //     }
// // }
   
// // ReactDOM.render(<Reacteventhandling /> , document.getElementById('root'));
// // function Userdemo(){
// //     const[user,setUser] =useState[2000];
// //     const[loading,setLoading]=useState[200];
// // }

// import ReactDOM from 'react-dom';
// import React, {useState,useEffect} from 'react'

// // step01
// function Examplerender(){
// const[count,setCount] = useState(0);

// // step02
// useEffect(()=>{
// setTimeout(()=>{
//  setCount(count => count+1)
// },200)
// });

// // step03
// return(
// <h1>website counting details {count} times</h1>
// )
// }
// ReactDOM.render(<Examplerender />,document.getElementById('root'));
import React, { useState, useEffect } from 'react';

export default function Datafunction() {
   const [data, setUser] = useState([]);
   const [loading, setloading] = useState(true);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((data) => {
            setUser(data);
            setloading(true);
         })
         .catch((error) => {
            console.log("Error fetching data:", error);
            setloading(false);
         });
   }, []);

   return (
      <div>
         {loading ?  (
            <ul>
               {data.map((user) => (
                  <div>
                  <h1 key={user.id}>{user.name}</h1>
                  <li key={user.id}>{user.phone}</li>
                  <li key={user.id}>{user.email}</li>
                  </div>
               ))}
            </ul>
         ):(
            <p contentEditable="true">Loading...</p>
         )}
      </div>
   );
}