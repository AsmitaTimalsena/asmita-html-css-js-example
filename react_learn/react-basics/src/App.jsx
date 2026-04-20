import Greeting from "./Greeting";
import { useEffect, useState, useRef } from "react";
import Counter  from "./Counter";
import Toggle  from "./Counter";
import inputConsole from "./Counter";
import Calculator from "./Counter";

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

function App() {
    return (
        <div>
            {/* <Counter /> */}
            {/* <Toggle /> */}
            {/* <inputConsole /> */}
            <Calculator />
        </div>
       
    );
}   
export default App;