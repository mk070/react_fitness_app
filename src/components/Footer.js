import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" sx={{height:{xs:'90px', lg:'100%'}, alignItems: 'center'}}>
    <Stack gap="40px" sx={{ alignItems: 'center'}}  flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '30px', height:'35px' }}/>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '12px' } , p:{lg:" 0 0 20px 0"}, mt: {lg:"21px", xs:'10px'} }} textAlign="center" > <Link to='https://www.linkedin.com/in/p-madhan/'>Developed by Madhan</Link></Typography>
  </Box>
);

export default Footer;
