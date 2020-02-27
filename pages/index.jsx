import React from 'react';
import Router from 'next/router';
import withStyles from '@material-ui/core/styles/withStyles';
import imageMobile from '../images/splash-mobile.png';
import imageTablet from '../images/splash-tablet.png';
import imageDesktop from '../images/splash-desktop.png';

const styles = (theme => ({
  root: {
    whidth: '100%',
    height: '100vh',
    [theme.breakpoints.up('xs')]:
    {
      backgroundImage: `url(${imageMobile})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${imageTablet})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${imageDesktop})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    },
  },
}));

class App extends React.Component {
  componentDidMount() {
    this.redirect = setTimeout(() => {
      Router.push('/objectives');
    }, 5000);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <style jsx global>
          {`
            body {
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withStyles(styles)(App);
