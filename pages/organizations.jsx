/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ongs from '../data/ongs';
import NavigationBar from '../components/navigationBar';

const LatinCodeWeek = () => (
  <div>
    <NavigationBar />

    <div className="ongs">
      { ongs.map(ong => (
        <Link href={`/info-ong/?id=${ong.index}`} key={ong.title}>
          <a className="ong">
            <Card elevation={4}>
              <CardContent>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom align="center">
                      {ong.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3} justify="center">
                    <img src={ong.logo} alt={ong.name} className="imagePresentation" />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography gutterBottom>
                      {ong.description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </a>
        </Link>
      ))}
    </div>
    <style jsx>
      {`
        img.imagePresentation {
          width:100%;
        }
        .ongs {
          display: grid;
          grid-gap: 30px;
          padding: 10%;
          box-shadow: 3px 3px 3px grey;
        }
        .ong {
          text-decoration:none;
        }
        @media screen and (max-width: 640px) and (min-width: 0px) {
          .ongs {
            padding-top: 30%;
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

export default LatinCodeWeek;
