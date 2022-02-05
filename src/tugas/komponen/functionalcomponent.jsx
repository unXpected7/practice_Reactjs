import { useState } from "react";

const Functionalcomponent = ({nama}) => {
    const [value, setValue] = useState(0);
    //penggunaan hooks
    //agar bisa menggunakan state di functional component
    //props disini berupa {nama}
    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMin = () =>{
        if(value > 0)
        setValue(value - 1);
    }

    return(
        <div>
            <h1>Membuat Component dengan functional componennt</h1>
            <h2>hello {nama} my world</h2>
            <button onClick={handleMin}>-</button>
            <span>{"  "}{value}{" "}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}
Functionalcomponent.defaultProps = {
    nama : "User"
}

// nilai default tidak terpakai ketika tdk menggunakan props
// jika menggunakan isRequired maka props wajib ada, jika tdk ada maka akan memunculkan error

export default Functionalcomponent;
//docker