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
import { createTheme, ThemeProvider } from '@mui/material/styles';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const theme = createTheme({
  breakpoints: {
    values: {
      four: 0,
      three: 600,
      two: 950,
      one: 1300,
    },
  },
});


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
          height: 0,
          pl: 1,
          bgcolor: 'transparent',
          position: 'relative',
        }}
      >
        <Typography sx={{typography: 'h2', zIndex: 'tooltip', color:'#E5CEB2', fontFamily:'Inika', fontSize: "calc(3vh + 3vw)"}}>{images[activeStep].label}</Typography>
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
                  height: '105vh',
                  minHeight: '600px',
                  display: 'block',
                  width: '100%',
                  overflow: 'hidden',
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
                color: '#E5CEB2',
                fontFamily: 'Inika', 
                padding: '0',
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
              color: '#E5CEB2',
              fontFamily: 'Inika', 
              padding: '0'
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
