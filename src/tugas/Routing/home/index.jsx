import {  Outlet } from "react-router-dom";
import { Image } from "react-bootstrap";


const Home = () =>{
    return (
        <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        <Image src="https://camo.githubusercontent.com/79519e7a1fbbca74a64cced28d94067bfea754648f5a41487397b47d888b4cf8/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d687474702533412532462532466d656469612e67697068792e636f6d2532466d656469612532464354583069765351624937384125324667697068792e67696626663d31266e6f66623d31" fluid />

      <hr />
      <Outlet />
    </div>
    )
}
export default Home