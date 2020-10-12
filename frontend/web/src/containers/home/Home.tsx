import React from "react";
import { Box, Link } from "../../components";

export const Home = () => (
  <Box
    display="flex"
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
  >
    <h3>Home</h3>
    <div>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
  </Box>
);
