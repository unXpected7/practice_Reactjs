import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

export default class Jumbotron extends React.Component {
    render() {
        return (

            <div>   

               <div className="p-5 mb-4 bg-light rounded-3 jumbotron" >
               <div className="container-fluid py-5 text-center">
            <p className="fs-5 fst-italic mt-5">CTO & Founder Xpress</p>
            <h1 className="display-4">Faiz Khair Rasyid</h1>
            <button className="btn btn-warning border border-dark bt-sm mt-5 shadow-sm text-white px-3 py-2">
                Github Profile</button>
        </div>
        </div>
         

        </div>
        )
    }
}