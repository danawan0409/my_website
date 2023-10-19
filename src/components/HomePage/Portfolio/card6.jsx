import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bg1 from '../../../assets/luffy.jpg';
import './portfolio.css';

export default function MediaCard6() {
  return (
    <Card sx={{ maxWidth: 345, padding: '1rem', bgcolor:'#E5CEB2'}}>
      <CardMedia
        sx={{ height: 300,}}
        image={bg1}
        title="green iguana"
      />
      <CardActions
        sx={{
          bgcolor: '#372523',
          height: '4rem', 
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}>
        <Button variant="body2" color="text.secondary" sx={{display: 'block',}}>
          <Typography gutterBottom variant="h5" component="div" color="#A18A6E" sx={{textAlign:'left', fontSize:'0.9rem', fontFamily:'Inika'}}>
            Lizard
          </Typography>
          <Typography variant="body2" color="#E5CEB2" sx={{textAlign:'left', fontSize:'1rem', fontFamily:'Inika'}}>
            Lizards are a widespread group of squamate
            species
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}