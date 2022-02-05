import React from "react";
import {PropTypes} from "prop-types"

class ClassComponent extends React.Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         value : 0
    //     }
        state = {
            value : 0
        }

        // this.handlePlus = this.handlePlus.bind(this);
        // this.handleMin = this.handleMin.bind(this);

    // }
    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }
    handleMin = () => {
        if(this.state.value > 0){
        this.setState({value: this.state.value - 1})
        }
    }


    render() {
        return(
            <div>
                <h1>This component made with class component</h1> 
                <h2>hello my world{this.props.nama}</h2>
                <button onClick={this.handleMin}>-</button>
                <span>{"  "} {this.state.value} {"  "}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
            
        )
    }
}

ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}
//conoh penggunaan proptypes pada class
//jika penambahan pramatere string maka props harus nerisi string

export default ClassComponent;

// note : sebenarnya tak perlu constructor dan binding
// cara agar tdk perlu binding yaitu dengan menggunakan arrow function
// arrow function tdk punya konsep this jadi tidak perlu di ikat
// this artinya keluar , ke lingkup terglobal

// mengapa diperlukan bind(ikat) agar mengikuti metod dari class tsb

//perbedaan state dgn props
// props : antar component
// state hanya di local metod class, tdk bisa di export/import 
// state hnaya bisa di class component , props bisa dikeduanya(class maupun functionalcomponent)
// bisa mengakali state untuk functional dgn cara (hook)


//pertanyaan
//perbedaan proptype, Proptypes, propTypes