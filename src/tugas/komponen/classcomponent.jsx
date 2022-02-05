import React from "react";
// import {PropTypes} from "prop-types"

class Classcomponent extends React.Component {
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

// classcomponent.propTypes = {
//     nama: PropTypes.string.isRequired
// }
// //conoh penggunaan proptypes pada class
//jika penambahan pramatere string maka props harus nerisi string

export default Classcomponent;