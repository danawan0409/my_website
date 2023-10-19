import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bg1 from '../../../assets/react.png';

export default function MediaCard1() {
  return (
    <Card sx={{ width: 325, padding: '1rem', }}>
      <CardMedia
        sx={{ height: 380 }}
        image={bg1}
        title="New personal website!"
      />
      <CardActions
        sx={{
          bgcolor: '#E5CEB2',
          height: '4rem', 
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}>
        <Button variant="body2" color="text.secondary" sx={{display: 'block',}}>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'left', fontSize:'0.9rem', fontFamily: 'Inika'}}>
            10/09/2023
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'left', fontSize:'1rem', fontFamily: 'Inika'}}>
            Personal Website now up! 
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}