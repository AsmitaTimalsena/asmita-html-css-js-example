import { useState } from "react";

// function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//     );
// }
// export default Counter;

// function Toggle() {
//     const [show, setShow] = useState(true);
//     return(
//         <div>
//             <button onClick={() => setShow(!show)}>Toggle</button>
//             {show && <p>This is a toggle component.</p>}
//         </div>
//     )
// }
// export default Toggle;

// function inputConsole() {
//     return(
//         <input onChange={(e) => console.log(e.target.value)}
//         />

//     );
// }
// export default inputConsole;


function Calculator() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    return(
        <div>
            <input type="number" onChange={(e) => setA(Number(e.target.value))} />
            <input type="number" onChange={(e) => setB(Number(e.target.value))} />
            <p>Result: {a + b}</p>
        </div>
    );
}
export default Calculator;