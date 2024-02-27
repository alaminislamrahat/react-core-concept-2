import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const increaseCount = ()=>{
       const newCount = count + 1;
        setCount(newCount);
    }
    const resuce = ()=>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return(
        <>
            <h3>counter : {count}</h3>
            <button style={{border :'1px solid purple'}} onClick={increaseCount}>count add</button>
            <button style={{border : '1px solid teal', marginLeft : '5px'}} onClick={resuce}>reduce</button>
        </>
    )
}