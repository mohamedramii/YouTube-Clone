import { Stack } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "..//../Utils/Constants.js";
import SearchBar from "./SearchBar/SearchBar.jsx";


const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}>
    <Link to='/' style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
