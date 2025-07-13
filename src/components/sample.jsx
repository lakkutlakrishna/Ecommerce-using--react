import {React,useState} from "react";
const Comp=()=>{
    const [count,setcount]=useState(0);
    const doub=()=>{
        setcount(count+1);
    }
    const doubl=()=>{
        setcount(count-1);
    }
    return(
        <div>
            <div>
                <button>count: {count}</button>
                <button><div onClick={doub}>to incease</div></button>
                <button><div onClick={doubl}>to decasee</div></button>
            </div>
            
        </div>
    )
};
export default Comp;