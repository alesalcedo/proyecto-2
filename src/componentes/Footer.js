import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 0),
  },
  container: {
    maxWidth: '1170px',
    margin: '0 auto',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0),
  },
  icon: {
    color: theme.palette.primary.contrastText,
    fontSize: '2rem',
    margin: theme.spacing(0, 1),
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  [theme.breakpoints.down('sm')]: {
    column: {
      flex: 1,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  
  return (
    <footer className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.column}>
          <h4>Información de contacto</h4>
          <p>Dirección: Calle 123</p>
          <p>Teléfono: 555-555-5555</p>
          <p>Email: info@ejemplo.com</p>
        </Grid>
        <Grid item xs={4} className={classes.column}>
          <h4>Enlaces</h4>
          <p>Inicio</p>
          <p>Productos</p>
          <p>Hombre</p>
          <p>Mujer</p>
          <p>Niño</p>
        </Grid>
        <Grid item xs={4} className={classes.column}>
          <h4>Síguenos en</h4>
          <a href="https://facebook.com">
            <FacebookIcon className={classes.icon} />
          </a>
          <a href="https://twitter.com">
            <TwitterIcon className={classes.icon} />
          </a>
          <a href="https://instagram.com">
            <InstagramIcon className={classes.icon} />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
}
export default Footer
