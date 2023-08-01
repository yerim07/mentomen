// import { useEffect, useState } from "react";

// export default function And() {
// //   const [cnt, setCount] = useState(0);
// //   const [text, setText] = useState("");
// //   const Bye = (ye) => {
// //     window.alert(ye)
// //   }
// //   useEffect(() => {
// //     Bye('Hi')
// //   },[cnt]);
// const [push] = useState("가짜");

//   return (
//     <div>
//         {push}
//         {/* {cnt}
//         <button onClick={() => setCount(cnt+1)}>+1</button>
//         <button onClick={() => setCount(cnt-1)}>-1</button> 
//         <button onClick={() => Bye("bye!")}>bye</button> */}
//         <button onClick={'가짜' ? '진짜' : '가짜'}>Push</button>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';

const App = () => {
  const [True, setTrue] = useState(false);

  const click = () => {
    setTrue(!True);
  };

  const text = True ? '진짜' : '가짜';

  return (
    <div>
      <p>{text}</p>
      <button onClick={click}>Push</button>
    </div>
  );
};

export default App;
