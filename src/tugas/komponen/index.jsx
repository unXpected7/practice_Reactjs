import React from "react";
import Classcomponent from "./classcomponent";
import Functionalcomponent from "./functionalcomponent";
import "bootstrap/dist/css/bootstrap.min.css";


export default class Komponen extends React.Component {

    render() {
        return(
            <div className="text-center" >
                <Classcomponent  money="twenty bucks"/>
                <Functionalcomponent age="Inevitable"/>
            </div>            
        )
    }
}