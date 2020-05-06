/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import NavigationBar from '../components/navigationBar';
import objectives from '../data/objectives';

const Trivia = (props) => {
  const { objective } = props;
  const arrayResult = [];
  let score = 0;
  // eslint-disable-next-line prefer-const
  let [contador, setContador] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [respuestas, setRespuestas] = React.useState([
    {
      Pregunta1: false,
    }, {
      Pregunta2: false,
    }, {
      Pregunta3: false,
    }, {
      Pregunta4: false,
    }, {
      Pregunta5: false,
    },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    contador += 1;
    setContador(contador);
    setOpen(false);
  };

  const handleChange = (event) => {
    const newArr = [...respuestas]; // copying the old datas array
    newArr[Number(event.target.name.slice(8) - 1)][event.target.name] = event.target.value;
    handleClickOpen();
    setRespuestas(newArr);
  };

  const compareAnswers = () => {
    for (let i = 0; i < respuestas.length; i += 1) {
      if (objective.trivia[i].respuestaCorrecta === respuestas[i][`Pregunta${i + 1}`]) {
        score += objective.trivia[i].puntaje;
        arrayResult.push(objective.trivia[i].pregunta);
      }
    }
  };
  compareAnswers();

  return (
    <div>
      <NavigationBar />

      <div className="information">
        <Card elevation={4}>
          <CardContent>
            <Grid container spacing={3} alignItems="center" justify="center">
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom align="center">
                  {objective.title}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                {contador === 5
                  ? (
                    <Grid container spacing={6} alignItems="center" justify="center">
                      <Grid item xs={12} sm={6}>
                        <img src={objective.image} className="imagePresentation" alt="dummy" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom align="center">
                          Respondiste bien
                          {' '}
                          {arrayResult.length}
                          {' '}
                          preguntas.
                        </Typography>
                        <Typography variant="h5" gutterBottom align="center">
                          Y obtuviste
                          {' '}
                          {score}
                          {' '}
                          puntos.
                        </Typography>
                        <Typography gutterBottom align="center">
                          <Link href="/objectives" key={objective.title} className="center">
                            <a className="objective">
                              <Fab color="secondary" aria-label="add" variant="extended">
                                Ir a Objetivos
                              </Fab>
                            </a>
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  )
                  : (
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                          Pregunta
                          {' '}
                          {contador + 1}
                          {': '}
                          {objective.trivia[contador].pregunta}
                        </Typography>
                      </Grid>
                      {objective.trivia[contador].respuestas.map(respuesta => (
                        <Grid item xs={12} sm={6}>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label={`Pregunta${objective.trivia[contador].idPregunta}`}
                              name={`Pregunta${objective.trivia[contador].idPregunta}`}
                              value={respuestas[contador][`Pregunta${objective.trivia[contador].idPregunta}`]}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value={respuesta}
                                control={<Radio />}
                                label={respuesta}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      ))}
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        {objective.trivia[contador].respuestaCorrecta
                          === Object.values(respuestas[contador])[0]
                          ? (
                            <>
                              <DialogTitle id="alert-dialog-title">Correcto!</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  <Typography variant="body1" gutterBottom>
                                    Has obtenido los siguientes puntos
                                  </Typography>
                                  <Typography variant="body1" gutterBottom>
                                    {objective.trivia[contador].puntaje}
                                  </Typography>
                                </DialogContentText>
                              </DialogContent>
                            </>
                          )
                          : (
                            <>
                              <DialogTitle id="alert-dialog-title">Incorrecto!</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  <Typography variant="body1" gutterBottom>
                                    La respuesta correcta es:
                                  </Typography>
                                  <Typography variant="body1" gutterBottom>
                                    {objective.trivia[contador].respuestaCorrecta}
                                  </Typography>
                                </DialogContentText>
                              </DialogContent>
                            </>
                          )
                        }
                        <DialogActions>
                          <Button onClick={handleClose} color="primary" autoFocus>
                            Siguiente
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                  )
                }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>

      <style jsx>
        {`
          .information {
            padding: 10%;
          }
          img.imagePresentation {
            width:100%;
          }
          .objective {
            text-decoration: none;
          }
          @media screen and (max-width: 640px) and (min-width: 0px) {
            .information {
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
};

Trivia.getInitialProps = async ({ query }) => {
  const objective = await objectives[parseInt(query.id, 10) - 1];
  return { objective };
};

export default Trivia;
