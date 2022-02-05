import React from "react";

class Classcomponent extends React.Component {
 
        state = {
            value : 0
        }

    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }
    handleMin = () => {
        if(this.state.value > 0){
        this.setState({value: this.state.value - 1})
        }
    }
    loan = () => {
        alert("Sorry dude,your you are broke, we cannot give you loan")
    }

    render() {
        return(
            <div>
                <h1>how much money what you want?</h1> 
                <h2>are you sure want {this.props.money} </h2>
                <button onClick={this.handleMin}>-</button>
                <span>{"  "} {this.state.value} {"  "}</span>
                <button onClick={this.handlePlus}>+</button>
                <span>Dollars</span>
                <br/>
                <button onClick={this.loan}>I'm sure,cz i've 2 kidneys</button>
            </div>
            
        )
    }
}


export default Classcomponent;