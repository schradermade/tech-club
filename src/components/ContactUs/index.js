import React from 'react';

import { Container, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';
import { Icon, InlineIcon } from '@iconify/react';
import Form from './Form';
// import Info from './Info';


import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import './styles.css';

const location = {
  address: 'Cleveland Apartment Brokers',
  lat: 41.4523811,
  lng: -81.78998120059272,
}

// const renderIcons = () =>
//   [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
//     <Icon icon={icon} key={key} className="info-icon" />
//   ))

const ContactUs = () => {


  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <React.Fragment>
      <Grid
        xs={12}
        container
        className="contact-us"
        id="contact"
        direction="column"
        justify="center"
      // alignItems="flex-end"
      >
        <Grid item xs={12}>
          <Container maxWidth="lg">
          </Container>
        </Grid>
        <Grid className="contactFormInner" item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid className="contactFormPart" item md={6}>
                <Box padding={!matchesSM || '0 20px'}>
                  <div className="headingContent">
                    <h2>Want to join one of our virtual meet-ups?</h2>
                    <p>Send us a message and we'll get back to you! </p>
                    <p>Our form is currently under construction! Please email us directly at <strong>christianschrader12@gmail.com</strong></p>
                  </div>
                </Box>
                {!matchesSM && <Form />}
              </Grid>
              <Grid item md={6}>
                {/* <Info /> */}
              </Grid>
  
              <Grid className="mobileForm" item md={12}>
                <div className="contactFormPart">
                 {matchesSM && <Form />} 
                </div>
              </Grid>
  
              <Grid className="footer1ter" item xs={12}>
                <Grid container spacing={2}>
                  <Grid className="copyrightText" item sm={6}>
                    <p>Created by Christian Schrader. © 2022</p>
                  </Grid>
                  <Grid className="renderIconsPart" item sm={6}>
                    {/* <div className="info-icons-container">{renderIcons()}</div> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ContactUs