import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const color = {
  1: '#eb1c2d',
  2: '#D3A029',
  3: '#279B48',
  4: '#C31F33',
  5: '#EF402B',
  6: '#26AED9',
  7: '#FCB712',
  8: '#8F1838',
  9: '#F36D26',
  10: '#E11484',
  11: '#F99D26',
  12: '#CF8D2A',
  13: '#48773D',
  14: '#187DBC',
  15: '#3EB049',
  16: '#0D568B',
  17: '#183668',
};

const styles = {
  span: {
    color: '#fff',
    display: 'inline-block',
    fontSize: 15,
    padding: 5,
    margin: '10px 0 0 10px',
    border: '1px solid',
    borderRadius: 5,
    right: 50,
  },
};

const RectangularCard = (props) => {
  const {
    classes,
    thumbnail,
    title,
    subtitle,
    objective = [],
  } = props;

  return (
    <>
      <Card elevation={4}>
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom align="center">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={thumbnail} className="imagePresentation" alt="dummy" />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="body1" gutterBottom>
                {subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" className={classes.objective}>
                { objective.map(element => (
                  <span style={{ backgroundColor: color[element.split(' ')[1]] }} className={classes.span}>{element.split(' ')[1]}</span>
                ))
                }
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <style jsx>
        {`
          img.imagePresentation {
            width:100%;
          }
        `}
      </style>
    </>
  );
};

RectangularCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default withStyles(styles)(RectangularCard);
