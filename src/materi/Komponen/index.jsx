import React from "react";
import ClassComponent from "../Komponen/pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {

    render() {
        return(
            <div>
                <ClassComponent  nama=" anonymous"/>
                <FunctionalComponent nama="Inevitable"/>
            </div>            
        )
    }
}