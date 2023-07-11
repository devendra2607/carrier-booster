import React from "react";
import "./index.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_head">
      <div className="banner">
        <Typography variant="h2">Carrier Growth</Typography>
      </div>

      <div className="container ">
        <div className="home_display">
          <div className="boxes ">
          <Link to={"/auth?name=login"} className="link"> <h1>Login</h1></Link> 
          </div>
          <div className="boxes">
           <Link to={"/auth?name=singup"} className="link"> <h1>Singup</h1></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
