import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import getRequest from "../../api-handler";
import "./index.css";
import { Typography } from "@mui/material";

function Profile() {
  const [user, setUser] = useState({});
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");

  const getdata = async () => {
    // const response = await getRequest(`/profile/${id}`);
    // if (Object.keys(response)) {
    //   setUser(response);
    // }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="profile">
      <div className="profile_display">
        <div className="border text-light pt-2">
          <h3 className="border-bottom p-1">RUNNING TASK</h3>
        </div>
        <div className="border text-light pt-2">
          <h3 className="border-bottom p-1">PENDING TASK</h3>
        </div>
        <div className="border text-light pt-2">
          <h3 className="border-bottom p-1">ALL TASK</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
