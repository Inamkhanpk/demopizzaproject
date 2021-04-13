import React,{useContext, useState} from 'react'
import logo from './../images/logopizza.jpg'
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import './../App.css';
import Typography from '@material-ui/core/Typography';
import pizzapic1 from './../images/pizzapic1.jpg'
import pizzapic2 from './../images/pizzapic2.jpg'
import pizzapic3 from './../images/pizzapic3.jpg'
import stuffedcrust from './../images/stuffedcrust.jpeg'
import normalcrust from './../images/normalcrust.jpeg'
import skinnycrust from './../images/skinnycrust.jpeg'
import garlicsauce from './../images/garlicsauce.jpeg'
import greensauce from './../images/greensauce.jpeg'
import mustardsauce from './../images/mustardsauce.jpeg'
import onion from './../images/onion.jpeg'
import tomato from './../images/tomato.jpeg'
import corn from './../images/corn.jpeg'
import cheddarcheese from './../images/cheddarcheese.jpeg'
import creamcheese from './../images/creamcheese.jpeg'
import mozerellacheese from './../images/mozerellacheese.png'
import vegancheese from './../images/vegancheese.jpeg'
import redsauce from './../images/redsauce.jpeg'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { GlobalContext } from '../contextAPI/GlobalState';

//import {useHistory} from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import { PanoramaFishEye } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    // root: {
    //   maxWidth: 500,
    //   maxHeight:400,
    //   margin:theme.spacing(2),
    //   "&:hover":{
    //     borderWidth:"5px",
    //     borderColor:'yellow',
    //     borderStyle:'solid'
    //   }
      
    // },
   
    media: {
      height: 200,
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        
    },
    root2:{
      maxWidth: 500,
      maxHeight:400,
      marginTop:theme.spacing(4),
    },
    root1: {
        maxWidth: 400,
        maxHeight:400,
        backgroundColor:"yellow",
        marginTop:theme.spacing(12),
        padding:theme.spacing(2),
        //margin:theme.spacing(2)
      },
      main:{
          display:'flex',
          justifyContent:'center',
      },
      container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'
      },
      main1:{
        display:'flex',
        justifyContent:'center',
      },
      text:{
          background:'white',
          width:'75%'
          
      },
      menuButton: {
        color:"#ffd700" 
    },
    paracolor:{
        color:"#ffd700",
        "&:hover": {
          color: 'white'
        }
    },
    header:{
        display:'flex',
        justifyContent:'space-between'
      },
      appbar:{
        backgroundColor:"#333333"
      },
      typomargin:{
          margin:theme.spacing(2)
      },
      container1:{
        position: 'relative',
        margin: 'auto',
        color: 'white'
      },
      topright:{
        position: 'absolute',
        top: '8px',
        right: '16px',
        
      },
      topright1:{
        position: 'absolute',
        top: '60px',
        right: '16px',
      },
      textblock: {
        position: 'absolute',
        
        
        bottom: '0',
        
        background: 'rgb(0, 0, 0)', /* Fallback color */
        background: 'rgba(0, 0, 0, 0.5)',/* Black background with 0.5 opacity */
        color: '#f1f1f1' ,/* Grey text */
        padding: '20px',
        width: '100%'
       
      },
      textblock1: {
        position: 'absolute',
       
        bottom: '0',
        
        background: 'rgb(0, 0, 0)', /* Fallback color */
        background: 'rgba(0, 0, 0, 0.5)', /* Black background with 0.5 opacity */
        color: '#f1f1f1',/* Grey text */
        padding: '20px',
        width: '100%',
       
      },
      
      // btnhover:{
      //   display:'none'
      // },
      // btnhover1:{
      //   "&:hover": {
      //     backgroundColor: 'gray'
      //   }
      // },
      breadcrumbcolor:{
        "&:hover": {
          backgroundColor: 'black',
          color:"yellow"
        }
      },
      align:{
        display:'flex',
        justifyContent:'center',
        flexGrow:'1'
      },
      breakline:{
       padding:theme.spacing(2)
      },
      container2:{
        marginTop:theme.spacing(8)
      },
      fontbold:{
        fontWeight:'1000'
      },
      space:{
       marginTop:theme.spacing(2)
      }
      
    }));

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: 'black',
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip); 

  

  const posts = [
    {id: 1, name: 'BUFFALO CHICKEN', content:'this pizza is for healthy people'},
    {id: 2, name: 'GARLIC CHICKEN & BACON RANCH',content:'this pizza is for healthy people' },
    {id: 3, name: 'CHEESY GARLIC WITHCREME FRANCIE',content:'this pizza is for healthy people' }
  ];

  
  
  

function List(){
    const classes = useStyles();
    const { getitembyid,items} = useContext(GlobalContext);
const selected = items
    //const history = useHistory()
    
    const getitem = (id) => {
    
        getitembyid(id)
    };
    

    const itemlist = posts.map((post)=>
  <Card className="root">
  <div className={classes.container1}>
  <img src={pizzapic1} alt="logo" width="500px" />
    <div className={classes.topright}>
      <Button variant='contained' className="btnhover"  onClick={()=>{
    //      if(post.id === 1){
    //        setName('BUFFALO CHICKEN')}
    //   else if(post.id === 2){
    //     setName('GARLIC CHICKEN & BACON RANCH')
    //   }
    // else if(post.id === 3){
    //   setName('CHEESY GARLIC WITHCREME FRANCIE')
    // }} 
    getitem(post.id)
    }}>
        Select
      </Button>
      </div>
      <div className={classes.topright1}>
      <Button variant='contained' className="btnhover1">
        Navlink Info
      </Button>
      </div>
      <div className={classes.textblock}>
      <h1 >{post.name}</h1>
      <p >
          {post.content}
      </p>
      </div>
    </div>
    
  </Card>
  )

  

    
    const lists = () => (
    <div className={classes.container2} >
    


    <Card className={classes.root2}>
       
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.fontbold}>
              {selected.name}
            </Typography>
            
            <Typography variant="body2" component="p">
              Select Size
            </Typography>
            <div className={classes.main}>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
              Small<br/> 4 pcs
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
              Middle<br/> 6 pcs
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
              Large<br/> 8 pcs
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
              ExtraLarge <br/>10 pcs
            </Typography>
            </div>
            </CardContent>
        
      </Card>
  
  
      
  
      <Card className={classes.root2}>
       
        <CardContent>
            <Typography variant="body2"  component="p">
              Select Crust
            </Typography>
  
            <div className={classes.main}>
                <div className={classes.typomargin}>
            <img src={skinnycrust} width="30" height="30"/>
            
            <Typography variant="body2" color="textSecondary" component="p">
              Skinny
            </Typography>
            </div>
            
            <div className={classes.typomargin}>
            <img src={stuffedcrust} width="30" height="30"/>
            <Typography variant="body2" color="textSecondary" component="p">
              Stuffed
            </Typography>
            </div>
  
            <div className={classes.typomargin}>
            <img src={normalcrust} width="30" height="30"/>
            <Typography variant="body2" color="textSecondary" component="p">
              Normal
            </Typography>
            </div>
            </div>
            </CardContent>
        
      </Card>
  
  
      <Card className={classes.root2}>
       
        <CardContent>
            <Typography variant="body2"  component="p">
              Select Sauce
            </Typography>
            
            <div className={classes.main}>
            <div className={classes.typomargin}>
            <img src={garlicsauce} width="30" height="30"/>
            <Typography variant="body2" color="textSecondary" component="p">
              Garlic
            </Typography>
            </div>
             
           <div className={classes.typomargin}>
            <img src={greensauce} width="30" height="30"/>
            <Typography variant="body2" color="textSecondary" component="p">
              Green
            </Typography>
            </div>
            
            <div className={classes.typomargin}>
            <img src={redsauce} width="30" height="30"/>
            <Typography variant="body2" color="textSecondary" component="p">
              Red
            </Typography>
            </div>
             
            <div className={classes.typomargin}>
            <img src={mustardsauce} width="30" height="30"/>
            <Typography variant="body2" color="textSecondary" component="p">
              Mustard
            </Typography>
            </div>
            </div>
            </CardContent>
        
      </Card>
      
  
  
      <Card className={classes.root2}>
       
       <CardContent>
           <Typography variant="body2"  component="p">
             Select Veggie
           </Typography>
           
           <div className={classes.main}>
           <div className={classes.typomargin}>
           <img src={onion} width="30" height="30"/>
           <Typography variant="body2" color="textSecondary" component="p">
             Onion
           </Typography>
           </div>
           
           <div className={classes.typomargin}>
           <img src={tomato} width="30" height="30"/>
           <Typography variant="body2" color="textSecondary" component="p">
             Tomato
           </Typography>
           </div>
           
           <div className={classes.typomargin}>
           <img src={corn} width="30" height="30"/>
           <Typography variant="body2" color="textSecondary" component="p">
             Corn
           </Typography>
           </div>
           </div>
           
           </CardContent>
       
     </Card>
  
     <Card className={classes.root2}>
       
       <CardContent>
           <Typography variant="body2" component="p">
             Select Cheese
           </Typography>
           
           <div className={classes.main}>
           <div className={classes.typomargin}>
           <img src={cheddarcheese} width="30" height="30"/>
           <Typography variant="body2" color="textSecondary" component="p">
             Chedar
           </Typography>
           </div>
           
           <div className={classes.typomargin}>
           <img src={creamcheese} width="30" height="30"/>
           <Typography variant="body2" color="textSecondary" component="p">
             Cream
           </Typography>
           </div>
           
           <div className={classes.typomargin}>
           <img src={mozerellacheese} width="30" height="30"/>
           <Typography variant="body2" color="textSecondary" component="p">
             Mozerella
           </Typography>
           </div>
  
           <div className={classes.typomargin}>
           <img src={vegancheese} width="30" height="30"/>
           <Typography variant="body2" color="textSecondary" component="p">
             Vegan
           </Typography>
           </div>
           </div>
           
           </CardContent>
       
     </Card>
  
      <Card className={classes.root1}>
          <div className={classes.header}>
           <Typography  variant="body2"  component="p">
              CART
            </Typography>
  
            <Typography  variant="body2"  component="p">
              CLEAR
            </Typography>
            </div>
        
        
            <TextareaAutosize aria-label="maximum height" rowsMin={3} placeholder="Minimum 3 rows" />
  
           <Typography variant="body2"  component="p">
              Enter Coupon Code
            </Typography>
            
          <div  className={classes.header}>
            <div>
            <TextField
            required
            label="Required"
            defaultValue="Hello World"
            variant="filled"
            className={classes.text}
          />
            </div>
          <Button variant="contained" style={{backgroundColor:'black',color:'white'}}>
            Submit
          </Button>
          </div>
          
        <div  className={classes.header}>
        
        <Typography variant="body2"  component="p">
              SubTotal
            </Typography>
            <Typography variant="body2"  component="p">
              0
            </Typography>
            </div>
           
           <div  className={classes.header}>
            <Typography variant="body2"  component="p">
             Delivery Charges
            </Typography>
            <Typography variant="body2"  component="p">
              0
            </Typography>
            </div>
            <div style={{textAlign:'center'}}>
            <Button variant="contained" style={{backgroundColor:'black',color:'white'}}>
            Checkout
          </Button>
          </div>
    </Card>
  
     </div>
    )

const cart = () => (<Card className={classes.root1}>
<div className={classes.header}>
 <Typography  variant="body2"  component="p" className={classes.space}>
    CART
  </Typography>

  <Typography  variant="body2"  component="p" className={classes.space}>
    CLEAR
  </Typography>
  </div>

<div  className={classes.space}>
  <TextareaAutosize aria-label="maximum height" rowsMin={3} placeholder="Minimum 3 rows" />
</div>
 <Typography variant="body2"  component="p">
    Enter Coupon Code
  </Typography>
  <hr/>
<div  className={classes.header}>
  <div className={classes.space}>
  <TextField
  required
  id="filled-required"
  label="Required"
  defaultValue="Hello World"
  variant="filled"
  className={classes.text}
/>
  </div>
  <div className={classes.space}>
<Button variant="contained" style={{backgroundColor:'black',color:'white' , borderRadius:'20px'}}>
  Submit
</Button>
</div>
</div>

<div  className={classes.header}>
  <div className={classes.space}>
  
<Typography variant="body2"  component="p" className={classes.space}>
    SubTotal
  </Typography>
  </div>
  <div className={classes.space}>
  <Typography variant="body2"  component="p" className={classes.space}>
    0
  </Typography>
  </div>
  </div>
 
 <div  className={classes.header}>
  <Typography variant="body2"  component="p" className={classes.space}>
   Delivery Charges
  </Typography>
  <Typography variant="body2"  component="p" className={classes.space}>
    0
  </Typography>
  </div>
  <div style={{textAlign:'center'}} className={classes.space}>
  <Button variant="contained" style={{backgroundColor:'black',color:'white' , borderRadius:'20px'}}>
  Checkout
</Button>
</div>
</Card>

)


// const goback=()=>{
//   history.goBack();
// }


 const listpizza = selected.length > 1  ? cart() : lists();
    
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

{/* <Button variant="contained" style={{color:'yellow'}} onClick={goback}>Go Back</Button> */}
    <div className={classes.container}>
      <div className={classes.main}>
        <   div >
        <div >
        
    <Breadcrumbs aria-label="breadcrumb" className={classes.align}>
      <StyledBreadcrumb className={classes.breadcrumbcolor}
        label="Pizza"
      />
      <StyledBreadcrumb className={classes.breadcrumbcolor}
        label="Sauce"
      />
      <StyledBreadcrumb className={classes.breadcrumbcolor}
        label="Drinks"
      />
      <StyledBreadcrumb className={classes.breadcrumbcolor}
        label="Cookies"
       />
      <StyledBreadcrumb className={classes.breadcrumbcolor}
        label="Bread"
        />
    </Breadcrumbs>
    </div>
    <div className={classes.breakline}>
    <hr/>
    </div>


    {itemlist}
  
   
    
    </div>
    {listpizza}
{/* 

     <div className={classes.container2} >
    


  <Card className={classes.root2}>
     
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.fontbold}>
            BUFFALO CHICKEN
          </Typography>
          
          <Typography variant="body2" component="p">
            Select Size
          </Typography>
          <div className={classes.main}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
            Small<br/> 4 pcs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
            Middle<br/> 6 pcs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
            Large<br/> 8 pcs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typomargin}>
            ExtraLarge <br/>10 pcs
          </Typography>
          </div>
          </CardContent>
      
    </Card>


    

    <Card className={classes.root2}>
     
      <CardContent>
          <Typography variant="body2"  component="p">
            Select Crust
          </Typography>

          <div className={classes.main}>
              <div className={classes.typomargin}>
          <img src={skinnycrust} width="30" height="30"/>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Skinny
          </Typography>
          </div>
          
          <div className={classes.typomargin}>
          <img src={stuffedcrust} width="30" height="30"/>
          <Typography variant="body2" color="textSecondary" component="p">
            Stuffed
          </Typography>
          </div>

          <div className={classes.typomargin}>
          <img src={normalcrust} width="30" height="30"/>
          <Typography variant="body2" color="textSecondary" component="p">
            Normal
          </Typography>
          </div>
          </div>
          </CardContent>
      
    </Card>


    <Card className={classes.root2}>
     
      <CardContent>
          <Typography variant="body2"  component="p">
            Select Sauce
          </Typography>
          
          <div className={classes.main}>
          <div className={classes.typomargin}>
          <img src={garlicsauce} width="30" height="30"/>
          <Typography variant="body2" color="textSecondary" component="p">
            Garlic
          </Typography>
          </div>
           
         <div className={classes.typomargin}>
          <img src={greensauce} width="30" height="30"/>
          <Typography variant="body2" color="textSecondary" component="p">
            Green
          </Typography>
          </div>
          
          <div className={classes.typomargin}>
          <img src={redsauce} width="30" height="30"/>
          <Typography variant="body2" color="textSecondary" component="p">
            Red
          </Typography>
          </div>
           
          <div className={classes.typomargin}>
          <img src={mustardsauce} width="30" height="30"/>
          <Typography variant="body2" color="textSecondary" component="p">
            Mustard
          </Typography>
          </div>
          </div>
          </CardContent>
      
    </Card>
    


    <Card className={classes.root2}>
     
     <CardContent>
         <Typography variant="body2"  component="p">
           Select Veggie
         </Typography>
         
         <div className={classes.main}>
         <div className={classes.typomargin}>
         <img src={onion} width="30" height="30"/>
         <Typography variant="body2" color="textSecondary" component="p">
           Onion
         </Typography>
         </div>
         
         <div className={classes.typomargin}>
         <img src={tomato} width="30" height="30"/>
         <Typography variant="body2" color="textSecondary" component="p">
           Tomato
         </Typography>
         </div>
         
         <div className={classes.typomargin}>
         <img src={corn} width="30" height="30"/>
         <Typography variant="body2" color="textSecondary" component="p">
           Corn
         </Typography>
         </div>
         </div>
         
         </CardContent>
     
   </Card>

   <Card className={classes.root2}>
     
     <CardContent>
         <Typography variant="body2" component="p">
           Select Cheese
         </Typography>
         
         <div className={classes.main}>
         <div className={classes.typomargin}>
         <img src={cheddarcheese} width="30" height="30"/>
         <Typography variant="body2" color="textSecondary" component="p">
           Chedar
         </Typography>
         </div>
         
         <div className={classes.typomargin}>
         <img src={creamcheese} width="30" height="30"/>
         <Typography variant="body2" color="textSecondary" component="p">
           Cream
         </Typography>
         </div>
         
         <div className={classes.typomargin}>
         <img src={mozerellacheese} width="30" height="30"/>
         <Typography variant="body2" color="textSecondary" component="p">
           Mozerella
         </Typography>
         </div>

         <div className={classes.typomargin}>
         <img src={vegancheese} width="30" height="30"/>
         <Typography variant="body2" color="textSecondary" component="p">
           Vegan
         </Typography>
         </div>
         </div>
         
         </CardContent>
     
   </Card>

    <Card className={classes.root1}>
        <div className={classes.header}>
         <Typography  variant="body2"  component="p">
            CART
          </Typography>

          <Typography  variant="body2"  component="p">
            CLEAR
          </Typography>
          </div>
      
      
          <TextareaAutosize aria-label="maximum height" rowsMin={3} placeholder="Minimum 3 rows" />

         <Typography variant="body2"  component="p">
            Enter Coupon Code
          </Typography>
          
        <div  className={classes.header}>
          <div>
          <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
          className={classes.text}
        />
          </div>
        <Button variant="contained" style={{backgroundColor:'black',color:'white'}}>
          Submit
        </Button>
        </div>
        
      <div  className={classes.header}>
      <Typography variant="body2"  component="p">
            SubTotal
          </Typography>
          <Typography variant="body2"  component="p">
            0
          </Typography>
          </div>
         
         <div  className={classes.header}>
          <Typography variant="body2"  component="p">
           Delivery Charges
          </Typography>
          <Typography variant="body2"  component="p">
            0
          </Typography>
          </div>
          <div style={{textAlign:'center'}}>
          <Button variant="contained" style={{backgroundColor:'black',color:'white'}}>
          Checkout
        </Button>
        </div>
  </Card>

   </div> */}
   </div>
   </div>



   
   
        


   <Grid container className={classes.appbar}>
       <Grid item md={2} style={{display:'flex',justifyContent:'center'}}>
       <img src={logo} alt="logo" width="100px" />
       </Grid>
       <Grid item md={2}>
          <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
       </Grid>
       <Grid item md={2}>
          <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
       </Grid>
       <Grid item md={2}>
          <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
       </Grid>
       <Grid item md={2}>
          <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
       </Grid>
       <Grid item md={2}>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
           <p className={classes.paracolor}>Lorum ipsum dolo</p>
       </Grid>
   </Grid>
   
     

        </div>
    )
}

export default List;
