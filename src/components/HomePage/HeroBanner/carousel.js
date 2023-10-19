import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import bg1 from '../../../assets/react.png';
import bg2 from '../../../assets/aspNet.png';
import bg3 from '../../../assets/ynk.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'New Website Launch!',
    imgPath:
        bg1,
  },
  {
    label: 'Game Engine forum in the works using ASP.net',
    imgPath:
        bg2,
  },
  {
    label: 'Project Yominokuni Demo v2.0 in the works',
    imgPath:
        bg3,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1960, position: 'relative', top: 0, flexGrow: 1,}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          top: 50,
          bgcolor: 'transparent',
          position: 'relative',
          top: '55vh',
          left: '15vw',
          width: '65vw',
        }}
      >
        <Typography sx={{typography: 'h1', zIndex: 'tooltip', color:'#E5CEB2', fontFamily:'Inika', }}>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100vh',
                  minHeight: '480px',
                  display: 'block',
                  maxWidth: '120rem',
                  overflow: 'hidden',
                  width: '100%',
                  objectFit: 'cover',
                  opacity: '0.5',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            sx={{
                top: '-45vh',
                color: '#E5CEB2',
                fontFamily: 'Inika', 
                fontSize: '1.5rem'
              }}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft/>
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="large" 
            onClick={handleBack} 
            sx={{
              top: '-45vh',
              color: '#E5CEB2',
              fontFamily: 'Inika', 
              fontSize: '1.5rem',
              }}
            disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
