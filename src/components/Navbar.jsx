import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'

import {logo} from '../utils/constants'

import SearchBar from './SearchBar'
const url = 'text-1670168057050.png'
const Navbar = () => (
   
   <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
         background: "#000",
         position: "sticky",
         top: 0,
         justifyContent: "space-between",
      }}
   >
      <Link to="/" 
        style={{ 
        display: "flex",
        alignItems: "center" }}
        >
            <div>

             <img src={logo} alt="img of logo" height={45} />
             <img style={{paddingLeft:'20px' }} className='logo-title' src={url} alt='img of logo' />

            </div>
            
      </Link>
      <SearchBar />
   </Stack>
);


export default Navbar