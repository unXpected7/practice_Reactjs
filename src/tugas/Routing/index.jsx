import * as React from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import ValiationForm from "../Form/validation";
import DataFetching from "../hooks/Hooks";
// import Komponen from "../Komponen";
import LifecycleComponent from "../LifeCycleComponent/LifeCycle";
import Redux from "../Redux";

import Styling from "../Styling";
import Home from "./home";
import Navigation from "./navigation";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
              <Navigation/>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/lifecycle' element={<LifecycleComponent/>} />
                  {/* <Route path='/komponen' element={<Komponen/>} /> */}
                  <Route path='/datafetching' element={<DataFetching/>} />
                  <Route path='/form' element={<ValiationForm/>} />
                  <Route path='/styling' element={<Styling/>} />
                  <Route path='/redux' element={<Redux/>}/>
                </Routes>
            </BrowserRouter>
            <Outlet />
            
        </div>
    )
}
export default Routing;

