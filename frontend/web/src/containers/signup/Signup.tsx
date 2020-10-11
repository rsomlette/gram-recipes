import React, { ChangeEvent, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { Box } from "../../components/Box";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../../graphql/mutation";

export const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    signupUser({
      variables: {
        email: formValues.email,
        password: formValues.password,
        username: formValues.username,
      },
    });
  };

  useEffect(() => {
    if (!data || !data.signupUser) return;
    // TODO: Redirect user
    console.log(data.signupUser.token);
  }, [data]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h2>Signup</h2>
      <Box
        display="flex"
        flexDirection="column"
        as="form"
        onSubmit={handleSubmit}
      >
        <TextField
          required={true}
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          label="Email"
        />
        <TextField
          required={true}
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          label="Username"
        />
        <TextField
          required={true}
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          label="Password"
        />
        <Button type="submit" disabled={loading} variant="contained">
          Submit
        </Button>
        <Box>
          <Link to="/login">Login</Link> | <Link to="/">Home</Link>
        </Box>
        {/* //TODO: Better error handling */}
        {error && <p>{error.message}</p>}
      </Box>
    </Box>
  );
};
