import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import "./index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const singupSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20)
    .required(),
  emailId: yup.string().email().required(),
  mobile: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required("A phone number is required"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters"),
});

const logSchema = yup.object().shape({
  emailId: yup.string().email().required(),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters"),
});

export default function Auth() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(name === "login" ? logSchema : singupSchema),
  });

  const handleClick = async (value) => {
    //  const response = await addRequest("", value);
    // if (response) {
    //   localStorage.setItem("token", response.data.token);
      // setLogin(true)
    //   reset();
    // } else {
    // }
  };

   return (
    <div className="head">
       <Typography variant="h3">{name==="login"?"Login":"SingUp"}</Typography>
      <form
        action=""
        className="form_head"
        onSubmit={handleSubmit(handleClick)}
      >
        {name === "login" ? (
          <div className="d-flex flex-column row-gap-4 inputs ">
            <TextField
              label="email"
              variant="outlined"
              name="emailId"
              type="email"
              {...register("emailId")}
              error={!!errors.emailId}
              helperText={errors?.emailId?.message}
            />
            <TextField
              label="password"
              variant="outlined"
              name="password"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors?.password?.message}
            />
          </div>
        ) : name === "singup" ? (
          <div className="d-flex flex-column row-gap-4 inputs ">
            <TextField
              label="name"
              variant="outlined"
              name="name"
              type="text"
              {...register("name")}
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
            <TextField
              label="email"
              variant="outlined"
              name="emailId"
              type="email"
              {...register("emailId")}
              error={!!errors.emailId}
              helperText={errors?.emailId?.message}
            />
            <TextField
              label="mobile"
              variant="outlined"
              name="mobile"
              {...register("mobile")}
              placeholder=" enter your mobile number.... "
              error={!!errors.mobile}
              helperText={errors?.mobile?.message}
            />
            <TextField
              label="password"
              variant="outlined"
              name="password"
              type="password"
              {...register("password")}
              placeholder=" enter your password.... "
              error={!!errors.password}
              helperText={errors?.password?.message}
            />
          </div>
        ) : (
          ""
        )}
        <button type="submit" className="btn btn-primary mt-3 w-50">
          Submit
        </button>
      </form>
    </div>
  );
}
