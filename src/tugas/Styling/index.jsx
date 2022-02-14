import React from "react";
import Jumbotron from "./jumbotron/jumbotron";
import Navbars from "./navbar/navbar";
import Portofolio from "./Portofolio/portofolio";


export default class Styling extends React.Component {
    render() {
        return (
        <div>
            <Navbars/>
            <Jumbotron/>
            <Portofolio/>
        </div>
        )
    }
}