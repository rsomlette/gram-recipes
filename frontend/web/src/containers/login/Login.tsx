import React, { ChangeEvent, useEffect, useState } from "react";

import { Box, Button, Link, InputText } from "../../components";
import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../../graphql/mutation";
import { userSession } from "../../helpers/auth";

export const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [login, { data, loading, error }] = useMutation(SIGNIN_USER);

  const handleChange = (value: string, name: string) => {
    setFormValues({ ...formValues, [name]: value });
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
        <InputText
          required={true}
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          label="Username"
        />
        <InputText
          required={true}
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          label="Password"
        />
        <Button type="submit" disabled={loading}>
          Submit
        </Button>
        <Box display="flex" justifyContent="center" mt={4}>
          <Link to="/signup">Signup</Link>
        </Box>
        {/* //TODO: Better error handling */}
        {error && <p>{error.message}</p>}
      </Box>
    </Box>
  );
};
