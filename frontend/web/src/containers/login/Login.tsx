import React, { ChangeEvent, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { Box } from "../../components/Box";
import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../../graphql/mutation";
import { userSession } from "../../helpers/auth";

export const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [login, { data, loading, error }] = useMutation(SIGNIN_USER);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({
      variables: {
        username: formValues.username,
        password: formValues.password,
      },
    });
  };

  useEffect(() => {
    if (!data || !data.login) return;
    // TODO: Redirect user
    console.log(data.login.token);
    userSession.saveUser(data.login.token);
  }, [data]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h2>Login</h2>
      <Box
        display="flex"
        flexDirection="column"
        as="form"
        onSubmit={handleSubmit}
      >
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
          <Link to="/signup">Signup</Link> | <Link to="/">Home</Link>
        </Box>
        {/* //TODO: Better error handling */}
        {error && <p>{error.message}</p>}
      </Box>
    </Box>
  );
};
