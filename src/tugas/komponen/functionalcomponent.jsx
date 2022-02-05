import { useState } from "react";

const Functionalcomponent = ({age}) => {
    const [value, setValue] = useState(0);
    //use hooks
    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMin = () =>{
        if(value > 0)
        setValue(value - 1);
    }
    const ages = () => {
        alert("Sorry dude,your time has come")
    }

    return(
        <div>
              
            <h3>are you really want set your age {age} ?</h3>
            <h4>set age what you really want</h4>
            <button onClick={handleMin}>-</button>
            <span>{"  "}{value}{" "}</span>
            <button onClick={handlePlus}>+</button>
            <span>years</span>
            <br />
            <button onClick={ages}>Okay</button> 
        </div>
    )
}
// Functionalcomponent.defaultProps = {
//     nama : "User"
// }
export default Functionalcomponent;



