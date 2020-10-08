import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <div>Home</div>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </div>
);
