import Greeting from "./Greeting";
import { useEffect, useState, useRef } from "react";
import Counter  from "./Counter";
import Toggle  from "./Counter";
import inputConsole from "./Counter";
import Calculator from "./Counter";
import Clock from "./Clock";

function Navigate() {
   const open = (name,url) =>{
    alert(`Welcome to ${name}`);
    window.location.href = url;
   };
   return(
    <div>
        <button onClick= {() => open("Google", "https://www.google.com")}>Google</button>
        <button onClick = {() => window.open("https://www.google.com", "_blank")}>Google</button>
        <button onClick= {() => open("Facebook", "https://www.facebook.com")}>Facebook</button>
        <button onClick= {() => open("Instagram", "https://www.instagram.com")}>Instagram</button>
    </div>
   );
}

function App() {
    return (
        <div>
            <Navigate />
            <Counter />
            <Clock />
            <DisableButton />
            <Form />
            <Timer />

        </div>
       
    );
}   
export default App;

function DisableButton() {
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            <button onClick={() => setDisabled(true)} disabled={disabled}>
                Click to Disable
            </button>
        </div>
    );
}


function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show,setShow] = useState("false");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input  type ="text" value ={name} 
            placeholder="enter name" 
            onChange={(e)=> setName(e.target.value)}  
            />
            <input 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type={show ? "text": "password"}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
             />
             <button onClick={() => setShow(!show)}>
                {show ? "Hide Password" : "Show Password"}
             </button>
            <button type="submit">Submit</button>
        </form>
    );
}

function Timer() {
  const [time, setTime] = useState(10);

  const startTimer = () => {
    let counter = 10;

    const interval = setInterval(() => {
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        setTime("Time's up!");
      } else {
        setTime(counter);
      }
    }, 1000);
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <h2>{time}</h2>
    </div>
  );
}





























// function App() {
//     const name = "React Basics";
//     return <h1> {name}</h1>;
// }
// export default App;


// function App() {
//     return (
//         <Greeting name="Asmi" />
        
//     );
// }
// export default App;

//Counter App
// function App() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// }
// export default App;


//take input
// function App() {
//     const[text,setText] = useState("");
//     return(
//         <div>
            
//             <input onChange={(e) => setText(e.target.value)}/>
//             <p>you have types {text}</p>
//         </div>
//     );
// }
// export default App; 

//conditional rendering
// function App() {
//     const isLoggedIn = true;
//     return(
//         <div>
//             { isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}

//         </div>
//     );
// }
// export default App;

//list rendering
// function App() {
//     const items = ["react", "angular", "vue"];
//     return (
//         <div>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;

//useEffect example
// function App() {
//     useEffect(() => {
//         console.log("Component loaded");
//     }, []);

//     return (
//         <div>
//             <h1>Check the console for useEffect message</h1>
//         </div>
//     );
// }
// export default App;


//useRef example
// function App() {
//     const inputRef = useRef();
//     const focusInput = () => {
//         inputRef.current.focus();
//     };

//     return (
//         <div>
//             <input ref={inputRef} type="text" />
//             <button onClick={focusInput}>Focus Input</button>
//         </div>
//     );
// }
// export default App;

// function App() {
//     return (
//         <div>
//             {/* <Counter /> */}
//             {/* <Toggle /> */}
//             {/* <inputConsole /> */}
//             <Calculator />
//         </div>
       
//     );
// }   
// export default App;