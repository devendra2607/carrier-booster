import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const singupSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20)
    .required("A Name is required"),
  emailId: yup.string().email().required("A email is required"),
  mobile: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required("A phone number is required"),
  password: yup
    .string()
    .required("A Password is required")
    .min(8, "Password must have at least 8 characters"),
});

const logSchema = yup.object().shape({
  emailId: yup.string().email().required(),
  password: yup
    .string()
    .required("A Password is required")
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {name === "login" ? "Log In" : "Sign In"}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(handleClick)}
          noValidate
          sx={{ mt: 1 }}
        >
          {name === "login" ? (
            <div>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("emailId")}
                error={!!errors.emailId}
                helperText={errors?.emailId?.message}
                id="email"
                label="Email Address"
                name="emailId"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors?.password?.message}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </div>
          ) : (
            <div>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors?.name?.message}
                id="name"
                label="Name "
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("emailId")}
                error={!!errors.emailId}
                helperText={errors?.emailId?.message}
                id="email"
                label="Email Address"
                name="emailId"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("mobile")}
                error={!!errors.mobile}
                helperText={errors?.mobile?.message}
                id="mobile"
                label="Mobile "
                name="mobile"
                autoComplete="mobile"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors?.password?.message}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </div>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {name === "login" ? "Log In" : "Sign In"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              {name === "login" ? (
                <Link href={"/auth?name=singup"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              ) : (
                <Link href={"/auth?name=login"} variant="body2">
                  {" Log In"}
                </Link>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
