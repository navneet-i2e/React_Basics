// // // // // //useState:- useState is a Hook that allows you to have state variables in functional components. You pass the initial
// // // // // // import { useState } from "react";
// // // // // // const App = () => {
// // // // // //   const [color, setColor] = useState("Red");
// // // // // //   const changeColor = () => {
// // // // // //     setColor("Navy Blue");
// // // // // //   };
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>Hello My favorite color is {color}!</h1>
// // // // // //       <button onClick={changeColor}>Change Color</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default App;

// // // // // //another example

// // // // // import { useState } from "react";
// // // // // const App = () => {
// // // // //   // const [title, setTitle] = useState("ICC World Cup");
// // // // //   // const [year, setYear] = useState(2023);
// // // // //   // const [player, setPlayer] = useState("Virat Kohli");
// // // // //   //instead of using multiple state variables, we can use an object
// // // // //   const changeYear = () => {
// // // // //     setData((prev) => {
// // // // //       return { ...prev, year: 2015 };
// // // // //     });
// // // // //   };
// // // // //   const changePlayer = () => {
// // // // //     setData((prev) => {
// // // // //       return { ...prev, player: "Mitchell Stark" };
// // // // //     });
// // // // //   };

// // // // //   const [data, setData] = useState({
// // // // //     title: "ICC World Cup",
// // // // //     year: 2023,
// // // // //     player: "Virat Kohli",
// // // // //   });
// // // // //   return (
// // // // //     <div>
// // // // //       <h1>
// // // // //         Hello this {data.title} and year is {data.year}
// // // // //       </h1>
// // // // //       <h2>player of the year is {data.player}</h2>
// // // // //       <button onClick={changeYear}>Change Year</button>
// // // // //       <button onClick={changePlayer}>Change Player</button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // import { useState } from "react";

// // // // const App = () => {
// // // //   const [counter, setCount] = useState(0);
// // // //   const increaseCounter = () => {
// // // //     setCount((counter) => counter + 5);
// // // //   };
// // // //   return (
// // // //     <div>
// // // //       <h1>Count : {counter}</h1>
// // // //       <button onClick={increaseCounter}>Increase by 5</button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;

// // // // // //useEffect:- useEffect is a hook that allows you to perform side effects in your functional components. It is a close

// // // import { useEffect, useState } from "react";

// // // const App = () => {
// // //   // useEffect(callback); //two things we require here 1. callback function 2. dependency array(optional)

// // //   const [count, setCount] = useState(0);

// // //   useEffect(() => {
// // //     setTimeout(() => {
// // //       setCount((count) => count + 1);
// // //     }, 2000);
// // //   });

// // //   return (
// // //     <div>
// // //       <h1>I have render {count} times!</h1>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // //with dependency array: useEffect will only run when the dependency array changes.
// // // import { useState, useEffect } from "react";

// // // const App = () => {
// // //   const [count, setCount] = useState(0);
// // //   useEffect(() => {
// // //     setTimeout(() => {
// // //       setCount((count) => count + 1);
// // //     }, 2000);
// // //   }, [count]);
// // //   return (
// // //     <div>
// // //       <h1>i have rendered {count} times!</h1>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // //useRef:- useRef is a hook that allows you to create mutable object that can be used to store a reference to a DOM element.

// // import { useState, useRef, useEffect } from "react";

// // const App = () => {
// //   // const [count, setCount] = useState(0);
// //   const [value, setValue] = useState(0);
// //   const count = useRef(0);

// //   useEffect(() => {
// //     count.current = count.current + 1;
// //   });

// //   const increase = () => {
// //     setValue((value) => value + 1);
// //   };
// //   const decrease = () => {
// //     setValue((value) => value - 1);
// //   };
// //   // useEffect(() => {
// //   //   setCount((count) => count + 1); //this will run every time the component renders infinite times
// //   // });
// //   return (
// //     <div>
// //       <button onClick={increase}>Increase</button>
// //       <h1>{value}</h1>
// //       <button onClick={decrease}>decrease</button>
// //       <h1>Rendered Times :{count.current} </h1>
// //     </div>
// //   );
// // };

// // export default App;

// //accessing DOM elements using useRef

// import { useRef } from "react";

// const App = () => {
//   const inputEle = useRef();
//   const btnClicked = () => {
//     console.log(inputEle.current);
//     inputEle.current.style.background = "Blue";
//   };

//   return (
//     <div>
//       <input type="text" ref={inputEle} />
//       <button onClick={btnClicked}>Click here</button>
//     </div>
//   );
// };

// export default App;

//useMemo:- useMemo is a hook that allows you to memoize the result of a function. It will only recompute the result if one of the dependencies has changed.'

// import { useState, useMemo } from "react";
// import "./App.css";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [counter, setCounter] = useState(0);

//   function cubeNum(n) {
//     console.log("Calculation Done...");
//     return Math.pow(n, 3);
//   }
//   const result = useMemo(() => {
//     return cubeNum(number);
//   }, [number]);

//   const increaseCounter = () => {
//     setCounter((prevCounter) => prevCounter + 1);
//   };
//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         name=""
//         id=""
//         onChange={(e) => {
//           setNumber(e.target.value);
//         }}
//       />
//       <h1>Cube of number is : {result}</h1>
//       <button onClick={increaseCounter}>Counter++</button>
//       <h1>Counter : {counter}</h1>
//     </div>
//   );
// };

// export default App;

//useCallback  - caching of function

// import { useCallback, useState } from "react";
// import "./App.css";
// import Header from "./Components/Header";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const newFn = useCallback(() => {}, []);
//   return (
//     <>
//       <Header newFn={newFn} />
//       <h1>Count : {count}</h1>
//       <button
//         onClick={() => {
//           setCount((count) => count + 1);
//         }}
//       >
//         Click
//       </button>
//     </>
//   );
// };

// export default App;

//useContext :- A react Hook that allows you access data
//from any component without explicitly passing it down through
//props at any level.
//manage global data in react app

//steps:-1.Creating the Context,2.Providing the Context,3.Consuming the Context

import "./App.css";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <div>
      <Profile />
      
      <Footer />
    </div>
  );
};

export default App;
