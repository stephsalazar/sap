/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import dataProyectos from '../data/latinCodeWeek';
import Carousel from '../components/carousel';

const LatinCodeWeek = () => {
  const paises = {
    Argentina: 'https://user-images.githubusercontent.com/25912292/74392323-5d2b3000-4dcc-11ea-83d9-0ab4c38543f1.png',
    Brasil: 'https://user-images.githubusercontent.com/25912292/74392324-5dc3c680-4dcc-11ea-9fc0-26af2d4065e9.png',
    Chile: 'https://user-images.githubusercontent.com/25912292/74392325-5dc3c680-4dcc-11ea-8a7c-b98aacee63cd.png',
    Colombia: 'https://user-images.githubusercontent.com/25912292/74392326-5e5c5d00-4dcc-11ea-9afb-6e2183b0772f.png',
    'Costa Rica': 'https://user-images.githubusercontent.com/25912292/74392327-5e5c5d00-4dcc-11ea-9df2-e39e4ea275a3.png',
    Panamá: 'https://user-images.githubusercontent.com/25912292/74392329-5ef4f380-4dcc-11ea-9f0b-102ba3e62e77.png',
    Paraguay: 'https://user-images.githubusercontent.com/25912292/74392330-5f8d8a00-4dcc-11ea-9963-084bc09adb18.png',
    Perú: 'https://user-images.githubusercontent.com/25912292/74392331-5f8d8a00-4dcc-11ea-93a3-62eab9d543df.png',
    'Puerto Rico': 'https://user-images.githubusercontent.com/25912292/74392333-5f8d8a00-4dcc-11ea-9ced-dbc1f3600b02.png',
    Venezuela: 'https://user-images.githubusercontent.com/25912292/74392334-60262080-4dcc-11ea-9378-43474b850b2f.png',
    México: 'https://user-images.githubusercontent.com/25912292/74392328-5ef4f380-4dcc-11ea-9e37-e0144815a498.png',
  };

  return (
    <div>
      <NavigationBar />

      <div className="position">
        <Card elevation={4}>
          <CardContent>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} justify="center">
                <Typography variant="h4" gutterBottom align="center">
                  Latin Code Week
                </Typography>
                <img src={dataProyectos.imagePresentation} className="imagePresentation" alt="dummy" />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6" gutterBottom align="center">
                  Latin Code Week acerca a los jóvenes a las carreras de ciencia, tecnología,
                  ingeniería y matemáticas (STEM), para convertirse en la fuerza laboral de los
                  empleos del futuro.
                </Typography>
                <Typography variant="h6" gutterBottom align="center">
                  Más de 5,000 jóvenes han sido impactados gracias a este programa.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className="containerCountrys">
                  <div>
                    {Object.keys(paises).map(pais => (<img src={paises[pais]} />))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card elevation={4}>
          <CardContent>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} md={7} justify="center">
                <Carousel data={dataProyectos.dataSlides} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={3} alignItems="center">
          {dataProyectos.data.map(item => (
            <Grid item xs={12} sm={6}>
              <RectangularCard
                thumbnail={item.thumbnail}
                title={item.title}
                subtitle={item.subtitulo}
                objective={item.objective}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <style jsx>
        {`
          img.imagePresentation {
            width: 80%;
            padding: 1% 10%;
          }
          .position {
            display: grid;
            grid-gap: 30px;
            padding: 10%;
          }
          .containerCountrys {
            align-items: center;
            justify-content: center
          }
          .containerCountrys img{
            width: 5%;
            margin: 2%;
          }
          @media screen and (max-width: 640px) and (min-width: 0px) {
            .containerCountrys img{
              width:12%;
              margin:3%;
            }
            .position {
              padding-top: 35%;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
        body {
          margin: 0;
          font-family: system-ui;
          background: #F7F7F7;
        }
      `}
      </style>
    </div>
  );
};

export default LatinCodeWeek;
