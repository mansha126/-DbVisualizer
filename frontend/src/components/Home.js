import React from 'react'
import "./Home.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

const Home = () => {
  return (
    <div>
<header className="text-white text-center" id="header" >
  <div className='container' style={{marginTop:'15%'}}>
  <h1>DATABASE VISUALIZATION</h1>
  

  {/* <input type="search" name="search" class="form-control" placeholder='search'style={{marginTop:'2%'}} />
  <input type="submit" value="search"/> </div> */}
<div class="search-box">
  <input type="text" placeholder="Search anything" class="search-input"/>
    <a href="#" class="search-btn">
      <i class="fas fa-search"></i>
    </a>
</div>


  </div>
</header>
<Container>
  
<Card sx={{ maxWidth: 250 }}>

<Grid item xs={6}>
    
        <CardMedia className='card-img-top ' 
          component="img"
          height="190"
          image="https://previews.123rf.com/images/tarapong/tarapong1503/tarapong150300047/37601065-infographics-vector-design-template-.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bar Chart
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. 
          </Typography>
        </CardContent>
        </Grid>
        <Grid item xs={6}>
        <CardMedia className='card-img-top'
          component="img"
          height="190"
          image="https://png.pngtree.com/png-clipart/20190925/original/pngtree-stock-graph-without-bars-positive-green-going-up-png-image_4997834.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Line Chart
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A line graph is a type of chart used to show information that changes over time. We plot line graphs using several points connected by straight lines.  
          </Typography>
        </CardContent>
        </Grid>
   


      

      
      

        
    </Card>



    </Container>
    
    </div>
           
    
  )
}

export default Home