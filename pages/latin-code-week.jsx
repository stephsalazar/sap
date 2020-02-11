import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import dataProyectos from '../data/latinCodeWeek';
import Carousel from '../components/carousel';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    paddingTop: '110px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

const LatinCodeWeek = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <NavigationBar />
      <div className="position">
        <div>
          <img src="https://dummyimage.com/vga" className="imagePresentation" alt="dummy" />
        </div>
        <div>
          <p>
            Latin Code Week acerca a los jóvenes a las carreras de ciencia, tecnología,
            ingeniería y matemáticas (STEM), para convertirse en la fuerza laboral de los
            empleos del futuro. Más de 5,000 jóvenes han sido impactados gracias a este programa.
          </p>
        </div>
        <Carousel/>

        <section>
          {dataProyectos.map(item => (
            <RectangularCard
              thumbnail=""
              title={item.title}
              subtitle={item.subtitulo}
            />
          ))}
        </section>
         
      </div>

      <style jsx global>
        {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        img.imagePresentation {
          width:100%;
        }
        .position {
          padding-top:100px;
        }
        
      `}
      </style>
    </div>
  );
};

export default LatinCodeWeek;
