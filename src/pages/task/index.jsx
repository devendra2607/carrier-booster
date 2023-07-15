import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";

const schema = yup.object().shape({
  task_zip: yup.mixed().required("Please select an image file"),
  // .test(
  //   "fileType",
  //   "Invalid file format. Only images are allowed",
  //   (value) => {
  //     return (
  //       value && value[0] && /^image\/(jpeg|jpg|png)$/.test(value[0].type)
  //     );
  //   }
  // )
  // .test("fileSize", "File size is too large", (value) => {
  //   return value && value[0] && value[0].size <= 1024 * 1024; // 1MB maximum file size
  // }),
  screen_shot: yup.mixed().required("Please select an image file"),
  // .test(
  //   "fileType",
  //   "Invalid file format. Only images are allowed",
  //   (value) => {
  //     return (
  //       value && value[0] && /^image\/(jpeg|jpg|png)$/.test(value[0].type)
  //     );
  //   }
  // )
  // .test("fileSize", "File size is too large", (value) => {
  //   return value && value[0] && value[0].size <= 1024 * 1024; // 1MB maximum file size
  // }),
});

export default function Task() {
  const [task, setTask] = useState({});
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [minutes, setMinutes] = useState(180);
  const [second, SetSecond] = useState(0);

  const submit = (value) => {
    const task_zip = value.task_zip[0];
    const screen_shot = value.screen_shot[0];
    const users = value.users.map((user) => user[0]);
    setData([...data, { task_zip, screen_shot, users }]);
    reset();
  };

  const getData = async () => {
    // const response =await getRequest(`/task/${id}`);
    // if(Object.keys(response)){
    //     setTask(response)
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data", data);
  return (
    <div className="task_head text-light">
      <div className="heading  p-1 my-4">
        <h1>TASK :-</h1>
        {task.task_name}
      </div>
      <div className="w-100  p-2 ">
        <div className=" d-flex gap-5">
          <div className="timmer rounded mx-3">
            <p> MENUTS:- {minutes} </p>
            <p> SECOND:- {second} </p>
          </div>
          <div className="notice d-flex  ">
            <marquee behavior="smooth" direction="left">
              <p className="text-light">
                <span className="font-weight-bold text-xl-left text-uppercase">
                  {" "}
                  Notice:-
                </span>
                Complete Task within Time Period and Upload Successfully
                ,Otherwise Your Out Of The Race.
              </p>{" "}
            </marquee>
          </div>
        </div>

        <div className="d-flex mt-1 ">
          <div className="task_menu w-50   text-start">
            <div className="task_menu_child"> File</div>
          </div>

          <div className="result pt-2">
            <Typography variant="h6">Uploads Your Docs</Typography>
            <form
              action=""
              className="text-light"
              onSubmit={handleSubmit(submit)}
            >
              <div className=" shadow block p-1 my-2">
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
                  name="users"
                  {...register("screen_shot")}
                  error={errors.screen_shot}
                  helperText={errors?.screen_shot?.message}
                />
                <AddScerrnShots control={control} register={register} />
              </div>

              <div className="p-1">
                <button className="btn text-light w-100 my-3" type="submit">
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

const AddScerrnShots = ({ register, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });
  return (
    <div className="card mt-3 text-light">
      <div className="card-header  text-dark">More Screen Shots</div>
      <div className="card-body text-light">
        {fields.map((val, index) => (
          <div key={index} className="form-group">
            <input
              type="file"
              placeholder="Screen shots"
              className="form-control"
              name={`users[${index}]`}
              {...register(`users[${index}]`)}
              defaultValue={val.screen_shot}
            />
            <button
              className="btn text-light my-2"
              onClick={() => remove(index)}
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
        <button
          className="btn text-light "
          type="button"
          onClick={() => append()}
        >
          Add Screen Shots
        </button>
      </div>
    </div>
  );
};
