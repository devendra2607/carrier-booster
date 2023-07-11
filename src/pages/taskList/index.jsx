import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./index.css";

const data = [
  { task_name: "java", entry_fees: 300, winning_price: 30000 },
  { task_name: "data", entry_fees: 400, winning_price: 40000 },
];

function TaskList() {
  const [task, setTask] = useState([]);

  const getData = async () => {
    //   const response =await getRequest("/tasklist");
    //   if(response.length){
    //     setTask(response)
    //    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="tasklist_head border">
      <Stack direction="row" spacing={2} className="p-2 profile">
        <Link to={"/profile"} className="text-decoration-none">
          <Avatar alt="PROFILE" src="/static/images/avatar/1.jpg" />
        </Link>
      </Stack>
      <div className="border tasklist_display p-1 ">
        <Typography variant="h3">Task List</Typography>
        <div className="d-flex  flex-column  align-items-center row-gap-4 mt-5">
          {data.map((val) => {
            return (
              <div className="tasklist_display text-start  shadow-lg p-2 ">
                <h2>{val.task_name}</h2>
                <div className="d-flex gap-3">
                  <h6 className="text-uppercase">
                    ENTRY FEES :-₹{val.entry_fees}
                  </h6>
                  <h6 className="text-uppercase">
                    WINNING PRICE :-₹{val.winning_price}
                  </h6>
                  <Link to={`/payment?id=${val._id}`}>
                    <button className="btn btn-success">Join</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
