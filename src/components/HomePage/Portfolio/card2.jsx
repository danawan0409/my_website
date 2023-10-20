import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import htnbq from '../../../assets/htnbq.jpg';
import './portfolio.css';

export default function MediaCard2() {
  return (
    <Card sx={{ width: 345, padding: '1rem', bgcolor:'transparent', boxShadow: 'none'}}>
      <CardMedia
        sx={{ height: 300,}}
        image={htnbq}
        title="green iguana"
      />
      <CardActions
        sx={{
          bgcolor: '#372523',
          height: '4rem', 
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}>
        <Button variant="body2" color="text.secondary" sx={{display: 'block',}} href='https://danapenguin.itch.io/' target="_blank">
          <Typography gutterBottom variant="h5" component="div" color="#A18A6E" sx={{textAlign:'left', fontSize:'0.9rem', fontFamily:'Inika'}}>
            10/19/2023
          </Typography>
          <Typography variant="body2" color="#E5CEB2" sx={{textAlign:'left', fontSize:'1rem', fontFamily:'Inika'}}>
            Games I've worked on 
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}