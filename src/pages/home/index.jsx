import React from "react";
import "./index.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Slide } from "react-awesome-reveal";

function Home() {
  return (
    <div className="home_head">
      <div className="banner">
        <div className="verticle-center">
          <Typography variant="h2">Carrier Growth</Typography>
          <div className="container ">
            <div className="home_display">
              <Slide direction="left">
                <Link to={"/auth?name=login"} className="card1 boxes">
                  <div className="verticle-center">
                    <LoginIcon />
                    <h3>Login</h3>
                  </div>
                  <div class="go-corner" href="#">
                    <div class="go-arrow">→</div>
                  </div>
                </Link>
              </Slide>

              <Slide direction="right">
                <Link to={"/auth?name=singup"} className="card1 boxes">
                  <div className="verticle-center">
                    <AppRegistrationIcon />
                    <h3>Register</h3>
                  </div>
                  <div class="go-corner" href="#">
                    <div class="go-arrow">→</div>
                  </div>
                </Link>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
