import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.jpg';

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'sky-blue', position: 'fixed', top: 0 }} elevation={0}>
        <Toolbar>
          <Typography>
          <NavLink to='/'>
              <img src={logo} alt="KL-logo" width={60} style={{borderRadius:'20px'}} />
            </NavLink>
            
          </Typography>
          &nbsp; &nbsp;
          <Typography variant='h7'> Task Management System </Typography>
          <Tabs
            sx={{ ml: 'auto' }}
            textColor='inherit'
            indicatorColor='primary'
            value={value}
            onChange={(e, value) => setValue(value)}
            style={{ color: 'white' }}
          >
            <Tab LinkComponent={NavLink} to='/add-counsellor' label='Add Task' />
            {/* <Tab LinkComponent={NavLink} to='/appointment' label='Appointment' /> */}
            <Tab LinkComponent={NavLink} to='/Visitor' label='View Task' />
            <Tab LinkComponent={NavLink} to='/signin' label='Sign In' />
            <Tab LinkComponent={NavLink} to='/signup' label='Sign Up' />
            <Tab LinkComponent={NavLink} to='/contact' label='Contact Us' />
            <Tab LinkComponent={NavLink} to='/Fetch-Registrations' label='Registrations' />
            <Tab LinkComponent={NavLink} to='/Logout' label='Logout' />
            
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* To push the content below the fixed header */}
    </div>
  );
};

export default Header;