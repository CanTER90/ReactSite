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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
          <Typography variant='h6'className={classes.title}>My site</Typography>
          <Box mr={3}>
            <Button color="inherit" variant='outlined'>Log In</Button>
          </Box>
          <Button color="secondary" variant='contained'>Sign In</Button>
        </Toolbar>
      </Container>
    </AppBar>
    <main>
      <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage:'url(https://source.unsplash.com/random)'}}>
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
                    Bekzat's Site 
                  </Typography>
                  
                  <Typography
                  component='h5'
                  color='white'
                  paragraph className={classes.mainFeaturesPostContent}>
                    My name is Bekzat Ashikbaev. 
                    And I want a score of 100 for this work. 
                    Because I connected everything Material UI. 
                    I hope you can understand me. 
                    By the way, how are you?
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
          <Typography variant="h2" align='center' color='textPrimary' gutterBottom>
            Bekzat Ashikbayev's site
          </Typography>
          <Typography variant="h5" align='center' color='textSecondary' paragraph>
          My name is Bekzat Ashikbaev. 
          And I want a score of 100 for this work. 
          Because I connected everything Material UI. 
          I hope you can understand me. 
          By the way, how are you?
          Here I wanted to add more text, so I write as much as possible. 
          I hope you understand me. 
          Next I will work with the grid.
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
          {cards.map((card)=>
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title='Image Title'/>
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                  Blog Post
                </Typography>
                <Typography>
                  Blog Post. Ashikbaev Bekzat Blog Post. Ashikbaev Bekzat Blog Post. Ashikbaev Bekzat
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  View
                </Button>
                <Button size='small' color='primary'>
                  Edit
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
        Ashikbaev Bekzat's Blog with React and MUI
      </Typography>
    </footer>

    </>
  );
}
export default App;