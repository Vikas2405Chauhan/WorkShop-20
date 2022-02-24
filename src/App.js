import * as React from 'react';
import './App.css';
import NavBar from './navbar';
import Typography from '@material-ui/core/Typography'
import { Box, Container } from '@material-ui/core';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider } from 'material-ui';

const useStyles = makeStyles((theme) => 
    createStyles({
    head: {
      display: "flex",
      justifyContent: "space-between"
    },

    head1: {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto"
    },

    a: {
      display: "flex",
      flexDirection: 'row'
    },

    a1: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
    },

    a2: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
    },

    a3: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
      columnGap: '20px',
    },

    a4: {
      display: "flex",
      flexDirection: 'column',
      rowGap: '10px',
    },

    tab: {
      background: "white"
    },

    tabs: {
      borderBlockColor: '#191D19',
      border: "2px",
      paddingTop: '70px',
      paddingLeft: '150px'
    },
    
  }));

  const App = () => {

    const classes = useStyles();
  
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

  return (
      <div className='app'>
         <NavBar/>
        <Box paddingTop={15} paddingLeft={15} sx={{background:'#FFFFFF',width: '100%'}}>
          <Container className={classes.head}>
            <Typography variant='h6'>Patient Information</Typography>
            <Typography variant='h10'>Last updated 10:25 AM today</Typography>
          </Container>
          <Container className={classes.a}>
    <Avatar sx={{ width: 56, height: 56}}>S</Avatar>
      <Container className={classes.f1}>
      <Typography variant='h6'>Sara Smith</Typography>
      <Typography variant='h7'>Phone: 302-857-9685</Typography>
      <Typography variant='h7'>Email: sarasmith@gmail.com</Typography>
      <Typography variant='h7'>Gender: Female</Typography>
      <Typography variant='h7'>Age: 45</Typography>
      </Container>
      <Container className={classes.a2}>
      <Typography variant='h7'>Surgery Type: Rotator Cuff Repair</Typography>
      <Typography variant='h7'>Surgery Date: 15 Aug 2020</Typography>
      <Typography variant='h7'>Height(cm): 163</Typography>
      <Typography variant='h7'>Weight(lb): 110 </Typography>
      <Typography variant='h7'>BMI: 19</Typography>
      </Container>
      <Container className={classes.a3}>
      <Typography variant='h7'>Anesthesilogist: Dr.Chrtina Hardway</Typography>
      <Typography variant='h7'>Anesthesilogist Phone: 301-896-5482</Typography>
      <Typography variant='h7'>Anesthesilogist Email: christna@gmail.com</Typography>
      </Container>
      <Container className={classes.a4}>
        <Typography variant='h7'> Surgery Clearance</Typography>
        <Avatar sx={{ bgcolor: "#43C43F" , width: 56, height: 56}}>YES</Avatar>
      </Container>
    </Container>

    <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className={classes.tabs}
        sx={{backgroundColor:'#F8F8F8'}}

      >
        <Tab  label="List of prior Surgenes" />
        <Tab  label=" List of Medical Diagnosis" />
        <Tab  label="List of Medications" />
        <Tab  label="Airway Evalution " />
        <Tab  label="Anesthesia Clearance and Recommendation" />
      </Tabs>
      <Box width={450}  paddingLeft = {20} paddingTop = {2}>
          <Box  sx={{ backgroundColor: '#d1ebfc' }}>
            <Typography>First Time Surgery</Typography>
          </Box>
            <Box sx={{backgroundColor:'#F8F8F8'}}>
            <Typography>NO</Typography>
            </Box>
          </Box>
          <Box width={450} paddingLeft = {20} paddingTop = {2}>
          <Box  sx={{background: '#d1ebfc' }}>
            <Typography>Family History of Surgical Complication</Typography>
          </Box>
            <Box sx={{backgroundColor:'#F8F8F8'}}>
            <Typography>YES</Typography>
            </Box>
          </Box>
          <Box width={450} paddingLeft = {20} paddingTop = {2}>
          <Box  sx={{backgroundColor: '#d1ebfc' }}>
            <Typography>if Yes, please provide more details</Typography>
          </Box>
            <Box sx={{backgroundColor:'#F8F8F8'}}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum placerat ex ut commodo mollis.
              Proin sapien mauris, porttitor eget augue, vehicula scelerisque eros.
            </Typography>
            </Box>
          </Box>
          <Box paddingLeft = {20} paddingTop = {2}>
          <Typography>Previous Surgenes</Typography>
          </Box>
          <Box width={1100} paddingLeft = {20} paddingTop = {2} >
            <Box  sx={{backgroundColor: '#d1ebfc', p: 1 }}>
            <Container  className={classes.head1}>
            <Typography>Surgery Type</Typography>
            <Typography>Date</Typography>
            <Typography>Anesthesia Type</Typography>
            <Typography>Surgical Complication</Typography>
            <Typography>Anesthetic Complications (nausea, vomiting, difficult intubation)</Typography>
          </Container>
         </Box>
            <Box  sx={{backgroundColor:'#F8F8F8', p: 1,}}>
            <Container  className={classes.head1}>
            <Typography>Shoulder reconstruction</Typography>
            <Typography>January 2008</Typography>
            <Typography>General "Breathing Tube"</Typography>
            <Typography>No</Typography>
            <Typography>No</Typography>
          </Container>
            </Box>
            </Box>
          

        </Box>
      </div>
  );
  
}

export default App;
