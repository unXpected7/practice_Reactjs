import React from "react";
import Classcomponent from "./classcomponent";
import Functionalcomponent from "./functionalcomponent";


export default class Komponen extends React.Component {

    render() {
        return(
            <div>
                <Classcomponent  money="twenty bucks"/>
                <Functionalcomponent age="Inevitable"/>
            </div>            
        )
    }
}