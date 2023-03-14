import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar , Feed, SearchFeed,VideoDetail} from "./Component/index"

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor:"#000"}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id' exact element={<VideoDetail />} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
