import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import logo from './../images/logopizza.jpg'
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
        color:"#ffd700" 
    },
    title: {
      flexGrow: 1,
    },
    pizza:{
       fontSize:'3.2rem',
       color:"#ffd700",
       letterSpacing:'5px'
    },
    btncolor:{
        backgroundColor:"#ffd700"
    },
    paracolor:{
        color:"#ffd700",
        "&:hover": {
          color: 'white'
        }
    },
    paper:{
      width:500,
      height:300,
      marginLeft:'10%',
      marginTop:'10%'
    }
     ,
     footer:{
       display:'flex',
       justifyContent:'flex-end',
       position:'fixed',
       left: 0,
       bottom: 0,
       width: "100%",
      },
     header:{
       display:'flex',
       justifyContent:'space-between'
     },

     appbar:{
       backgroundColor:"#333333"
     },
     paracolor1:{
      color:"#ffd700",
      lineHeight: '1.6',

     },
     btncolor1:{
      backgroundColor:"#ffd700",
      margin:theme.spacing(2),
      
     },
     links:{
      textDecoration:'none'
     }

    
  }));

function Home(){
    const classes = useStyles();
    return(
        <div className="page">
            <AppBar position="static" className={classes.appbar}>
            <Toolbar  className={classes.header}>

              <div>
            <img src={logo} alt="logo" width="50px" />
            </div>

            <div>
          <Button className={classes.paracolor}>Login</Button>
          <Button className={classes.paracolor}>Location</Button>
          <Button className={classes.paracolor}>Contact Us</Button>
          <IconButton edge="start" className={classes.menuButton} >
            <MenuIcon />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>

<div className={classes.paper}>
      <h1 className={classes.pizza}>
          WADI<span style={{color:'white',borderWidth:'5px '}}>RUM </span> <br/>PIZZA
      </h1>
      <p className={classes.paracolor1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <Button  className={classes.btncolor} variant="contained">Read More</Button>
      <Button  className={classes.btncolor1} variant="contained"><Link to="/list" className={classes.links}>Order Here</Link></Button>
</div>
      <div className={classes.footer}>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FacebookIcon />
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <TwitterIcon />
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            < InstagramIcon/>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            < YouTubeIcon/>
          </IconButton>
          </div>

        </div>

    )
}

export default Home;
