import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import getRequest from "../../api-handler";
import "./index.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: "white" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Profile() {
  const [user, setUser] = useState({});
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const [value, setValue] = React.useState("Running Task");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getdata = async () => {
    // const response = await getRequest(`/profile/${id}?category:${value}`);
    // if (Object.keys(response)) {
    //   setUser(response);
    // }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="profile">
      <Box>
        <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ color: "white" }}
              label="Running Task"
              value={"Running Task"}
            />
            <Tab
              sx={{ color: "white" }}
              label="Complete Task"
              value={"Complete Task"}
            />
            <Tab sx={{ color: "white" }} label="All Task" value={"All Task"} />
          </Tabs>
        </Box>
        <CustomTabPanel>
          <div className="tasklist_task_view w-100 h-50">
            <h1>.....task's </h1>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default Profile;
