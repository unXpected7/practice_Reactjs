import React from "react";
import Classcomponent from "./classcomponent";
import Functionalcomponent from "./functionalcomponent";

export default class Komponen extends React.Component {

    render() {
        return(
            <div>
                <Classcomponent  nama=" anonymous"/>
                <Functionalcomponent nama="Inevitable"/>
            </div>            
        )
    }
}