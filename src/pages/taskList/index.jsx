import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Fade } from "react-awesome-reveal";
import "./index.css";

const data = [
  {
    task_name: "java",
    description: "task related to  opps concept,it may be anything",
    entry_fees: 300,
    winning_price: 30000,
  },
  {
    task_name: "data",
    description: "task related to  opps concept,it may be anything",
    entry_fees: 400,
    winning_price: 40000,
  },
  {
    task_name: "data",
    description: "task related to  opps concept,it may be anything",
    entry_fees: 400,
    winning_price: 40000,
  },
  {
    task_name: "data",
    description: "task related to  opps concept,it may be anything",
    entry_fees: 400,
    winning_price: 40000,
  },
  {
    task_name: "data",
    description: "task related to  opps concept,it may be anything",
    entry_fees: 400,
    winning_price: 40000,
  },
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
    <div className="tasklist_head  ">
      <Stack direction="row" className="p-2 user_profile ">
        <Link to={"/profile"} className="text-decoration-none">
          <Avatar
            sx={{ width: "3rem", height: "3rem" }}
            alt="PROFILE"
            className="border-3  border border-light"
            src="/static/images/avatar/1.jpg"
          />
        </Link>
      </Stack>
      <div className=" tasklist_display p-2 shadow-lg">
        <Typography variant="h3">Task List</Typography>
        <div className="d-flex flex-column justify-content-center  w-100 align-items-center  row-gap-4 mt-5">
          {data.map((val, index) => {
            return (
              <Fade
                key={index}
                className="d-flex flex-column  align-items-center w-100"
              >
                <div className="tasklist_task_view">
                  <div className="tasklist_task_view_img ">
                    <img
                      src="https://www.30secondsofcode.org/assets/preview/interior-4.webp"
                      alt="P"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                    />
                  </div>

                  <div className="p-3 tasklist_task_view_des text-start">
                    <Link to={`/payment?id=${index}`}>
                      <h1>{val.task_name}</h1>
                    </Link>
                    <p className="text-uppercase">{val.description}</p>
                    <span>ENTRY FEES :- ₹{val.entry_fees}</span>
                    <p className="mx text-success font-weight-bold">
                      WINNING PRICE :- ₹{val.winning_price}
                    </p>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
