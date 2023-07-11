import "./index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import getRequest from "../../api-handler";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

// import TaskDisplay from "../../component/task-display";

const schema = yup.object().shape({
  task_zip: yup
    .mixed()
    .required("Please select an image file")
    .test(
      "fileType",
      "Invalid file format. Only images are allowed",
      (value) => {
        return (
          value && value[0] && /^image\/(jpeg|jpg|png)$/.test(value[0].type)
        );
      }
    )
    .test("fileSize", "File size is too large", (value) => {
      return value && value[0] && value[0].size <= 1024 * 1024; // 1MB maximum file size
    }),
  screen_shots: yup
    .mixed()
    .required("Please select an image file")
    .test(
      "fileType",
      "Invalid file format. Only images are allowed",
      (value) => {
        return (
          value && value[0] && /^image\/(jpeg|jpg|png)$/.test(value[0].type)
        );
      }
    )
    .test("fileSize", "File size is too large", (value) => {
      return value && value[0] && value[0].size <= 1024 * 1024; // 1MB maximum file size
    }),
});

export default function Task() {
  const [task, setTask] = useState({});
  const [start, setStart] = useState(false);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [minutes, setMinutes] = useState(180);
  const [second, SetSecond] = useState(0);

  const submit = (value) => {};

  const getData = async () => {
    // const response =await getRequest(`/task/${id}`);
    // if(Object.keys(response)){
    //     setTask(response)
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="task_head">
      <div className=" border p-1 my-4">
        <h1>TASK:-</h1>
        {task.task_name}
      </div>
      <div className="w-100 border  p-3 ">
        <div className=" d-flex gap-5">
          <div className="timmer  mx-3">
            <p> MENUTS:- {minutes} </p>
            <p> SECOND:- {second} </p>
          </div>
          <div className="notice d-flex ">
            <h6 className="pt-1">Notice:-</h6>{" "}
            <p className="text-start">
              coplete your task within a time period and upload successfully
              ,otherwise your out of the race{" "}
            </p>
          </div>
        </div>
        <div className="d-flex mt-1 ">
          <div className="task_menu w-50  border text-start">
            <div>
              <h6>make state using redux</h6>
              <p>description :- state mamangement with help of redux</p>
            </div>
            <div>
              <h6>make state using redux</h6>
              <p>description :- state mamangement with help of redux</p>
            </div>
            <div>
              <h6>make state using redux</h6>
              <p>description :- state mamangement with help of redux</p>
            </div>
            <div>
              <h6>make state using redux</h6>
              <p>description :- state mamangement with help of redux</p>
            </div>
          </div>

          <div className="result ">
            <Typography variant="h6">Uploads Your Docs</Typography>
            <form action="" onSubmit={handleSubmit(submit)}>
              <div className=" shadow block p-1 my-3">
                <p>Upload Zip File</p>
                <TextField
                  variant="outlined"
                  type="file"
                  name="task_zip"
                  {...register("task_zip")}
                  error={errors.task_zip}
                  helperText={errors?.task_zip?.message}
                />
              </div>
              <div className=" block shadow p-1 my-3">
                <p>Screen shots</p>
                <TextField
                  variant="outlined"
                  type="file"
                  name="screen_shots"
                  {...register("screen_shots")}
                  error={errors.screen_shots}
                  helperText={errors?.screen_shots?.message}
                />
              </div>

              <div className="p-1">
                <button className="btn btn-primary w-100 my-3" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
