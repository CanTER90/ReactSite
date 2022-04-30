import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { AppBar, Card, CardActions, CardMedia, CardContent, Container, Grid, IconButton, Paper, Toolbar, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LayerIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Box } from '@mui/system';
//import BottomNavigation from '@mui/material/BottomNavigation';
//import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 1
  },
  title:{
    flexGrow: 1
  },
  mainFeaturesPost:{
    position:'relative',
    color:'white',
    marginBottom: 4, 
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
  },
  overlay:{
    position:'absolute',
    top:0, 
    bottom:0,
    right:0,
    left:0,
    backgroundOverlay:'rgba(0, 0, 0, .3)',
  },
  mainFeaturesPostContent:{
    position:'relative',
    padding: 60,
    marginTop:10
  },
  cardMedia:{
    paddingTop:'56.25%'
  },
  cardContent:{
    flexGrow:1
  },
  CardGrid:{
    marginTop: 4,
  }
}));

const Java = [1];
const HTML = [1];
const JavaScript = [1];
const PHP = [1];

function App(){
  const classes = useStyles();
  const [value, setValue] = React.useState('recents')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <>
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" 
          color="inherit" aria-laable="menu" className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6'className={classes.title}>Programming School</Typography>
          <Box mr={3}>
            <Button color="inherit" variant='outlined'>Log In</Button>
          </Box>
          <Button color="secondary" variant='contained'>Sign In</Button>
        </Toolbar>
      </Container>
    </AppBar>
    <main>
      <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage:'url(https://i.pinimg.com/originals/41/82/a9/4182a9dd330c6442c4a1fbc78274d838.png)'}}>
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                  component='h1'
                  variant='h3'
                  color='white'
                  gutterBottom>
                    Made by 
                    Bekzat Ashikbayev
                  </Typography>
                  
                  <Typography
                  component='h2'
                  color='white'
                  paragraph className={classes.mainFeaturesPostContent}>
                    Programming School 
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    Learn More
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth='md'>
          <Typography variant="h1" align='center' color='textPrimary' gutterBottom>
            Programming School
          </Typography>
          <Typography variant="h5" align='center' color='textSecondary' paragraph>
          This programming school 
          Make kids more clever
          Our courses consist of 
          Java, JavaScript, C++ etc.
          Its very interesting
          </Typography>
          <div className={classes.mainButtons}>
            < Grid container spacing={5} justifyContent='center'>
              <Grid item>
                <Button variant='contained' color='primary'>Start Now</Button>
                </Grid>
              <Grid item>
              <Button variant='outlined' color='primary'>Learn More</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.CardGrid} maxWidth='md'>
        
        <Grid container spacing={4}>
          {Java.map((Java)=>
          <Grid item key={Java} xs={12} sm={6} md={4}>
            <Card className={classes.Java}>
              <CardMedia className={classes.cardMedia}
              image="https://dev.java/assets/images/java-logo-vert-blk.png"
              title='Image Title'/>
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                  Java
                </Typography>
                <Typography>
                If you want to start our study Press 'View'
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  View
                </Button>
               
                <LayerIcon/>
                <PlayCircleFilledIcon/>
              </CardActions>
            </Card>
          </Grid>
          )}
          {JavaScript.map((Java)=>
          <Grid item key={JavaScript} xs={12} sm={6} md={4}>
            <Card className={classes.JavaScript}>
              <CardMedia className={classes.cardMedia}
              image="https://cdn.coursehunter.net/category/javascript.png"
              title='Image Title'/>
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                  JavaScript
                </Typography>
                <Typography>
                If you want to start our study Press 'View'
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  View
                </Button>
                
                <LayerIcon/>
                <PlayCircleFilledIcon/>
              </CardActions>
            </Card>
          </Grid>
          )}
          {HTML.map((Java)=>
          <Grid item key={HTML} xs={12} sm={6} md={4}>
            <Card className={classes.HTML}>
              <CardMedia className={classes.cardMedia}
              image="https://itproger.com/img/courses/1476977240.jpg"
              title='Image Title'/>
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                  HTML
                </Typography>
                <Typography>
                If you want to start our study Press 'View'
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  View
                </Button>
                <LayerIcon/>
                <PlayCircleFilledIcon/>
              </CardActions>
            </Card>
          </Grid>
          )}
          {PHP.map((Java)=>
          <Grid item key={PHP} xs={12} sm={6} md={4}>
            <Card className={classes.PHP}>
              <CardMedia className={classes.cardMedia}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
              title='Image Title'/>
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                  PHP
                </Typography>
                <Typography>
                  If you want to start our study Press 'View'
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  View
                </Button>
                <LayerIcon/>
                <PlayCircleFilledIcon/>
              </CardActions>
            </Card>
          </Grid>
          )}
        </Grid>
      </Container>
    </main>
    <footer>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <BottomNavigation value={value}
      onChange={handleChange}
      className={classes.root}>
        <BottomNavigationAction label='Recents'
        value='recents'
        icon={<RestoreIcon/>}/>
        <BottomNavigationAction label='Favorites'
        value='favorites'
        icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label='Nearbly'
        value='nearbly'
        icon={<LocationOnIcon/>}/>
        <BottomNavigationAction label='Folder'
        value='Folder'
        icon={<FolderIcon/>}/>
      </BottomNavigation>
      <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
        Designed by Bekzat Ashikbayev
      </Typography>
    </footer>

    </>
  );
}
export default App;