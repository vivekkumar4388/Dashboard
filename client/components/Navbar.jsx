import React from 'react';
import { LightModeOutlined,
    DarkModeOutlined
    ,Menu as MenuIcon
    ,Search
    ,SettingsOutlined
    , ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import {setMode} from "state";
import proflieImage from "assets/profile.jpg";
import { AppBar, IconButton, Toolbar, InputBase,useTheme} from '@mui/material';

const Navbar = ({isSidebarOpen,setIsSidebarOpen}) => {
    const dispatch =useDispatch();
    const theme=useTheme();

  return (
    <AppBar 
    sx={{
      position:"static",
      background:"none",
      boxShadow:"none",
    }}>
      <Toolbar 
      sx={{
      justifyContent:"space-between"
    }}>
      <FlexBetween>
        <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon/>
        </IconButton>
        <FlexBetween
        backgroundColor={theme.palette.background.alt}
        borderRadius="9px"
        gap="3rem"
        p="0.1rem 1.5rem">
          
        
        </FlexBetween>
      </FlexBetween>
      <FlexBetween gap="1.5rem">
       <IconButton><SettingsOutlined /></IconButton></FlexBetween>
    </Toolbar>
    </AppBar>
  )
}

export default Navbar;
