import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { chatBackground } from "../constants/color";

const Home = () => {
  return (
    <Box sx={{backgroundImage:chatBackground,backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'}} height={"100%"}>
        <Box>
      <Typography p={"2rem"} variant="h5" textAlign={"center"} sx={{zIndex:2}}>
        Select a friend to chat
      </Typography>
      </Box>
    </Box>
  );
};

// Wrapping Layout to home 
export default AppLayout()(Home);
